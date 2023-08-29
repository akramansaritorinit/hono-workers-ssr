import { Hono } from "hono";
import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Post } from "./pages/post";

const app = new Hono();

app.get("/", async (c) => {
    const posts: any[] = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.json());
    const users: any[] = await fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json());
    const comments: any[] = await fetch(`https://jsonplaceholder.typicode.com/comments`).then((res) => res.json());
    const postWithUserAndComments = posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        const postComments = comments.filter((comment) => comment.postId === post.id);
        return {
            ...post,
            user,
            comments: postComments,
        };
    });
    return c.html(<Home posts={postWithUserAndComments} />);
});

app.get("/users/:id", async (c) => {
    const { id } = c.req.param();
    const user: any = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
    return c.html(<User user={user} />);
});

app.get("/posts/:id", async (c) => {
    const { id } = c.req.param();
    const post: any = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json());
    const user: any = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`).then((res) =>
        res.json()
    );
    const comments: any[] = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((res) =>
        res.json()
    );
    return c.html(<Post post={post} user={user} comments={comments} />);
});

export default app;
