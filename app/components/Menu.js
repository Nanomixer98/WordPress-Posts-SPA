export function Menu() {
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/">Inicio</a>
        <span>-</span>
        <a href="#/search">Búsqueda</a>
        <span>-</span>
        <a href="#/contact">Contacto</a>
        <span>-</span>
        <a href="http://aprendejavascript.org" target="_blank" rel="noopener">Aprende JS</a>
    `;
    return $menu;
}