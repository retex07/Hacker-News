import React from "react";
import { observer } from "mobx-react-lite";
import { CommentType, PostType, TreeCommentType } from "types";
import { Button, Tree, Typography } from "antd";

import post from "store/post";
import FullDate from "components/fullDate";
import PageLoader from "components/loader";

import { Description, Info, SectionInfo, Wrapper, Comments } from "./styled";

const PostItem = observer(() => {
    const { Text, Title } = Typography;

    const postItem = post.getPost;

    if (post.getIsLoadingPost) {
        return <PageLoader />
    }

    const getTotalCommentsCount = (item: CommentType | PostType) => {
        let count = item.kids ? item.kids.length : 0;

        if (item.kids && item.kids.length > 0) {
            item.kids.forEach((kid) => {
                count += getTotalCommentsCount(kid);
            })
        }

        return count;
    }

    const getTreeKids = (kids: CommentType[], keyParent: string) => {
        const comments: TreeCommentType[] = [];

        kids.forEach((comment) => {
            const key = `${keyParent}-${comments.length}`;

            if (comment.kids) {
                comments.push({
                    title: <div dangerouslySetInnerHTML={
                        { __html: `<b>${comment.by}:</b> ${comment.text}` }
                    } />,
                    key: key,
                    children: getTreeKids(comment.kids, key),
                });
            } else {
                comments.push({
                    title: <div dangerouslySetInnerHTML={
                        { __html: `<b>${comment.by}:</b> ${comment.text}` }
                    } />,
                    key: key,
                });
            }
        });

        return comments;
    }

    return (
        <Wrapper>
            <Title>{postItem.title}</Title>
            <SectionInfo>
                <Info>
                    <Description>Author</Description>
                    <Text>{postItem.by}</Text>
                </Info>
                <Info>
                    <Description>Date</Description>
                    <FullDate time={postItem.time} />
                </Info>
                <Info>
                    <Description>Number of comments</Description>
                    <Text>{getTotalCommentsCount(postItem)}</Text>
                </Info>
            </SectionInfo>
            {postItem.url && (
                <Button type="primary" target="_blank" href={postItem.url}>Go to news</Button>
            )}
            {postItem.kids && (
                <Comments>
                    <Button
                        loading={post.getIsUpdatingPost}
                        onClick={() => post.update()}
                        type="dashed"
                    >
                        {post.getIsUpdatingPost ?
                            <Text type="warning">Updating comments...</Text> : <Text>Update comments</Text>
                        }
                    </Button>
                    <Tree showLine treeData={getTreeKids(postItem.kids, `0`)} style={{ padding: 12 }} />
                </Comments>
            )}
        </Wrapper>
    );
});

export default PostItem;
