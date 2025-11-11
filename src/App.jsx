// App.jsx
import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home_Main from "./Components/Home_Page.jsx";
import Navbar_1 from "./Components/Navbar_1.jsx";
import BottomToTop from "./Components/BottomToTop.jsx";
import Privacy from "./Components/Privacy.jsx";
import About from "./Components/About.jsx";
import Terms from "./Components/Terms.jsx";
import Contact from "./Components/Contact.jsx";
import "./App.css";
import "./css/PlansAndPayments.css";
import "./css/BottomToTop.css";
import "./css/Home_Page.css";

// 🌍 All Country Data (default: India active)
const COUNTRY_DATA = {
  india: { code: "IN", timezone: "Asia/Kolkata", lang: "en-IN", active: true },
  uk: { code: "GB", timezone: "Europe/London", lang: "en-GB", active: false },
  usa: { code: "US", timezone: "America/New_York", lang: "en-US", active: false },
  fr: { code: "FR", timezone: "Europe/Paris", lang: "fr-FR", active: false },
};

/**
 * Build a map keyed by country CODE (IN, GB, US, FR) for easier routing/storage.
 * Each entry contains original keyName (like "india") so we can still use original labels if needed.
 */
const buildCountryCodeMap = () => {
  const map = {};
  Object.keys(COUNTRY_DATA).forEach((key) => {
    const code = (COUNTRY_DATA[key].code || key).toUpperCase();
    map[code] = { ...COUNTRY_DATA[key], keyName: key, code };
  });
  return map;
};
const COUNTRY_CODE_MAP = buildCountryCodeMap();

/**
 * Convert route param to a country CODE (e.g. "IN", "india" -> "IN", "uk" -> "GB").
 * Returns uppercase code or null if not found.
 */
const paramToCode = (param) => {
  if (!param) return null;
  const p = String(param).trim();
  // If likely a code (2 letters)
  if (p.length === 2) {
    const upper = p.toUpperCase();
    if (COUNTRY_CODE_MAP[upper]) return upper;
    // allow UK -> GB
    if (upper === "UK" && COUNTRY_CODE_MAP["GB"]) return "GB";
  }
  // else try to match by original key or country name (case-insensitive)
  const lower = p.toLowerCase();
  // match original keys: "india", "uk", "usa", "fr"
  if (COUNTRY_DATA[lower] && COUNTRY_DATA[lower].code) {
    return COUNTRY_DATA[lower].code.toUpperCase();
  }
  // fallback try find by name field (if added)
  const found = Object.values(COUNTRY_CODE_MAP).find((c) => {
    const name = c.name || c.keyName || "";
    return name.toLowerCase() === lower || name.toLowerCase().includes(lower);
  });
  if (found) return found.code;
  return null;
};

// 🚀 CountryRedirect
// - Runs on app root and updates localStorage based on detection (replace detect logic as needed)
// - Redirects "/" to "/<CODE>"
const CountryRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // TODO: Replace this simple detection with real IP-based detection if you want
  const detectCountryKey = () => {
    // currently default to the key "india"
    return "india";
  };

  useEffect(() => {
    const detectedKey = detectCountryKey(); // e.g., "india"
    const detectedCode = (COUNTRY_DATA[detectedKey] && COUNTRY_DATA[detectedKey].code) 
      ? COUNTRY_DATA[detectedKey].code.toUpperCase() 
      : "IN";
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

    // Build updated data keyed by CODE
    const updatedData = {};
    Object.keys(COUNTRY_DATA).forEach((k) => {
      const code = COUNTRY_DATA[k].code.toUpperCase();
      updatedData[code] = {
        ...COUNTRY_DATA[k],
        keyName: k,
        code,
        active: code === detectedCode,
        currentTime: new Date().toLocaleTimeString([], { timeZone: COUNTRY_DATA[k].timezone }),
      };
    });

    const storedCountryCode = localStorage.getItem("user_country");

    if (storedCountryCode !== detectedCode) {
      localStorage.setItem("all_countries", JSON.stringify(updatedData));
      localStorage.setItem("user_country", detectedCode);
      localStorage.setItem("user_lang", navigator.language || COUNTRY_DATA[detectedKey].lang);
      localStorage.setItem("user_timezone", timezone);
      console.log("Country changed → localStorage updated:", detectedCode);
    } else {
      // still refresh times
      localStorage.setItem("all_countries", JSON.stringify(updatedData));
      console.log("Same country → refreshed all_countries times:", storedCountryCode);
    }

    // Redirect root "/" to detected country code path (only if we are on "/")
    const targetPath = `/${detectedCode}`;
    if (location.pathname === "/") {
      navigate(targetPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  // Also listen to storage changes from other tabs and redirect current tab to that code
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "user_country" && e.newValue) {
        const code = e.newValue;
        if (window.location.pathname !== `/${code}`) {
          navigate(`/${code}`, { replace: true });
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [navigate]);

  return null;
};

// 🏳️ Country Page
const CountryPage = () => {
  const { country: rawParam } = useParams();
  const navigate = useNavigate();

  // Resolve param to CODE (IN, GB, US, FR) — supports "/IN" or "/india" etc.
  const code = paramToCode(rawParam);

  useEffect(() => {
    if (!code) {
      // invalid param: redirect to default IN
      navigate("/IN", { replace: true });
      return;
    }

    const storedCountryCode = localStorage.getItem("user_country");
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

    // Build updated data keyed by CODE (refresh currentTime + active flag)
    const updatedData = {};
    Object.keys(COUNTRY_DATA).forEach((k) => {
      const c = COUNTRY_DATA[k].code.toUpperCase();
      updatedData[c] = {
        ...COUNTRY_DATA[k],
        keyName: k,
        code: c,
        active: c === code,
        currentTime: new Date().toLocaleTimeString([], { timeZone: COUNTRY_DATA[k].timezone }),
      };
    });

    // If URL code differs from localStorage → update localStorage
    if (storedCountryCode !== code) {
      localStorage.setItem("all_countries", JSON.stringify(updatedData));
      localStorage.setItem("user_country", code);
      localStorage.setItem("user_lang", navigator.language || (COUNTRY_CODE_MAP[code] && COUNTRY_CODE_MAP[code].lang));
      localStorage.setItem("user_timezone", timezone);
      console.log("✅ URL changed → localStorage updated to:", code);
    } else {
      // still refresh all_countries times
      localStorage.setItem("all_countries", JSON.stringify(updatedData));
      console.log("⟳ Refreshed all_countries times for:", code);
    }
  }, [code, navigate]);

  // Read the stored info (all_countries is keyed by CODE)
  const stored = (() => {
    try {
      return JSON.parse(localStorage.getItem("all_countries")) || {};
    } catch {
      return {};
    }
  })();

  const countryInfo = (code && stored[code]) ? stored[code] : (code && COUNTRY_CODE_MAP[code]) ? COUNTRY_CODE_MAP[code] : null;

  if (!countryInfo) {
    return <div style={{ padding: 24 }}>Loading / invalid country — redirecting...</div>;
  }

  // Compute local time for the resolved country's timezone
  const localTime = new Date().toLocaleTimeString([], {
    timeZone: countryInfo.timezone,
  });

  return (
    <div className="no-select">
      {/* Pass the country CODE and localTime to Home_Main */}
      <Home_Main country={countryInfo.code} localTime={localTime} />
    </div>
  );
};

// ⚡ Main App
function App() {
  useEffect(() => {
    const noSelectElements = document.querySelectorAll(".no-select");
    noSelectElements.forEach((el) => {
      el.style.userSelect = "none";
    });
  }, []);

  return (
    <>
      <Navbar_1 />
      <BottomToTop />
      <CountryRedirect />

      <Routes>
        <Route path="/" element={<Home_Main />} />
        <Route path="/:country" element={<CountryPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
