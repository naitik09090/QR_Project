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
  canada: { code: "CA", timezone: "America/Toronto", lang: "en-CA", active: false },
  australia: { code: "AU", timezone: "Australia/Sydney", lang: "en-AU", active: false },
  france: { code: "FR", timezone: "Europe/Paris", lang: "fr-FR", active: false },
  germany: { code: "DE", timezone: "Europe/Berlin", lang: "de-DE", active: false },
  japan: { code: "JP", timezone: "Asia/Tokyo", lang: "ja-JP", active: false },
  china: { code: "CN", timezone: "Asia/Shanghai", lang: "zh-CN", active: false },
  southkorea: { code: "KR", timezone: "Asia/Seoul", lang: "ko-KR", active: false },
  singapore: { code: "SG", timezone: "Asia/Singapore", lang: "en-SG", active: false },
  newzealand: { code: "NZ", timezone: "Pacific/Auckland", lang: "en-NZ", active: false },
  brazil: { code: "BR", timezone: "America/Sao_Paulo", lang: "pt-BR", active: false },
  mexico: { code: "MX", timezone: "America/Mexico_City", lang: "es-MX", active: false },
  argentina: { code: "AR", timezone: "America/Argentina/Buenos_Aires", lang: "es-AR", active: false },
  russia: { code: "RU", timezone: "Europe/Moscow", lang: "ru-RU", active: false },
  southafrica: { code: "ZA", timezone: "Africa/Johannesburg", lang: "en-ZA", active: false },
  nigeria: { code: "NG", timezone: "Africa/Lagos", lang: "en-NG", active: false },
  pakistan: { code: "PK", timezone: "Asia/Karachi", lang: "en-PK", active: false },
  bangladesh: { code: "BD", timezone: "Asia/Dhaka", lang: "bn-BD", active: false },
  sri_lanka: { code: "LK", timezone: "Asia/Colombo", lang: "si-LK", active: false },
  uae: { code: "AE", timezone: "Asia/Dubai", lang: "ar-AE", active: false },
  saudi: { code: "SA", timezone: "Asia/Riyadh", lang: "ar-SA", active: false },
  spain: { code: "ES", timezone: "Europe/Madrid", lang: "es-ES", active: false },
  italy: { code: "IT", timezone: "Europe/Rome", lang: "it-IT", active: false },
  chile: { code: "CL", timezone: "America/Santiago", lang: "es-CL", active: false }
  // add more entries here as needed...
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
  if (p.length === 2) {
    const upper = p.toUpperCase();
    if (COUNTRY_CODE_MAP[upper]) return upper;
    if (upper === "UK" && COUNTRY_CODE_MAP["GB"]) return "GB";
  }
  const lower = p.toLowerCase();
  if (COUNTRY_DATA[lower] && COUNTRY_DATA[lower].code) {
    return COUNTRY_DATA[lower].code.toUpperCase();
  }
  const found = Object.values(COUNTRY_CODE_MAP).find((c) => {
    const name = c.name || c.keyName || "";
    return name.toLowerCase() === lower || name.toLowerCase().includes(lower);
  });
  if (found) return found.code;
  return null;
};

/* ---------------------------
   New: Timezone -> Country detection
   --------------------------- */
const detectCountryFromTimezone = (tz) => {
  if (!tz || typeof tz !== "string") return null;
  const t = tz.toLowerCase();

  // 1) Try match against the timezone strings in COUNTRY_DATA (best effort)
  for (const entryKey of Object.keys(COUNTRY_DATA)) {
    const entry = COUNTRY_DATA[entryKey];
    if (!entry.timezone) continue;
    // match substrings like "asia/kolkata" or "america/new_york"
    if (t.includes(entry.timezone.toLowerCase().replace("_", "_").split("/").pop())) {
      return entry.code.toUpperCase();
    }
    // also allow matching entire IANA timezone (e.g. "asia/kolkata")
    if (t.includes(entry.timezone.toLowerCase())) {
      return entry.code.toUpperCase();
    }
  }

  // 2) Common abbreviation fallbacks
  if (t.includes("kolkata") || t.includes("india") || t.includes("ist")) return "IN";
  if (t.includes("london") || t.includes("gmt")) return "GB";
  if (t.includes("paris") || t.includes("cet")) return "FR"; // could be FR/DE/IT/ES - choose one or refine
  if (t.includes("tokyo") || t.includes("jst")) return "JP";
  if (t.includes("sydney") || t.includes("australia")) return "AU";
  if (t.includes("new_york") || t.includes("est") || t.includes("eastern")) return "US";
  if (t.includes("los_angeles") || t.includes("pst") || t.includes("pacific")) return "US";
  if (t.includes("toronto") || t.includes("eastern")) return "CA";

  // fallback null (you may choose a default like "IN")
  return null;
};

// 🚀 CountryRedirect (updated: uses timezone detection and redirects WHEN user opens root or a country route)
const CountryRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // run only in browser
    if (typeof window === "undefined") return;

    // 1) detect via timezone (reflects PC clock/timezone)
    const tz = Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone || "";
    const detectedCode = detectCountryFromTimezone(tz) || "IN"; // default to IN

    const timezone = tz || "UTC";

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

    const storedCountryCode = window.localStorage.getItem("user_country");

    if (storedCountryCode !== detectedCode) {
      window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
      window.localStorage.setItem("user_country", detectedCode);
      window.localStorage.setItem("user_lang", navigator.language || COUNTRY_DATA["india"].lang);
      window.localStorage.setItem("user_timezone", timezone);
      console.log("Timezone detected → localStorage updated:", detectedCode, "tz:", tz);
    } else {
      // still refresh times
      window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
      console.log("Timezone detected but same country → refreshed all_countries times:", storedCountryCode);
    }

    // Decide whether current path is a country-route (root or /<code> or /<key>)
    const pathSegment = location.pathname.replace(/^\//, "").toUpperCase();
    const isCountryRoute =
      location.pathname === "/" ||
      !!COUNTRY_CODE_MAP[pathSegment] ||
      Object.keys(COUNTRY_DATA).includes(pathSegment.toLowerCase());

    // If user opened root or a country route, redirect to detectedCode when different
    const targetPath = `/${detectedCode}`;
    if (isCountryRoute && window.location.pathname.toUpperCase() !== targetPath.toUpperCase()) {
      navigate(targetPath, { replace: true });
    }
  }, [location.pathname, navigate]);

  // Listen for storage updates from other tabs
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onStorage = (e) => {
      if (e.key === "user_country" && e.newValue) {
        const code = e.newValue;
        if (window.location.pathname.toUpperCase() !== `/${code}`) {
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
    if (typeof window === "undefined") return;

    if (!code) {
      // invalid param: redirect to default IN
      navigate("/IN", { replace: true });
      return;
    }

    const storedCountryCode = window.localStorage.getItem("user_country");
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
      window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
      window.localStorage.setItem("user_country", code);
      window.localStorage.setItem("user_lang", navigator.language || (COUNTRY_CODE_MAP[code] && COUNTRY_CODE_MAP[code].lang));
      window.localStorage.setItem("user_timezone", timezone);
      console.log("✅ URL changed → localStorage updated to:", code);
    } else {
      // still refresh all_countries times
      window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
      console.log("⟳ Refreshed all_countries times for:", code);
    }
  }, [code, navigate]);

  // Read the stored info (all_countries is keyed by CODE)
  const stored = (() => {
    try {
      return JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("all_countries") : null) || {};
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
    if (typeof document !== "undefined") {
      const noSelectElements = document.querySelectorAll(".no-select");
      noSelectElements.forEach((el) => {
        el.style.userSelect = "none";
      });
    }
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
