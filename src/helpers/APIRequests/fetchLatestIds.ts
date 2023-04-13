import axios from 'axios'

export const fetchLatestIds = async () => {
     return await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
}