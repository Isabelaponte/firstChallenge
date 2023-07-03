interface Post {
    id: number,
    title: string,
    imageUrl: string,
    body: string
}


export const postsdefinitico: Array<Post> = [
    { id: 1, title: "The Fascinating History Behind Coffee", imageUrl: "/img/img-post1.jpeg", body: "Discover the captivating journey of coffee, from its discovery to becoming one of the most popular beverages worldwide." },
    { id: 2, title: "The Different Types of Coffee Beans", imageUrl: "/img/img-post2.jpg", body: "Get to know the various types of coffee beans, such as Arabica and Robusta, and learn how to distinguish them by their unique characteristics." },
    { id: 3, title: "Tips for Brewing the Perfect Coffee at Home", imageUrl: "/img/cafe03.jpg", body: "Learn some techniques and secrets to make a perfect cup of coffee in the comfort of your own home." },
    { id: 4, title: "The Health Benefits of Coffee", imageUrl: "/img/img-post4.jpg", body: "Discover the potential health benefits associated with moderate coffee consumption, from increased energy to reduced risk of certain diseases." },
    { id: 5, title: "Coffee and Art: The Perfect Combination", imageUrl: "/img/img-post5.jpg", body: "Explore the relationship between coffee and art, from latte art designs to art exhibitions inspired by the beverage." },
    { id: 6, title: "Delicious Recipes with Coffee", imageUrl: "/img/img-post6.jpg", body: "Experiment with some creative recipes that feature coffee as the main ingredient, from desserts to savory dishes." },
];

export function returnsPostList(){
    postsdefinitico.forEach(post => {
        console.log(post);
    });
}