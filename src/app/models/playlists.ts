export interface IPlaylists {
    picture: string,
    small_picture: string,
    title: string,
    id: number,
}

export function makePlaylists(): IPlaylists {
    return {
        picture: '',
        small_picture: '',
        title: '',
        id: 0,
    }
}