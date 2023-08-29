type PostProps = {
    post: any;
};

export const PostCard = ({ post }: PostProps) => (
    <a
        href={`/posts/${post.id}`}
        class="max-w-sm flex flex-col justify-between border-2 p-3 rounded-md shadow-xl hover:scale-105 duration-300"
    >
        <div>
            <h1 class="font-bold text-3xl line-clamp-1">{post.title}</h1>
            <div>
                <p class="line-clamp-3">{post.body}</p>
            </div>
        </div>
        <div class="mt-3 flex justify-between items-center">
            <div>
                <div class="bg-gray-300 rounded-full p-2 h-10 w-10">
                    <p class='text-center font-bold'>{post.user.name.slice(0, 1)}</p>
                </div>
            </div>
            <p>{post.comments.length} comments</p>
        </div>
    </a>
);
