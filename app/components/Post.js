export function Post(props) {
    let {
        date,
        title: {
            'rendered': title
        },
        content: {
            'rendered': content
        }
    } = props;
    let dateFormat = new Date(date).toLocaleString();

    return `
        <section class="post-page">
            <aside>
                <h2>${title}</h2>
                <time datetime="${date}">${dateFormat}</time>
            </aside>
            <hr>
            <article>${content}</article>
        </section>
    `;
}