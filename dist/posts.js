"use strict";
function back() {
    window.history.back();
}
const comments = [
    { id: 1, postId: 1, username: "emily.em", email: "emily.em@hotmail.com", body: "I never realized how much history and culture is intertwined with coffee. This post made me appreciate my morning cup even more!" },
    { id: 2, postId: 1, username: 'jacobSans', email: "jacobSans@hotmail.com", body: "The journey of coffee from its discovery to worldwide popularity is truly remarkable. It's incredible how one beverage can have such a significant impact." },
    { id: 3, postId: 2, username: "ethan", email: "ethan@hotmail.com", body: "I'm a fan of Robusta coffee, but after reading this post, I'm intrigued to try different types of beans. It's fascinating how each variety has its own unique characteristics!" },
    { id: 4, postId: 2, username: "jeferson", email: "jeferson@hotmail.com", body: "This post has inspired me to delve deeper into the world of coffee. I can't wait to explore the different flavors and aromas that Arabica and other beans have to offer." },
    { id: 5, postId: 3, username: "st.james", email: "st.james@hotmail.com", body: "I've been struggling to make a consistently great cup of coffee at home, but the tips in this post are a game-changer. My mornings just got a whole lot better!" },
    { id: 6, postId: 3, username: "roberto", email: "roberto@hotmail.com", body: "I never realized the importance of water temperature and grind size when brewing coffee. Thanks to this post, I'm confident I can now achieve the perfect brew every time." },
    { id: 7, postId: 3, username: "ana.catarina", email: "ana.catarina@hotmail.com", body: "As a coffee lover, I'm always looking for tips to brew the perfect cup at home. This post provided some great insights, and I can't wait to try them out!" },
    { id: 8, postId: 4, username: "jamesRedfield", email: "jamesRedfield@hotmail.com", body: "I never knew that coffee had potential health benefits! It's great to hear that my daily cup of coffee might be contributing to my well-being." },
    { id: 9, postId: 4, username: "adalberta", email: "adalberta@hotmail.com", body: "This post has convinced me to incorporate coffee into my daily routine. It's reassuring to know that it can offer some health advantages alongside its fantastic taste." },
    { id: 10, postId: 5, username: "isabela", email: "isabela@hotmail.com", body: "Coffee and art truly make a perfect combination! I love admiring the intricate latte art designs while sipping on my favorite brew." },
    { id: 11, postId: 5, username: "jonas", email: "jonas@hotmail.com", body: "I'm amazed by the creativity involved in combining coffee and art. It's inspiring to see how artists can use coffee as a medium for their creations." },
    { id: 12, postId: 6, username: "jennifer", email: "jennifer@hotmail.com", body: "I never realized there was so much to coffee tasting! These tips will definitely help me appreciate the complexities and nuances of different coffee flavors." },
    { id: 13, postId: 6, username: "jonas", email: "jonas@hotmail.com", body: "Becoming a coffee connoisseur is a lifelong journey, and this post is a valuable guide. I'm excited to refine my palate and enhance my coffee tasting skills." },
];
const postsa = [
    { id: 1, title: "The Fascinating History Behind Coffee", imageUrl: "/img/img-post1.jpeg", body: "Discover the captivating journey of coffee, from its discovery to becoming one of the most popular beverages worldwide." },
    { id: 2, title: "The Different Types of Coffee Beans", imageUrl: "/img/img-post2.jpg", body: "Get to know the various types of coffee beans, such as Arabica and Robusta, and learn how to distinguish them by their unique characteristics." },
    { id: 3, title: "Tips for Brewing the Perfect Coffee at Home", imageUrl: "/img/cafe03.jpg", body: "Learn some techniques and secrets to make a perfect cup of coffee in the comfort of your own home." },
    { id: 4, title: "The Health Benefits of Coffee", imageUrl: "/img/img-post4.jpg", body: "Discover the potential health benefits associated with moderate coffee consumption, from increased energy to reduced risk of certain diseases." },
    { id: 5, title: "Coffee and Art: The Perfect Combination", imageUrl: "/img/img-post5.jpg", body: "Explore the relationship between coffee and art, from latte art designs to art exhibitions inspired by the beverage." },
    { id: 6, title: "Delicious Recipes with Coffee", imageUrl: "/img/img-post6.jpg", body: "Experiment with some creative recipes that feature coffee as the main ingredient, from desserts to savory dishes." },
];
function selecctComment(id) {
    const listComments = [];
    comments.forEach(comment => {
        if (id == comment.postId) {
            listComments.push(comment);
        }
    });
    return listComments;
}
function selectPost(id) {
    const postSelected = [];
    postsa.forEach(post => {
        if (post.id == id) {
            console.log(post);
            postSelected.push(post);
        }
    });
    return postSelected;
}
function declareId() {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    return id;
}
const id = declareId();
console.log(selectPost(id));
console.log(selecctComment(id));
document.addEventListener("DOMContentLoaded", function show() {
    const listPost = selectPost(id);
    const coom = selecctComment(id);
    const element = document.getElementById('post-detail');
    listPost.forEach(post => {
        const img = document.createElement("img");
        element.appendChild(img);
        img.src = post.imageUrl;
        img.classList.add("img-post-detail");
        const divPostDetail = document.createElement("div");
        element.appendChild(divPostDetail);
        divPostDetail.classList.add("post-detail");
        const title = document.createElement("h1");
        title.textContent = post.title;
        divPostDetail.appendChild(title);
        title.classList.add("h1-details", "title");
        const body = document.createElement("p");
        body.textContent = post.body;
        divPostDetail.appendChild(body);
        body.classList.add("text-card", 'gray');
    });
    const elementCard2 = document.getElementById('card2');
    coom.forEach(comment => {
        const divComment = document.createElement("div");
        elementCard2.appendChild(divComment);
        divComment.classList.add("comment");
        const div = document.createElement("div");
        elementCard2.appendChild(div);
        div.classList.add("comment");
        const username = document.createElement("p");
        username.textContent = comment.username;
        username.classList.add("username", "title");
        div.appendChild(username);
        const email = document.createElement("p");
        email.textContent = comment.email;
        email.classList.add("username", "title");
        div.appendChild(email);
        const dot = document.createElement('span');
        dot.textContent = ': ';
        username.appendChild(dot);
        const dot2 = document.createElement('span');
        dot2.textContent = ': ';
        email.appendChild(dot2);
        const usernameComment = document.createElement("p");
        usernameComment.textContent = comment.body;
        usernameComment.classList.add("gray", "username-comment");
        div.appendChild(usernameComment);
        const hr = document.createElement("hr");
        hr.classList.add("gray");
        div.append(hr);
    });
});
