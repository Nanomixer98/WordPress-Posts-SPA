import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import wp_api from "./wp_api.js";

export async function InfinteScroll() {
    const d = document,
        w = window;
    let query = localStorage.getItem("wpSearch"),
        apiURL,
        Component; //High Order Component

    w.addEventListener("scroll", async(e) => {
        let { scrollTop, clientHeight, scrollHeight } = d.documentElement, { hash } = location;

        if (scrollTop + clientHeight >= scrollHeight) {
            // console.log(scrollTop, clientHeight, scrollHeight, hash);
            wp_api.page++;

            if (!hash || hash == "#/") {
                apiURL = `${wp_api.POSTS}&page=${wp_api.page}`;
                Component = PostCard;
            } else if (hash.includes("#/search")) {
                apiURL = `${wp_api.SEARCH}${query}&page=${wp_api.page}`;
                Component = SearchCard;
            } else {
                return false;
            }

            d.querySelector(".loader").style.display = "block";
            w.scrollTo(0, d.body.scrollHeight);
            await ajax({
                url: apiURL,
                cbSuccess: (posts) => {
                    console.log(posts);
                    let html = "";
                    posts.forEach(post => html += Component(post));
                    d.getElementById("main").insertAdjacentHTML("beforeend", html);
                    d.querySelector(".loader").style.display = "none";
                }
            });
        }
    });
}