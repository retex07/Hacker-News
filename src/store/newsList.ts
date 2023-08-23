import { makeAutoObservable} from "mobx";
import { PostType } from "types";
import Api from "api";

class NewsList {
    private isLoading = false;
    private newsList: PostType[] = [];

    constructor() {
        makeAutoObservable(this);

        if (window.location.pathname === "/") {
            this.update();
            setTimeout(() => {
                this.update();
            }, 60000);
        }
    }

    update() {
        this.setIsLoading(true);
        this.clearNewsList();

        const newsIds: string[] = [];

        Api.getNews()
            .then((res) => {
                newsIds.push(...res.data.slice(0, 100));

                newsIds.map((post) =>
                    Api.getItem(post)
                        .then((res) => {
                            this.addNews({
                                id: res.data.id,
                                by: res.data.by,
                                descendants: res.data.descendants,
                                kids: res.data.kids,
                                score: res.data.score,
                                time: res.data.time,
                                title: res.data.title,
                                type: res.data.type,
                                url: res.data.url,
                            });

                            if (this.getNewsList.length === newsIds.length) {
                                this.setIsLoading(false);
                            }
                        })
                        .catch((err) => console.error(err))
                )
            })
            .catch((err) => console.error(err));
    }

    private setIsLoading(value: boolean) {
        this.isLoading = value;
    }
    private addNews(value: PostType) {
        this.newsList.push(value)
    }
    private clearNewsList() {
        this.newsList = [];
    }

    get getNewsList() {
        return this.newsList;
    }
    get getIsLoading() {
        return this.isLoading;
    }
}

export default new NewsList();
