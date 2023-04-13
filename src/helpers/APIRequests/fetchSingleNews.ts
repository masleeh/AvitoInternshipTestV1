import axios from "axios";

export const fetchSingleNew = async (id: number) => {
    return await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
}