export interface Post {
    id: number,
    title: string,
    imageUrl: string,
    body: string
}

export interface Comments {
    id: number,
    postId: number,
    email: string,
    body: string
}

export const posts: Array<Post> = [
    { id: 1, title: "The Fascinating History Behind Coffee", imageUrl: "/img/cafe03.jpg", body: "Discover the captivating journey of coffee, from its discovery to becoming one of the most popular beverages worldwide." },
    { id: 2, title: "The Different Types of Coffee Beans", imageUrl: "/img/cafe03.jpg", body: "Get to know the various types of coffee beans, such as Arabica and Robusta, and learn how to distinguish them by their unique characteristics." },
    { id: 3, title: "Tips for Brewing the Perfect Coffee at Home", imageUrl: "/img/cafe03.jpg", body: "Learn some techniques and secrets to make a perfect cup of coffee in the comfort of your own home." },
];

export const comments: Array<Comments> = [
    { id: 1, postId: 1, email: "emily.em@hotmail.com", body: "I never realized how much history and culture is intertwined with coffee. This post made me appreciate my morning cup even more!" },
    { id: 2, postId: 1, email: "jacobSans@hotmail.com", body: "The journey of coffee from its discovery to worldwide popularity is truly remarkable. It's incredible how one beverage can have such a significant impact." },
    { id: 3, postId: 2, email: "ethan@hotmail.com", body: "I'm a fan of Robusta coffee, but after reading this post, I'm intrigued to try different types of beans. It's fascinating how each variety has its own unique characteristics!" },
    { id: 4, postId: 2, email: "jeferson@hotmail.com", body: "This post has inspired me to delve deeper into the world of coffee. I can't wait to explore the different flavors and aromas that Arabica and other beans have to offer." },
    { id: 5, postId: 3, email: "st.james@hotmail.com", body: "I've been struggling to make a consistently great cup of coffee at home, but the tips in this post are a game-changer. My mornings just got a whole lot better!" },
];