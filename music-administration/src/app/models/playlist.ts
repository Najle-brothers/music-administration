export interface IPlaylist {
    picture: string,
    title: string,
    description: string,
    fans:string,
    duration: string,
    type: string,
    id: number,
}

export function makePlaylist(): IPlaylist {
    return {
        picture: '',
        title: '',
        description: '',
        fans: '',
        duration: '',
        type: '',
        id: 0,
    }
}