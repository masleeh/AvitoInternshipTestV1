export interface INewsItem {
    by: string,
    descendants: number,
    id: number,
    kids: number[],
    score: number,
    time: number,
    title: string,
    type: string,
    url: string
}


export interface INewsItemData {
    by: string,
    descendants: number,
    id: number,
    kids: number[],
    score: number,
    time: string,
    title: string,
    type: string,
    url: string,
    navigate: Function
}

export interface ISingleNews {
    title: string,
    time: string,
    by: string,
    url: string,
    kids: any,
    descendants: number
}