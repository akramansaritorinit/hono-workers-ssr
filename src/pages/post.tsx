import { Layout } from "../components/Layout";

type PostProps = {
    post: any;
    user: any;
    comments: any[];
};

export const Post = ({ post, user, comments }: PostProps) => (
    <Layout>
        <div class="p-5">
            <div class="flex justify-between items-center">
                <h1 class="font-bold text-3xl">{user.name}</h1>
                <a href={`/users/${user.id}`} class="bg-gray-300 rounded-full p-2 h-10 w-10">
                    <p class="text-center font-bold">{user.name.slice(0, 1)}</p>
                </a>
            </div>
            <div class="mt-10">
                <h1 class="font-semibold text-3xl">{post.title}</h1>
                <div>
                    <p>{post.body}</p>
                </div>
            </div>

            <div class="mt-10">
                <h1 class="font-semibold text-2xl underline">Comments</h1>
                <div class="mt-3 flex flex-col gap-5">
                    {comments.map((comment) => (
                        <div class="border p-3 rounded-md">
                            <h1 class="font-semibold text-xl">{comment.name}</h1>
                            <div>
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Layout>
);
