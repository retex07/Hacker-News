import { ReactNode } from "react";

export type PostType = {
    id: string;
    by: string;
    descendants: string;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    kids: CommentType[];
};

export type TreeCommentType = {
    title: ReactNode | (() => ReactNode);
    key: string;
    children?: TreeCommentType[];
};

export type CommentType = {
    id: string;
    parent: number;
    by: string;
    text: string;
    time: number;
    type: string;
    kids: CommentType[];
};
