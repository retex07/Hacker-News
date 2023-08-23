import React from "react";
import { Layout } from 'antd';
import ListNews from "components/listNews";

const Index = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <ListNews />
        </Layout>
    );
}

export default Index;