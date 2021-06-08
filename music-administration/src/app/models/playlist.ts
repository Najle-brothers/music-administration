export interface IPlaylist {
    picture: string,
    title: string,
    description: string,
    fans:string,
    duration: string
}

export function makePlaylist(): IPlaylist {
    return {
        picture: '',
        title: '',
        description: '',
        fans: '',
        duration: ''
    }
}