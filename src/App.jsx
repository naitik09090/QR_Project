import React, { Suspense, lazy, useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar_1 from "./Components/Navbar_1.jsx";
import BottomToTop from "./Components/BottomToTop.jsx";
import { sendPageView } from "./ga4";
import "./App.scss";
import "./css/PlansAndPayments.scss";
import "./css/BottomToTop.scss";
import "./css/Home_Pg.scss";
import "./css/Navbar.scss";
import "./css/Blog.scss";
import "./css/Blog_News.scss";
// import Footer from "./Components/Footer.jsx";

// Lazy-loaded components
const Home_Main = lazy(() => import("./Components/Home_Page.jsx"));
const Privacy = lazy(() => import("./Components/Privacy.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Terms = lazy(() => import("./Components/Terms.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));
const Blog = lazy(() => import("./Components/Blog.jsx"));
const Blog_News = lazy(() => import("./Components/Blog_News.jsx"));

// Core Landing Pages (Stay in Qr_Landing_Pages)
const WiFiQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/WiFiQRCodeLandingPage.jsx"));
const MenuQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/MenuQRCodeLandingPage.jsx"));
const BusinessCardQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/BusinessCardQRCodeLandingPage.jsx"));
const InstagramQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/InstagramQRCodeLandingPage.jsx"));
const YouTubeQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/YouTubeQRCodeLandingPage.jsx"));
const PDFQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/PDFQRCodeLandingPage.jsx"));
const LocationQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/LocationQRCodeLandingPage.jsx"));
const WhatsAppQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/WhatsAppQRCodeLandingPage.jsx"));
const EventTicketQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/EventTicketQRCodeLandingPage.jsx"));
const AppStoreQRCodeLandingPage = lazy(() => import("./Components/Qr_Landing_Pages/AppStoreQRCodeLandingPage.jsx"));

// Business & Marketing
const GoogleReviewQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/GoogleReviewQRCodeLandingPage.jsx"));
const SmallBusinessQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/SmallBusinessQRCodeLandingPage.jsx"));
const MarketingCampaignQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/MarketingCampaignQRCodeLandingPage.jsx"));
const ProductPackagingQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/ProductPackagingQRCodeLandingPage.jsx"));
const FlyersQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/FlyersQRCodeLandingPage.jsx"));
const BrochuresQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/BrochuresQRCodeLandingPage.jsx"));
const RealEstateQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/RealEstateQRCodeLandingPage.jsx"));
const BusinessWebsiteQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/BusinessWebsiteQRCodeLandingPage.jsx"));
const EmailSignatureQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/EmailSignatureQRCodeLandingPage.jsx"));
const LeadGenerationQRCodeLandingPage = lazy(() => import("./Components/Business & Marketing/LeadGenerationQRCodeLandingPage.jsx"));

// Restaurant & Hospitality
const DigitalMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/DigitalMenuQRCodeLandingPage.jsx"));
const CafeMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/CafeMenuQRCodeLandingPage.jsx"));
const RestaurantOrderingQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/RestaurantOrderingQRCodeLandingPage.jsx"));
const ContactlessOrderingQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/ContactlessOrderingQRCodeLandingPage.jsx"));
const TableMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/TableMenuQRCodeLandingPage.jsx"));
const BarMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/BarMenuQRCodeLandingPage.jsx"));
const HotelServicesQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/HotelServicesQRCodeLandingPage.jsx"));
const RoomServiceQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/RoomServiceQRCodeLandingPage.jsx"));
const FoodDeliveryMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/FoodDeliveryMenuQRCodeLandingPage.jsx"));
const TakeawayMenuQRCodeLandingPage = lazy(() => import("./Components/Restaurant & Hospitality/TakeawayMenuQRCodeLandingPage.jsx"));

// Social Media
const TikTokQRCodeLandingPage = lazy(() => import("./Components/Social Media/TikTokQRCodeLandingPage.jsx"));
const TwitterQRCodeLandingPage = lazy(() => import("./Components/Social Media/TwitterQRCodeLandingPage.jsx"));
const PinterestQRCodeLandingPage = lazy(() => import("./Components/Social Media/PinterestQRCodeLandingPage.jsx"));
const SnapchatQRCodeLandingPage = lazy(() => import("./Components/Social Media/SnapchatQRCodeLandingPage.jsx"));
const LinktreeQRCodeLandingPage = lazy(() => import("./Components/Social Media/LinktreeQRCodeLandingPage.jsx"));
const SocialMediaProfileQRCodeLandingPage = lazy(() => import("./Components/Social Media/SocialMediaProfileQRCodeLandingPage.jsx"));
const SocialMediaLinksQRCodeLandingPage = lazy(() => import("./Components/Social Media/SocialMediaLinksQRCodeLandingPage.jsx"));
const YouTubeChannelQRCodeLandingPage = lazy(() => import("./Components/Social Media/YouTubeChannelQRCodeLandingPage.jsx"));
const InstagramProfileQRCodeLandingPage = lazy(() => import("./Components/Social Media/InstagramProfileQRCodeLandingPage.jsx"));
const FacebookPageQRCodeLandingPage = lazy(() => import("./Components/Social Media/FacebookPageQRCodeLandingPage.jsx"));

// Payments & FinTech
const PayPalPaymentQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/PayPalPaymentQRCodeLandingPage.jsx"));
const StripePaymentQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/StripePaymentQRCodeLandingPage.jsx"));
const GooglePayQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/GooglePayQRCodeLandingPage.jsx"));
const ApplePayQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/ApplePayQRCodeLandingPage.jsx"));
const OnlinePaymentsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/OnlinePaymentsQRCodeLandingPage.jsx"));
const DonationsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/DonationsQRCodeLandingPage.jsx"));
const TipsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/TipsQRCodeLandingPage.jsx"));
const FreelancersQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/FreelancersQRCodeLandingPage.jsx"));
const InvoicesQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/InvoicesQRCodeLandingPage.jsx"));
const SubscriptionsQRCodeLandingPage = lazy(() => import("./Components/Payment_Qr_Pages/SubscriptionsQRCodeLandingPage.jsx"));

// Files & Tools
const ExcelQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/ExcelQRCodeLandingPage.jsx"));
const WordDocumentQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/WordDocumentQRCodeLandingPage.jsx"));
const PowerPointQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/PowerPointQRCodeLandingPage.jsx"));
const ZipFileQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/ZipFileQRCodeLandingPage.jsx"));
const AudioFileQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/AudioFileQRCodeLandingPage.jsx"));
const VideoFileQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/VideoFileQRCodeLandingPage.jsx"));
const GoogleDocsQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/GoogleDocsQRCodeLandingPage.jsx"));
const GoogleSheetsQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/GoogleSheetsQRCodeLandingPage.jsx"));
const DropboxQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/DropboxQRCodeLandingPage.jsx"));
const CloudFilesQRCodeLandingPage = lazy(() => import("./Components/Files & Tools/CloudFilesQRCodeLandingPage.jsx"));


const NotFound = lazy(() => import("./Components/404_Page.jsx"));

// 🌍 All Country Data (expanded — primary timezone & locale for each country)
// const COUNTRY_DATA = {
//   afghanistan: { code: "AF", timezone: "Asia/Kabul", lang: "ps-AF", active: false },
//   albania: { code: "AL", timezone: "Europe/Tirane", lang: "sq-AL", active: false },
//   algeria: { code: "DZ", timezone: "Africa/Algiers", lang: "ar-DZ", active: false },
//   andorra: { code: "AD", timezone: "Europe/Andorra", lang: "ca-AD", active: false },
//   angola: { code: "AO", timezone: "Africa/Luanda", lang: "pt-AO", active: false },
//   argentina: { code: "AR", timezone: "America/Argentina/Buenos_Aires", lang: "es-AR", active: false },
//   armenia: { code: "AM", timezone: "Asia/Yerevan", lang: "hy-AM", active: false },
//   australia: { code: "AU", timezone: "Australia/Sydney", lang: "en-AU", active: false },
//   austria: { code: "AT", timezone: "Europe/Vienna", lang: "de-AT", active: false },
//   azerbaijan: { code: "AZ", timezone: "Asia/Baku", lang: "az-AZ", active: false },
//   bahamas: { code: "BS", timezone: "America/Nassau", lang: "en-BS", active: false },
//   bahrain: { code: "BH", timezone: "Asia/Bahrain", lang: "ar-BH", active: false },
//   bangladesh: { code: "BD", timezone: "Asia/Dhaka", lang: "bn-BD", active: false },
//   belarus: { code: "BY", timezone: "Europe/Minsk", lang: "be-BY", active: false },
//   belgium: { code: "BE", timezone: "Europe/Brussels", lang: "nl-BE", active: false },
//   belize: { code: "BZ", timezone: "America/Belize", lang: "en-BZ", active: false },
//   benin: { code: "BJ", timezone: "Africa/Porto-Novo", lang: "fr-BJ", active: false },
//   bhutan: { code: "BT", timezone: "Asia/Thimphu", lang: "dz-BT", active: false },
//   bolivia: { code: "BO", timezone: "America/La_Paz", lang: "es-BO", active: false },
//   bosnia: { code: "BA", timezone: "Europe/Sarajevo", lang: "bs-BA", active: false },
//   botswana: { code: "BW", timezone: "Africa/Gaborone", lang: "en-BW", active: false },
//   brazil: { code: "BR", timezone: "America/Sao_Paulo", lang: "pt-BR", active: false },
//   brunei: { code: "BN", timezone: "Asia/Brunei", lang: "ms-BN", active: false },
//   bulgaria: { code: "BG", timezone: "Europe/Sofia", lang: "bg-BG", active: false },
//   burkina_faso: { code: "BF", timezone: "Africa/Ouagadougou", lang: "fr-BF", active: false },
//   burundi: { code: "BI", timezone: "Africa/Bujumbura", lang: "fr-BI", active: false },
//   cabo_verde: { code: "CV", timezone: "Atlantic/Cape_Verde", lang: "pt-CV", active: false },
//   cambodia: { code: "KH", timezone: "Asia/Phnom_Penh", lang: "km-KH", active: false },
//   cameroon: { code: "CM", timezone: "Africa/Douala", lang: "fr-CM", active: false },
//   canada: { code: "CA", timezone: "America/Toronto", lang: "en-CA", active: false },
//   central_african: { code: "CF", timezone: "Africa/Bangui", lang: "fr-CF", active: false },
//   chad: { code: "TD", timezone: "Africa/Ndjamena", lang: "fr-TD", active: false },
//   chile: { code: "CL", timezone: "America/Santiago", lang: "es-CL", active: false },
//   china: { code: "CN", timezone: "Asia/Shanghai", lang: "zh-CN", active: false },
//   colombia: { code: "CO", timezone: "America/Bogota", lang: "es-CO", active: false },
//   comoros: { code: "KM", timezone: "Indian/Comoro", lang: "fr-KM", active: false },
//   costa_rica: { code: "CR", timezone: "America/Costa_Rica", lang: "es-CR", active: false },
//   croatia: { code: "HR", timezone: "Europe/Zagreb", lang: "hr-HR", active: false },
//   cuba: { code: "CU", timezone: "America/Havana", lang: "es-CU", active: false },
//   cyprus: { code: "CY", timezone: "Asia/Nicosia", lang: "el-CY", active: false },
//   czechia: { code: "CZ", timezone: "Europe/Prague", lang: "cs-CZ", active: false },
//   denmark: { code: "DK", timezone: "Europe/Copenhagen", lang: "da-DK", active: false },
//   djibouti: { code: "DJ", timezone: "Africa/Djibouti", lang: "fr-DJ", active: false },
//   dominica: { code: "DM", timezone: "America/Dominica", lang: "en-DM", active: false },
//   dominican: { code: "DO", timezone: "America/Santo_Domingo", lang: "es-DO", active: false },
//   ecuador: { code: "EC", timezone: "America/Guayaquil", lang: "es-EC", active: false },
//   egypt: { code: "EG", timezone: "Africa/Cairo", lang: "ar-EG", active: false },
//   el_salvador: { code: "SV", timezone: "America/El_Salvador", lang: "es-SV", active: false },
//   equatorial_guinea: { code: "GQ", timezone: "Africa/Malabo", lang: "es-GQ", active: false },
//   eritrea: { code: "ER", timezone: "Africa/Asmara", lang: "ti-ER", active: false },
//   estonia: { code: "EE", timezone: "Europe/Tallinn", lang: "et-EE", active: false },
//   eswatini: { code: "SZ", timezone: "Africa/Mbabane", lang: "en-SZ", active: false },
//   ethiopia: { code: "ET", timezone: "Africa/Addis_Ababa", lang: "am-ET", active: false },
//   fiji: { code: "FJ", timezone: "Pacific/Fiji", lang: "en-FJ", active: false },
//   finland: { code: "FI", timezone: "Europe/Helsinki", lang: "fi-FI", active: false },
//   france: { code: "FR", timezone: "Europe/Paris", lang: "fr-FR", active: false },
//   gabon: { code: "GA", timezone: "Africa/Libreville", lang: "fr-GA", active: false },
//   gambia: { code: "GM", timezone: "Africa/Banjul", lang: "en-GM", active: false },
//   georgia: { code: "GE", timezone: "Asia/Tbilisi", lang: "ka-GE", active: false },
//   germany: { code: "DE", timezone: "Europe/Berlin", lang: "de-DE", active: false },
//   ghana: { code: "GH", timezone: "Africa/Accra", lang: "en-GH", active: false },
//   greece: { code: "GR", timezone: "Europe/Athens", lang: "el-GR", active: false },
//   grenada: { code: "GD", timezone: "America/Grenada", lang: "en-GD", active: false },
//   guatemala: { code: "GT", timezone: "America/Guatemala", lang: "es-GT", active: false },
//   guinea: { code: "GN", timezone: "Africa/Conakry", lang: "fr-GN", active: false },
//   guinea_bissau: { code: "GW", timezone: "Africa/Bissau", lang: "pt-GW", active: false },
//   guyana: { code: "GY", timezone: "America/Guyana", lang: "en-GY", active: false },
//   haiti: { code: "HT", timezone: "America/Port-au-Prince", lang: "fr-HT", active: false },
//   honduras: { code: "HN", timezone: "America/Tegucigalpa", lang: "es-HN", active: false },
//   hungary: { code: "HU", timezone: "Europe/Budapest", lang: "hu-HU", active: false },
//   iceland: { code: "IS", timezone: "Atlantic/Reykjavik", lang: "is-IS", active: false },
//   india: { code: "IN", timezone: "Asia/Kolkata", lang: "en-IN", active: true },
//   indonesia: { code: "ID", timezone: "Asia/Jakarta", lang: "id-ID", active: false },
//   iran: { code: "IR", timezone: "Asia/Tehran", lang: "fa-IR", active: false },
//   iraq: { code: "IQ", timezone: "Asia/Baghdad", lang: "ar-IQ", active: false },
//   ireland: { code: "IE", timezone: "Europe/Dublin", lang: "en-IE", active: false },
//   israel: { code: "IL", timezone: "Asia/Jerusalem", lang: "he-IL", active: false },
//   italy: { code: "IT", timezone: "Europe/Rome", lang: "it-IT", active: false },
//   jamaica: { code: "JM", timezone: "America/Jamaica", lang: "en-JM", active: false },
//   japan: { code: "JP", timezone: "Asia/Tokyo", lang: "ja-JP", active: false },
//   jordan: { code: "JO", timezone: "Asia/Amman", lang: "ar-JO", active: false },
//   kazakhstan: { code: "KZ", timezone: "Asia/Almaty", lang: "kk-KZ", active: false },
//   kenya: { code: "KE", timezone: "Africa/Nairobi", lang: "en-KE", active: false },
//   kiribati: { code: "KI", timezone: "Pacific/Tarawa", lang: "en-KI", active: false },
//   kuwait: { code: "KW", timezone: "Asia/Kuwait", lang: "ar-KW", active: false },
//   kyrgyzstan: { code: "KG", timezone: "Asia/Bishkek", lang: "ky-KG", active: false },
//   laos: { code: "LA", timezone: "Asia/Vientiane", lang: "lo-LA", active: false },
//   latvia: { code: "LV", timezone: "Europe/Riga", lang: "lv-LV", active: false },
//   lebanon: { code: "LB", timezone: "Asia/Beirut", lang: "ar-LB", active: false },
//   lesotho: { code: "LS", timezone: "Africa/Maseru", lang: "en-LS", active: false },
//   liberia: { code: "LR", timezone: "Africa/Monrovia", lang: "en-LR", active: false },
//   libya: { code: "LY", timezone: "Africa/Tripoli", lang: "ar-LY", active: false },
//   liechtenstein: { code: "LI", timezone: "Europe/Vaduz", lang: "de-LI", active: false },
//   lithuania: { code: "LT", timezone: "Europe/Vilnius", lang: "lt-LT", active: false },
//   luxembourg: { code: "LU", timezone: "Europe/Luxembourg", lang: "fr-LU", active: false },
//   madagascar: { code: "MG", timezone: "Indian/Antananarivo", lang: "fr-MG", active: false },
//   malawi: { code: "MW", timezone: "Africa/Blantyre", lang: "en-MW", active: false },
//   malaysia: { code: "MY", timezone: "Asia/Kuala_Lumpur", lang: "ms-MY", active: false },
//   maldives: { code: "MV", timezone: "Indian/Maldives", lang: "dv-MV", active: false },
//   mali: { code: "ML", timezone: "Africa/Bamako", lang: "fr-ML", active: false },
//   malta: { code: "MT", timezone: "Europe/Malta", lang: "mt-MT", active: false },
//   marshall_islands: { code: "MH", timezone: "Pacific/Majuro", lang: "en-MH", active: false },
//   mauritania: { code: "MR", timezone: "Africa/Nouakchott", lang: "ar-MR", active: false },
//   mauritius: { code: "MU", timezone: "Indian/Mauritius", lang: "en-MU", active: false },
//   mexico: { code: "MX", timezone: "America/Mexico_City", lang: "es-MX", active: false },
//   micronesia: { code: "FM", timezone: "Pacific/Pohnpei", lang: "en-FM", active: false },
//   moldova: { code: "MD", timezone: "Europe/Chisinau", lang: "ro-MD", active: false },
//   monaco: { code: "MC", timezone: "Europe/Monaco", lang: "fr-MC", active: false },
//   mongolia: { code: "MN", timezone: "Asia/Ulaanbaatar", lang: "mn-MN", active: false },
//   montenegro: { code: "ME", timezone: "Europe/Podgorica", lang: "sr-ME", active: false },
//   morocco: { code: "MA", timezone: "Africa/Casablanca", lang: "ar-MA", active: false },
//   mozambique: { code: "MZ", timezone: "Africa/Maputo", lang: "pt-MZ", active: false },
//   myanmar: { code: "MM", timezone: "Asia/Yangon", lang: "my-MM", active: false },
//   namibia: { code: "NA", timezone: "Africa/Windhoek", lang: "en-NA", active: false },
//   nauru: { code: "NR", timezone: "Pacific/Nauru", lang: "en-NR", active: false },
//   nepal: { code: "NP", timezone: "Asia/Kathmandu", lang: "ne-NP", active: false },
//   netherlands: { code: "NL", timezone: "Europe/Amsterdam", lang: "nl-NL", active: false },
//   newzealand: { code: "NZ", timezone: "Pacific/Auckland", lang: "en-NZ", active: false },
//   nicaragua: { code: "NI", timezone: "America/Managua", lang: "es-NI", active: false },
//   niger: { code: "NE", timezone: "Africa/Niamey", lang: "fr-NE", active: false },
//   nigeria: { code: "NG", timezone: "Africa/Lagos", lang: "en-NG", active: false },
//   norway: { code: "NO", timezone: "Europe/Oslo", lang: "nb-NO", active: false },
//   oman: { code: "OM", timezone: "Asia/Muscat", lang: "ar-OM", active: false },
//   pakistan: { code: "PK", timezone: "Asia/Karachi", lang: "en-PK", active: false },
//   palau: { code: "PW", timezone: "Pacific/Palau", lang: "en-PW", active: false },
//   panama: { code: "PA", timezone: "America/Panama", lang: "es-PA", active: false },
//   papua_new_guinea: { code: "PG", timezone: "Pacific/Port_Moresby", lang: "en-PG", active: false },
//   paraguay: { code: "PY", timezone: "America/Asuncion", lang: "es-PY", active: false },
//   peru: { code: "PE", timezone: "America/Lima", lang: "es-PE", active: false },
//   philippines: { code: "PH", timezone: "Asia/Manila", lang: "en-PH", active: false },
//   poland: { code: "PL", timezone: "Europe/Warsaw", lang: "pl-PL", active: false },
//   portugal: { code: "PT", timezone: "Europe/Lisbon", lang: "pt-PT", active: false },
//   qatar: { code: "QA", timezone: "Asia/Qatar", lang: "ar-QA", active: false },
//   romania: { code: "RO", timezone: "Europe/Bucharest", lang: "ro-RO", active: false },
//   russia: { code: "RU", timezone: "Europe/Moscow", lang: "ru-RU", active: false },
//   rwanda: { code: "RW", timezone: "Africa/Kigali", lang: "rw-RW", active: false },
//   saint_kitts: { code: "KN", timezone: "America/St_Kitts", lang: "en-KN", active: false },
//   saint_lucia: { code: "LC", timezone: "America/St_Lucia", lang: "en-LC", active: false },
//   samoa: { code: "WS", timezone: "Pacific/Apia", lang: "sm-WS", active: false },
//   san_marino: { code: "SM", timezone: "Europe/Rome", lang: "it-SM", active: false },
//   sao_tome: { code: "ST", timezone: "Africa/Sao_Tome", lang: "pt-ST", active: false },
//   saudi_arabia: { code: "SA", timezone: "Asia/Riyadh", lang: "ar-SA", active: false },
//   senegal: { code: "SN", timezone: "Africa/Dakar", lang: "fr-SN", active: false },
//   serbia: { code: "RS", timezone: "Europe/Belgrade", lang: "sr-RS", active: false },
//   seychelles: { code: "SC", timezone: "Indian/Mahe", lang: "en-SC", active: false },
//   sierra_leone: { code: "SL", timezone: "Africa/Freetown", lang: "en-SL", active: false },
//   singapore: { code: "SG", timezone: "Asia/Singapore", lang: "en-SG", active: false },
//   slovakia: { code: "SK", timezone: "Europe/Bratislava", lang: "sk-SK", active: false },
//   slovenia: { code: "SI", timezone: "Europe/Ljubljana", lang: "sl-SI", active: false },
//   solomon_islands: { code: "SB", timezone: "Pacific/Guadalcanal", lang: "en-SB", active: false },
//   somalia: { code: "SO", timezone: "Africa/Mogadishu", lang: "so-SO", active: false },
//   south_africa: { code: "ZA", timezone: "Africa/Johannesburg", lang: "en-ZA", active: false },
//   south_korea: { code: "KR", timezone: "Asia/Seoul", lang: "ko-KR", active: false },
//   spain: { code: "ES", timezone: "Europe/Madrid", lang: "es-ES", active: false },
//   sri_lanka: { code: "LK", timezone: "Asia/Colombo", lang: "si-LK", active: false },
//   st_vincent: { code: "VC", timezone: "America/St_Vincent", lang: "en-VC", active: false },
//   sudan: { code: "SD", timezone: "Africa/Khartoum", lang: "ar-SD", active: false },
//   suriname: { code: "SR", timezone: "America/Paramaribo", lang: "nl-SR", active: false },
//   sweden: { code: "SE", timezone: "Europe/Stockholm", lang: "sv-SE", active: false },
//   switzerland: { code: "CH", timezone: "Europe/Zurich", lang: "de-CH", active: false },
//   syria: { code: "SY", timezone: "Asia/Damascus", lang: "ar-SY", active: false },
//   tajikistan: { code: "TJ", timezone: "Asia/Dushanbe", lang: "tg-TJ", active: false },
//   tanzania: { code: "TZ", timezone: "Africa/Dar_es_Salaam", lang: "sw-TZ", active: false },
//   thailand: { code: "TH", timezone: "Asia/Bangkok", lang: "th-TH", active: false },
//   togo: { code: "TG", timezone: "Africa/Lome", lang: "fr-TG", active: false },
//   tonga: { code: "TO", timezone: "Pacific/Tongatapu", lang: "en-TO", active: false },
//   trinidad_tobago: { code: "TT", timezone: "America/Port_of_Spain", lang: "en-TT", active: false },
//   tunisia: { code: "TN", timezone: "Africa/Tunis", lang: "ar-TN", active: false },
//   turkey: { code: "TR", timezone: "Europe/Istanbul", lang: "tr-TR", active: false },
//   turkmenistan: { code: "TM", timezone: "Asia/Ashgabat", lang: "tk-TM", active: false },
//   tuvalu: { code: "TV", timezone: "Pacific/Funafuti", lang: "en-TV", active: false },
//   uganda: { code: "UG", timezone: "Africa/Kampala", lang: "en-UG", active: false },
//   uk: { code: "GB", timezone: "Europe/London", lang: "en-GB", active: false },
//   ukraine: { code: "UA", timezone: "Europe/Kiev", lang: "uk-UA", active: false },
//   united_arab_emirates: { code: "AE", timezone: "Asia/Dubai", lang: "ar-AE", active: false },
//   united_states: { code: "US", timezone: "America/New_York", lang: "en-US", active: false },
//   uruguay: { code: "UY", timezone: "America/Montevideo", lang: "es-UY", active: false },
//   uzbekistan: { code: "UZ", timezone: "Asia/Tashkent", lang: "uz-UZ", active: false },
//   vanuatu: { code: "VU", timezone: "Pacific/Efate", lang: "en-VU", active: false },
//   venezuela: { code: "VE", timezone: "America/Caracas", lang: "es-VE", active: false },
//   vietnam: { code: "VN", timezone: "Asia/Ho_Chi_Minh", lang: "vi-VN", active: false },
//   yemen: { code: "YE", timezone: "Asia/Aden", lang: "ar-YE", active: false },
//   zambia: { code: "ZM", timezone: "Africa/Lusaka", lang: "en-ZM", active: false },
//   zimbabwe: { code: "ZW", timezone: "Africa/Harare", lang: "en-ZW", active: false }
// };


/**
 * Build a map keyed by country CODE (IN, GB, US, FR) for easier routing/storage.
 * Each entry contains original keyName (like "india") so we can still use original labels if needed.
 */
// const buildCountryCodeMap = () => {
//   const map = {};
//   Object.keys(COUNTRY_DATA).forEach((key) => {
//     const code = (COUNTRY_DATA[key].code || key).toUpperCase();
//     map[code] = { ...COUNTRY_DATA[key], keyName: key, code };
//   });
//   return map;
// };
// const COUNTRY_CODE_MAP = buildCountryCodeMap();

/**
 * Convert route param to a country CODE (e.g. "IN", "india" -> "IN", "uk" -> "GB").
 * Returns uppercase code or null if not found.
 */
// const paramToCode = (param) => {
//   if (!param) return null;
//   const p = String(param).trim();
//   if (p.length === 2) {
//     const upper = p.toUpperCase();
//     if (COUNTRY_CODE_MAP[upper]) return upper;
//     if (upper === "UK" && COUNTRY_CODE_MAP["GB"]) return "GB";
//   }
//   const lower = p.toLowerCase();
//   if (COUNTRY_DATA[lower] && COUNTRY_DATA[lower].code) {
//     return COUNTRY_DATA[lower].code.toUpperCase();
//   }
//   const found = Object.values(COUNTRY_CODE_MAP).find((c) => {
//     const name = c.name || c.keyName || "";
//     return name.toLowerCase() === lower || name.toLowerCase().includes(lower);
//   });
//   if (found) return found.code;
//   return null;
// };

/* ---------------------------
New: Timezone -> Country detection
--------------------------- */
// const detectCountryFromTimezone = (tz) => {
//   if (!tz || typeof tz !== "string") return null;
//   const t = tz.toLowerCase();

//   // 1️⃣ Try match against the timezone strings in COUNTRY_DATA (best effort)
//   for (const entryKey of Object.keys(COUNTRY_DATA)) {
//     const entry = COUNTRY_DATA[entryKey];
//     if (!entry.timezone) continue;
//     // match substrings like "asia/kolkata" or "america/new_york"
//     if (t.includes(entry.timezone.toLowerCase().split("/").pop())) {
//       return entry.code.toUpperCase();
//     }
//     // also allow matching entire IANA timezone (e.g. "asia/kolkata")
//     if (t.includes(entry.timezone.toLowerCase())) {
//       return entry.code.toUpperCase();
//     }
//   }

//   // 2️⃣ Expanded fallback dictionary for common timezone cities/abbreviations
//   const fallbackMap = {
//     // 🇮🇳 India
//     "kolkata": "IN", "india": "IN", "mumbai": "IN", "delhi": "IN", "ist": "IN",

//     // 🇬🇧 UK / Europe
//     "london": "GB", "gmt": "GB", "dublin": "IE",

//     // 🇫🇷🇩🇪🇮🇹🇪🇸 Western Europe
//     "paris": "FR", "cet": "FR", "berlin": "DE", "rome": "IT", "madrid": "ES",
//     "amsterdam": "NL", "vienna": "AT", "lisbon": "PT", "zurich": "CH",
//     "stockholm": "SE", "oslo": "NO", "copenhagen": "DK", "brussels": "BE",

//     // 🇵🇱🇨🇿🇭🇺 Eastern Europe / Balkans
//     "warsaw": "PL", "prague": "CZ", "budapest": "HU", "bucharest": "RO",
//     "sofia": "BG", "belgrade": "RS", "athens": "GR", "helsinki": "FI", "kyiv": "UA",

//     // 🇺🇸 United States (timezones)
//     "new_york": "US", "new york": "US", "est": "US", "eastern": "US",
//     "chicago": "US", "cst": "US", "central": "US",
//     "denver": "US", "mountain": "US", "mst": "US",
//     "los_angeles": "US", "los angeles": "US", "pst": "US", "pacific": "US",
//     "honolulu": "US", "alaska": "US",

//     // 🇨🇦 Canada
//     "toronto": "CA", "vancouver": "CA", "montreal": "CA", "calgary": "CA", "ottawa": "CA",

//     // 🇲🇽🇧🇷🇦🇷 Latin America
//     "mexico": "MX", "mexico_city": "MX", "cdmx": "MX",
//     "sao_paulo": "BR", "brazil": "BR", "rio_de_janeiro": "BR",
//     "buenos": "AR", "argentina": "AR", "santiago": "CL",
//     "bogota": "CO", "lima": "PE", "caracas": "VE",

//     // 🌍 Africa
//     "cairo": "EG", "lagos": "NG", "johannesburg": "ZA", "nairobi": "KE",
//     "accra": "GH", "casablanca": "MA", "harare": "ZW", "maputo": "MZ",

//     // 🌏 Middle East
//     "dubai": "AE", "abu_dhabi": "AE", "riyadh": "SA", "doha": "QA",
//     "muscat": "OM", "kuwait": "KW", "jerusalem": "IL", "tehran": "IR",
//     "baghdad": "IQ", "amman": "JO", "beirut": "LB",

//     // 🇷🇺🇰🇿 Russia / Central Asia
//     "moscow": "RU", "st_petersburg": "RU", "kazan": "RU",
//     "almaty": "KZ", "tashkent": "UZ", "bishkek": "KG", "ashgabat": "TM",

//     // 🇨🇳🇯🇵🇰🇷 East Asia
//     "beijing": "CN", "shanghai": "CN", "hong_kong": "HK", "macau": "MO",
//     "tokyo": "JP", "osaka": "JP", "nagoya": "JP",
//     "seoul": "KR", "busan": "KR",

//     // 🇮🇩🇹🇭🇲🇾🇸🇬 Southeast Asia
//     "bangkok": "TH", "phnom_penh": "KH", "vientiane": "LA",
//     "jakarta": "ID", "bali": "ID", "kuala_lumpur": "MY",
//     "singapore": "SG", "manila": "PH", "hanoi": "VN",

//     // 🇦🇺🇳🇿 Oceania / Pacific
//     "sydney": "AU", "melbourne": "AU", "brisbane": "AU", "perth": "AU",
//     "adelaide": "AU", "darwin": "AU",
//     "auckland": "NZ", "wellington": "NZ", "christchurch": "NZ",
//     "fiji": "FJ", "samoa": "WS", "tonga": "TO", "kiribati": "KI", "nauru": "NR",
//     "solomon": "SB", "new_caledonia": "NC",

//     // 🇵🇰🇧🇩🇱🇰 South Asia
//     "karachi": "PK", "lahore": "PK", "islamabad": "PK",
//     "dhaka": "BD", "chittagong": "BD",
//     "colombo": "LK", "kandy": "LK", "male": "MV", "kathmandu": "NP",

//     // 🇿🇦 Africa islands
//     "mauritius": "MU", "seychelles": "SC", "madagascar": "MG", "reunion": "RE",

//     // 🌐 Generic
//     "utc": null
//   };

//   for (const key of Object.keys(fallbackMap)) {
//     if (t.includes(key)) {
//       return fallbackMap[key] ? fallbackMap[key].toUpperCase() : null;
//     }
//   }

//   // 3️⃣ Fallback: return null (caller can use default like "IN")
//   return null;
// };


// 🚀 CountryRedirect (updated: uses timezone detection and redirects WHEN user opens root or a country route)
// const CountryRedirect = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // run only in browser
//     if (typeof window === "undefined") return;

//     // 1) detect via timezone (reflects PC clock/timezone)
//     const tz = Intl?.DateTimeFormat?.().resolvedOptions?.().timeZone || "";
//     const detectedCode = detectCountryFromTimezone(tz) || "IN"; // default to IN

//     const timezone = tz || "UTC";

//     // Build updated data keyed by CODE
//     const updatedData = {};
//     Object.keys(COUNTRY_DATA).forEach((k) => {
//       const code = COUNTRY_DATA[k].code.toUpperCase();
//       updatedData[code] = {
//         ...COUNTRY_DATA[k],
//         keyName: k,
//         code,
//         active: code === detectedCode,
//         currentTime: new Date().toLocaleTimeString([], { timeZone: COUNTRY_DATA[k].timezone }),
//       };
//     });

//     const storedCountryCode = window.localStorage.getItem("user_country");

//     if (storedCountryCode !== detectedCode) {
//       window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
//       window.localStorage.setItem("user_country", detectedCode);
//       window.localStorage.setItem("user_lang", navigator.language || COUNTRY_DATA["india"].lang);
//       window.localStorage.setItem("user_timezone", timezone);
//       console.log("Timezone detected → localStorage updated:", detectedCode, "tz:", tz);
//     } else {
//       // still refresh times
//       window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
//       console.log("Timezone detected but same country → refreshed all_countries times:", storedCountryCode);
//     }

//     // Decide whether current path is a country-route (root or /<code> or /<key>)
//     const pathSegment = location.pathname.replace(/^\//, "").toUpperCase();
//     const isCountryRoute =
//       location.pathname === "/" ||
//       !!COUNTRY_CODE_MAP[pathSegment] ||
//       Object.keys(COUNTRY_DATA).includes(pathSegment.toLowerCase());

//     // If user opened root or a country route, redirect to detectedCode when different
//     const targetPath = `/${detectedCode}`;
//     if (isCountryRoute && window.location.pathname.toUpperCase() !== targetPath.toUpperCase()) {
//       navigate(targetPath, { replace: true });
//     }
//   }, [location.pathname, navigate]);

//   // Listen for storage updates from other tabs
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const onStorage = (e) => {
//       if (e.key === "user_country" && e.newValue) {
//         const code = e.newValue;
//         if (window.location.pathname.toUpperCase() !== `/${code}`) {
//           navigate(`/${code}`, { replace: true });
//         }
//       }
//     };
//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, [navigate]);

//   return null;
// };

// 🏳️ Country Page
// const CountryPage = () => {
//   const { country: rawParam } = useParams();
//   const navigate = useNavigate();

//   // Resolve param to CODE (IN, GB, US, FR) — supports "/IN" or "/india" etc.
//   const code = paramToCode(rawParam);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     if (!code) {
//       // invalid param: redirect to default IN
//       navigate("/IN", { replace: true });
//       return;
//     }

//     const storedCountryCode = window.localStorage.getItem("user_country");
//     const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

//     // Build updated data keyed by CODE (refresh currentTime + active flag)
//     const updatedData = {};
//     Object.keys(COUNTRY_DATA).forEach((k) => {
//       const c = COUNTRY_DATA[k].code.toUpperCase();
//       updatedData[c] = {
//         ...COUNTRY_DATA[k],
//         keyName: k,
//         code: c,
//         active: c === code,
//         currentTime: new Date().toLocaleTimeString([], { timeZone: COUNTRY_DATA[k].timezone }),
//       };
//     });

//     // If URL code differs from localStorage → update localStorage
//     if (storedCountryCode !== code) {
//       window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
//       window.localStorage.setItem("user_country", code);
//       window.localStorage.setItem("user_lang", navigator.language || (COUNTRY_CODE_MAP[code] && COUNTRY_CODE_MAP[code].lang));
//       window.localStorage.setItem("user_timezone", timezone);
//       console.log("✅ URL changed → localStorage updated to:", code);
//     } else {
//       // still refresh all_countries times
//       window.localStorage.setItem("all_countries", JSON.stringify(updatedData));
//       console.log("⟳ Refreshed all_countries times for:", code);
//     }
//   }, [code, navigate]);

//   // Read the stored info (all_countries is keyed by CODE)
//   const stored = (() => {
//     try {
//       return JSON.parse(typeof window !== "undefined" ? window.localStorage.getItem("all_countries") : null) || {};
//     } catch {
//       return {};
//     }
//   })();

//   const countryInfo = (code && stored[code]) ? stored[code] : (code && COUNTRY_CODE_MAP[code]) ? COUNTRY_CODE_MAP[code] : null;

//   if (!countryInfo) {
//     return <div style={{ padding: 24 }}>Loading / invalid country — redirecting...</div>;
//   }

//   // Compute local time for the resolved country's timezone
//   const localTime = new Date().toLocaleTimeString([], {
//     timeZone: countryInfo.timezone,
//   });

//   return (
//     <div className="no-select">
//       {/* Pass the country CODE and localTime to Home_Main */}
//       <Home_Main country={countryInfo.code} localTime={localTime} />
//     </div>
//   );
// };

// ⚡ Main App
function App() {
  const { pathname, search } = useLocation();
  const query = new URLSearchParams(search);
  const hideHeaderParam = query.get("hideHeader");
  console.log("hideHeaderParam", hideHeaderParam);


  // const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const url = pathname + search;
    const title = document.title;
    sendPageView(url, title);
  }, [pathname, search]);

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
      {hideHeaderParam !== "true" && <Navbar_1 />}
      <BottomToTop />

      <main id="main-content" className="no-select">
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route path="/" element={<Home_Main />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-news" element={<Blog_News />} />
            <Route path="/privacy_policy" element={<Privacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wifi-qr-code" element={<WiFiQRCodeLandingPage />} />
            <Route path="/restaurant-menu-qr-code" element={<MenuQRCodeLandingPage />} />
            <Route path="/business-card-qr-code" element={<BusinessCardQRCodeLandingPage />} />
            <Route path="/google-review-qr-code" element={<GoogleReviewQRCodeLandingPage />} />
            <Route path="/instagram-qr-code" element={<InstagramQRCodeLandingPage />} />
            <Route path="/youtube-qr-code" element={<YouTubeQRCodeLandingPage />} />
            <Route path="/pdf-qr-code" element={<PDFQRCodeLandingPage />} />
            <Route path="/location-qr-code" element={<LocationQRCodeLandingPage />} />
            <Route path="/whatsapp-qr-code" element={<WhatsAppQRCodeLandingPage />} />
            <Route path="/event-ticket-qr-code" element={<EventTicketQRCodeLandingPage />} />
            <Route path="/qr-code-for-small-business" element={<SmallBusinessQRCodeLandingPage />} />
            <Route path="/qr-code-for-marketing-campaign" element={<MarketingCampaignQRCodeLandingPage />} />
            <Route path="/qr-code-for-product-packaging" element={<ProductPackagingQRCodeLandingPage />} />
            <Route path="/qr-code-for-flyers" element={<FlyersQRCodeLandingPage />} />
            <Route path="/qr-code-for-brochures" element={<BrochuresQRCodeLandingPage />} />
            <Route path="/qr-code-for-real-estate" element={<RealEstateQRCodeLandingPage />} />
            <Route path="/qr-code-for-business-website" element={<BusinessWebsiteQRCodeLandingPage />} />
            <Route path="/qr-code-for-email-signature" element={<EmailSignatureQRCodeLandingPage />} />
            <Route path="/qr-code-for-lead-generation" element={<LeadGenerationQRCodeLandingPage />} />
            <Route path="/qr-code-for-app-store" element={<AppStoreQRCodeLandingPage />} />


            {/* 17 - 3 */}
            <Route path="/qr-code-for-digital-menu" element={<DigitalMenuQRCodeLandingPage />} />
            <Route path="/qr-code-for-cafe-menu" element={<CafeMenuQRCodeLandingPage />} />
            <Route path="/qr-code-for-restaurant-ordering" element={<RestaurantOrderingQRCodeLandingPage />} />
            <Route path="/qr-code-for-contactless-ordering" element={<ContactlessOrderingQRCodeLandingPage />} />
            <Route path="/qr-code-for-table-menu" element={<TableMenuQRCodeLandingPage />} />
            <Route path="/qr-code-for-bar-menu" element={<BarMenuQRCodeLandingPage />} />
            <Route path="/qr-code-for-hotel-services" element={<HotelServicesQRCodeLandingPage />} />
            <Route path="/qr-code-for-room-service" element={<RoomServiceQRCodeLandingPage />} />
            <Route path="/qr-code-for-food-delivery-menu" element={<FoodDeliveryMenuQRCodeLandingPage />} />
            <Route path="/qr-code-for-takeaway-menu" element={<TakeawayMenuQRCodeLandingPage />} />
            <Route path="/qr-code-for-tiktok" element={<TikTokQRCodeLandingPage />} />
            <Route path="/qr-code-for-twitter" element={<TwitterQRCodeLandingPage />} />
            <Route path="/qr-code-for-pinterest" element={<PinterestQRCodeLandingPage />} />
            <Route path="/qr-code-for-snapchat" element={<SnapchatQRCodeLandingPage />} />
            <Route path="/qr-code-for-linktree" element={<LinktreeQRCodeLandingPage />} />
            <Route path="/qr-code-for-social-media-profile" element={<SocialMediaProfileQRCodeLandingPage />} />
            <Route path="/qr-code-for-social-media-links" element={<SocialMediaLinksQRCodeLandingPage />} />
            <Route path="/qr-code-for-youtube-channel" element={<YouTubeChannelQRCodeLandingPage />} />
            <Route path="/qr-code-for-instagram-profile" element={<InstagramProfileQRCodeLandingPage />} />
            <Route path="/qr-code-for-facebook-page" element={<FacebookPageQRCodeLandingPage />} />
            <Route path="/qr-code-for-paypal-payment" element={<PayPalPaymentQRCodeLandingPage />} />
            <Route path="/qr-code-for-stripe-payment" element={<StripePaymentQRCodeLandingPage />} />
            <Route path="/qr-code-for-google-pay" element={<GooglePayQRCodeLandingPage />} />
            <Route path="/qr-code-for-apple-pay" element={<ApplePayQRCodeLandingPage />} />
            <Route path="/qr-code-for-online-payments" element={<OnlinePaymentsQRCodeLandingPage />} />
            <Route path="/qr-code-for-donations" element={<DonationsQRCodeLandingPage />} />
            <Route path="/qr-code-for-tips" element={<TipsQRCodeLandingPage />} />
            <Route path="/qr-code-for-freelancers" element={<FreelancersQRCodeLandingPage />} />
            <Route path="/qr-code-for-invoices" element={<InvoicesQRCodeLandingPage />} />
            <Route path="/qr-code-for-subscriptions" element={<SubscriptionsQRCodeLandingPage />} />


            <Route path="/qr-code-for-excel-file" element={<ExcelQRCodeLandingPage />} />
            <Route path="/qr-code-for-word-document" element={<WordDocumentQRCodeLandingPage />} />
            <Route path="/qr-code-for-powerpoint" element={<PowerPointQRCodeLandingPage />} />
            <Route path="/qr-code-for-zip-file" element={<ZipFileQRCodeLandingPage />} />
            <Route path="/qr-code-for-audio-file" element={<AudioFileQRCodeLandingPage />} />
            <Route path="/qr-code-for-video-file" element={<VideoFileQRCodeLandingPage />} />
            <Route path="/qr-code-for-google-docs" element={<GoogleDocsQRCodeLandingPage />} />
            <Route path="/qr-code-for-google-sheets" element={<GoogleSheetsQRCodeLandingPage />} />
            <Route path="/qr-code-for-dropbox-link" element={<DropboxQRCodeLandingPage />} />
            <Route path="/qr-code-for-cloud-files" element={<CloudFilesQRCodeLandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </Suspense>
        {/* <Footer /> */}
      </main>


      {/* <Navbar_1 /> */}

      {/* <CountryRedirect /> */}
      {/* <Routes> */}
      {/* <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home_Main />
            </Suspense>
          }
        /> */}
      {/* <Route path="/privacy_policy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Page Not Found</div>} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
