
interface Post {
    id: number,
    title: string,
    imageUrl: string,
    body: string
}

const posts: Array<Post> = [
    { id: 1, title: "The Fascinating History Behind Coffee", imageUrl: "/img/cafe03.jpg", body: "Discover the captivating journey of coffee, from its discovery to becoming one of the most popular beverages worldwide." },
    { id: 2, title: "The Different Types of Coffee Beans", imageUrl: "/img/cafe03.jpg", body: "Get to know the various types of coffee beans, such as Arabica and Robusta, and learn how to distinguish them by their unique characteristics." },
    { id: 3, title: "Tips for Brewing the Perfect Coffee at Home", imageUrl: "/img/cafe03.jpg", body: "Learn some techniques and secrets to make a perfect cup of coffee in the comfort of your own home." },
];

document.addEventListener("DOMContentLoaded", function showPosts() {

    const element = document.getElementById('grid')! as HTMLElement;

    posts.forEach(post => {
        const divCardPost = document.createElement("div");
        element.appendChild(divCardPost);
        divCardPost.classList.add("card-post", 'gray');
        divCardPost.addEventListener("click", (event) => {
            event.preventDefault();
            showPostsDetails(post.id);

        });
        console.log(post);

        const img = document.createElement("img");
        img.src = post.imageUrl;
        divCardPost.appendChild(img);
        img.classList.add("img-post");

        const divContainer = document.createElement("div");
        divCardPost.appendChild(divContainer);
        divContainer.classList.add("card-container");

        const title = document.createElement("h2");
        title.textContent = post.title;
        divContainer.appendChild(title);
        title.classList.add("title-card", "title");

        const body = document.createElement("p");
        body.textContent = post.body;
        divContainer.appendChild(body);
        body.classList.add("text-card");

        const expand = document.createElement("a");
        expand.href = `post-details.html?id='${post.id}'`;
        expand.textContent = "Expand...";
        divCardPost.appendChild(expand);
        expand.classList.add("expand-link", "title");
    });
});

function showPostsDetails(pId:number) {
    window.location.href = `post-details.html?id=${pId}`;
};

