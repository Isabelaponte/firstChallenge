function back() {
    window.history.back();
}

class Posts {
    constructor(
        public id: number, 
        public title: string, 
        public imgUrl: string,
        public body: string
    ) {}
}

class PostsList {
    public posts: Posts[] = [];
    private static instance: PostsList;


    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new PostsList();
        return this.instance;
    }

    addPost(id: number, title: string, imgUrl:string, body: string) {
        const newPost = new Posts(id, title, imgUrl, body)
        // const newPost = new Posts(1,'aaaa', 'kkkk', 'sssssssssssssssssssssssssssssssssssss');
        this.posts.push(newPost);
        console.log(newPost);
    }
}

const postList = PostsList.getInstance();


//create a new HTML component 
abstract class Component<T extends HTMLElement, U extends HTMLElement>{
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(templateId: string, hostElementId: string, insertAtStart:boolean, newElementId?: string) {
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }
        this.attach(insertAtStart);
    }
    private attach(insertAtBeggining: boolean) {
        this.hostElement.insertAdjacentElement(insertAtBeggining ? 'afterbegin' : 'beforeend', this.element);
    }
}

// const post = new Posts(1,'aaaa', 'kkkk', 'sssssssssssssssssssssssssssssssssssss');
// const post2 = new Posts(2,'aaaassss', 'kkkk', 'sssssssssssssssssssssssssssssssssssss');
// const post3 = new Posts(3,'ddddddddd', 'kkkk', 'sssssssssssssssssssssssssssssssssssss');

interface Post {
    id: number, 
    title: string,
    imageUrl: string,
    body:string
}

const posts2: Array<Post> = [
    {id:1, title:"The Fascinating History Behind Coffee", imageUrl:'/img/cafe03.jpg', body: "Discover the captivating journey of coffee, from its discovery to becoming one of the most popular beverages worldwide."},
    {id:2, title:"The Different Types of Coffee Beans", imageUrl:'/img/cafe03.jpg', body: "Get to know the various types of coffee beans, such as Arabica and Robusta, and learn how to distinguish them by their unique characteristics."},
    {id:3, title:"Tips for Brewing the Perfect Coffee at Home", imageUrl:'/img/cafe03.jpg', body: "Learn some techniques and secrets to make a perfect cup of coffee in the comfort of your own home."},
]

function funciona() {
    // for (const post of posts2) {
    //     if (Array.isArray(post)) {
    //     const [id, title, imgUrl, body] = post;
    //     postList.addPost(id, title, imgUrl, body);
    //     console.log('oi');
    // }
        for (const post of posts2) {
            // console.log(post);
            postList.addPost(post.id, post.title, post.imageUrl, post.body);
        }
}

funciona();
