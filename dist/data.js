"use strict";
const posts = [
    { id: 1, title: "The Fascinating History Behind Coffee", imageUrl: "/img/img-post1.jpeg", body: "Discover the captivating journey of coffee, from its discovery to becoming one of the most popular beverages worldwide." },
    { id: 2, title: "The Different Types of Coffee Beans", imageUrl: "/img/img-post2.jpg", body: "Get to know the various types of coffee beans, such as Arabica and Robusta, and learn how to distinguish them by their unique characteristics." },
    { id: 3, title: "Tips for Brewing the Perfect Coffee at Home", imageUrl: "/img/cafe03.jpg", body: "Learn some techniques and secrets to make a perfect cup of coffee in the comfort of your own home." },
    { id: 4, title: "The Health Benefits of Coffee", imageUrl: "/img/img-post4.jpg", body: "Discover the potential health benefits associated with moderate coffee consumption, from increased energy to reduced risk of certain diseases." },
    { id: 5, title: "Coffee and Art: The Perfect Combination", imageUrl: "/img/img-post5.jpg", body: "Explore the relationship between coffee and art, from latte art designs to art exhibitions inspired by the beverage." },
    { id: 6, title: "Delicious Recipes with Coffee", imageUrl: "/img/img-post6.jpg", body: "Experiment with some creative recipes that feature coffee as the main ingredient, from desserts to savory dishes." },
];
document.addEventListener("DOMContentLoaded", function showPosts() {
    const element = document.getElementById('grid');
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
function showPostsDetails(pId) {
    window.location.href = `post-details.html?id=${pId}`;
}
;
