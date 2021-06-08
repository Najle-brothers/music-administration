export interface IAlbum {
    picture: string,
    title: string,
    artist: string,
    fans: string,
    duration: string
}

export function makeAlbum(): IAlbum {
    return {
        picture: '',
        title: '',
        artist: '',
        fans: '',
        duration: ''
    }
}