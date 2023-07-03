function back() {
    window.history.back();
}

interface Post {
    id: number,
    title: string,
    imageUrl: string,
    body: string
}


interface Comments {
    id: number,
    postId: number,
    username: string,
    email: string,
    body: string
}
const comments: Array<Comments> = [
    { id: 1, postId: 1, username: "emily.em", email: "emily.em@hotmail.com", body: "I never realized how much history and culture is intertwined with coffee. This post made me appreciate my morning cup even more!" },
    { id: 2, postId: 1, username: 'jacobSans', email: "jacobSans@hotmail.com", body: "The journey of coffee from its discovery to worldwide popularity is truly remarkable. It's incredible how one beverage can have such a significant impact." },
    { id: 3, postId: 2, username: "ethan", email: "ethan@hotmail.com", body: "I'm a fan of Robusta coffee, but after reading this post, I'm intrigued to try different types of beans. It's fascinating how each variety has its own unique characteristics!" },
    { id: 4, postId: 2, username: "jeferson", email: "jeferson@hotmail.com", body: "This post has inspired me to delve deeper into the world of coffee. I can't wait to explore the different flavors and aromas that Arabica and other beans have to offer." },
    { id: 5, postId: 3, username: "st.james",  email: "st.james@hotmail.com", body: "I've been struggling to make a consistently great cup of coffee at home, but the tips in this post are a game-changer. My mornings just got a whole lot better!" },
];

const postsa: Array<Post> = [
    { id: 1, title: "The Fascinating History Behind Coffee", imageUrl: "/img/cafe03.jpg", body: "Discover the captivating journey of coffee, from its discovery to becoming one of the most popular beverages worldwide." },
    { id: 2, title: "The Different Types of Coffee Beans", imageUrl: "/img/cafe03.jpg", body: "Get to know the various types of coffee beans, such as Arabica and Robusta, and learn how to distinguish them by their unique characteristics." },
    { id: 3, title: "Tips for Brewing the Perfect Coffee at Home", imageUrl: "/img/cafe03.jpg", body: "Learn some techniques and secrets to make a perfect cup of coffee in the comfort of your own home." },
];

function selecctComment(id: number | string | null) {
    const listComments: Comments[] = [];
    comments.forEach(comment => {
        if (id == comment.postId) {
            listComments.push(comment);
        }
    });
    return listComments;
}

function selectPost(id: number | string | null) {
    const postSelected: Post[] = []
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

const id = declareId()

console.log(selectPost(id));
console.log(selecctComment(id));
document.addEventListener("DOMContentLoaded", function show() {
    const listPost = selectPost(id);

    const coom = selecctComment(id);
    const element = document.getElementById('post-detail')! as HTMLElement;

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
        body.classList.add("text-card");
    })

    const elementCard2 = document.getElementById('card2')! as HTMLElement;

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
        dot.textContent = ': '
        username.appendChild(dot);

        const dot2 = document.createElement('span');
        dot2.textContent = ': '
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
