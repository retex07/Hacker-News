import { Card, Button, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { PostType } from "types";
import newsList from "store/newsList";
import FullDate from "components/fullDate";

import { Description, Info, SectionInfo } from "./styled";

const ListNews = observer(() => {
    const { Text } = Typography;

    const isLoading = newsList.getIsLoading;
    const posts: PostType[] = newsList.getNewsList;

    return (
        <>
            <Button
                style={{ margin: 12 }}
                size="large"
                loading={isLoading}
                onClick={() => newsList.update()}
            >
                {isLoading ?
                    <Text type="warning">Updating the list...</Text> : <Text>Update the list</Text>
                }
            </Button>
            {posts.slice().sort((a, b) => b.time - a.time).map((post) => (
                <Card
                    extra={ <a href={`/post/${post.id}`}>More</a> }
                    style={{ margin: 16 }}
                    title={post.title}
                    key={post.id}
                >
                    <SectionInfo>
                        <Info>
                            <Description>Date</Description>
                            <FullDate time={post.time} />
                        </Info>
                        <Info>
                            <Description>Author</Description>
                            <Text>{post.by}</Text>
                        </Info>
                        <Info>
                            <Description>Rating</Description>
                            <Text>{post.score}</Text>
                        </Info>
                    </SectionInfo>
                </Card>
            ))}
        </>
    );
});

export default ListNews;