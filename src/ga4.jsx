export const sendPageView = (url, title) => {
    if (window.gtag) {
        window.gtag("event", "page_view", {
            page_path: url,
            page_title: title,
            page_location: window.location.href,
        });
    }
};
