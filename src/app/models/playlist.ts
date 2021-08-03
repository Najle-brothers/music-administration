export interface IPlaylist {
    picture: string,
    medium_picture: string,
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
        medium_picture: '',
        title: '',
        description: '',
        fans: '',
        duration: '',
        type: '',
        id: 0,
    }
}