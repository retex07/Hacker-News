import React from "react";
import { Button, Layout } from "antd";
import PostItem from "./components/postItem/component";

export default function Post() {
    return (
        <Layout style={{ padding: 32, minHeight: "100vh", alignItems: "center" }}>
            <Button size="large" href="/">Back to news list</Button>
            <PostItem />
        </Layout>
    )
}
