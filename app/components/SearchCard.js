export function SearchCard(props) {
    let {
        id,
        title,
        _embedded: {
            self: [{
                slug
            }]
        }
    } = props;

    return `
       <article class="post-card">
        <h2>${title}</h2>
        <p>
            <a href="#/${slug}" data-id="${id}">Ver publicación</a>
        </p>
       </article> 
    `;
}