import { Layout } from "../components/Layout";

type UserProps = {
    user: any;
};

export const User = ({ user }: UserProps) => (
    <Layout>
        <div>
            <h1 class="font-bold text-3xl">{user.name}</h1>
            <div>
                <p>
                    <span class="font-bold">ID: </span> {user.id}
                </p>
                <p>
                    <span class="font-bold">Name: </span> {user.name}
                </p>
                <p>
                    <span class="font-bold">Email: </span> {user.email}
                </p>
                <p>
                    <span class="font-bold">Phone: </span> {user.phone}
                </p>
                <p>
                    <span class="font-bold">Website: </span> {user.website}
                </p>
                <p>
                    <span class="font-bold">Address: </span>
                    <ul>
                        <li>{user.address.street}</li>
                        <li>{user.address.suite}</li>
                        <li>{user.address.city}</li>
                        <li>{user.address.zipcode}</li>
                    </ul>
                </p>
            </div>
        </div>
    </Layout>
);
