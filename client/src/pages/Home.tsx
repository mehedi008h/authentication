import React from "react";
import { useUsersQuery } from "../generated/graphql";

const Home = () => {
    const { data } = useUsersQuery();
    if (!data) return <div>Loading..</div>;
    return (
        <div className="bg min-h-screen flex">
            <div className="mt-20">
                {data.users.map((user) => (
                    <h1 key={user.id}>{JSON.stringify(user.email)}</h1>
                ))}
            </div>
        </div>
    );
};

export default Home;
