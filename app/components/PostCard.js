export function PostCard(props) {
    let {
        id,
        date,
        slug,
        title,
        _embedded: {
            'wp:featuredmedia': [{ source_url: urlPoster }],
        }
    } = props;
    let dateFormat = new Date(date).toLocaleString();

    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
               <a href="#/${slug}" data-id="${id}">Ver Publicación</a> 
            </p>
        </article> 
    `;
}