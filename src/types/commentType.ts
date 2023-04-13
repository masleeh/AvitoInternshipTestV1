export interface IComment {
    by: string,
    id: number,
    kids: number[],
    text: string,
    time: number,
    deleted?: boolean,
    parent?: number,
    rootComsState?: any,
    fetchNestedComments?: Function,
    layer?: number
}