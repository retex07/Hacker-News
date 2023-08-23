import axios from 'axios';

const apiInstance = axios.create({
    baseURL: `https://hacker-news.firebaseio.com/v0/`,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiInstance.interceptors.request.use((config) => {
    config.url = `${config.url}`;
    return config;
});

const api = {
    getNews: async () => {
        return apiInstance.get('topstories.json?print=pretty');
    },
    getItem: async (id: string) => {
        return await apiInstance.get(`/item/${id}.json`);
    },
    getFullItem: async (id: string) => {
        const response = await apiInstance.get(`/item/${id}.json`);
        const item = response.data;

        if (item.kids && item.kids.length > 0) {
            item.kids = await Promise.all(item.kids.map((kidId: string) => api.getFullItem(kidId)));;
        }

        return item;
    }
}

export default api;
