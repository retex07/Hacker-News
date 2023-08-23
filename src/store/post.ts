import Api from "api";
import { makeAutoObservable } from "mobx";
import { PostType } from "types";

class Post {
    private isLoadingPost = false;
    private isUpdatingPost = false;
    private post!: PostType;

    constructor() {
        makeAutoObservable(this);

        this.setIsLoadingPost(true);
        this.update();
    }

    update() {
        this.setIsUpdatingPost(true);
        const postId = window.location.pathname.split("/post/")[1];

        if (postId) {
            Api.getFullItem(postId)
                .then((res) => {
                    this.setIsLoadingPost(false);
                    this.setIsUpdatingPost(false);
                    this.setPost(res);
                })
                .catch((err) => console.error(err));

        }
    }

    get getPost() {
        return this.post;
    }
    get getIsLoadingPost() {
        return this.isLoadingPost;
    }
    get getIsUpdatingPost() {
        return this.isUpdatingPost;
    }

    private setIsLoadingPost(value: boolean) {
        this.isLoadingPost = value;
    }
    private setIsUpdatingPost(value: boolean) {
        this.isUpdatingPost = value;
    }
    private setPost(value: PostType) {
        this.post = {
            id: value.id,
            by: value.by,
            descendants: value.descendants,
            kids: value.kids,
            score: value.score,
            time: value.time,
            title: value.title,
            type: value.type,
            url: value.url
        }
    }
}

export default new Post();
