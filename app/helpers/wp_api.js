const NAME = "css-tricks",
    DOMAIN = `https://${NAME}.com`,
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    PER_PAGE = 9,
    POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
    POST = `${API_WP}/posts`,
    CATEGORIES = `${API_WP}/categories`,
    SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;
// PAGES = `${API_WP}/pages`,
// CATEGORIES = `${API_WP}/categories`;

let page = 1;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    // CATEGORIES,
    SEARCH,
    page
}