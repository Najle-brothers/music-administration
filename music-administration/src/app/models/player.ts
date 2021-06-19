export interface IPlayerData {
    id: string,
    type: string,
}

export function makePlayerData(): IPlayerData {
    return {
        id: "1479458365",
        type: "playlist",
    }
}