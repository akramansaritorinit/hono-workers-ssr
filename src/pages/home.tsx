import { Layout } from "../components/Layout";
import { PostCard } from "../components/PostCard";

type HomeProps = {
    posts: any[];
};

export const Home = ({ posts }:HomeProps) => (
    <Layout>
        <div class="mt-5">
            <h1 class='font-bold text-3xl text-center'>Posts</h1>
            <div class="mt-5 flex flex-wrap justify-center gap-6" >
            {posts.map((post) => (
                    <PostCard post={post} />
                ))}
            </div>
                
        </div>
    </Layout>
);
