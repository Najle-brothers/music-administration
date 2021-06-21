export interface IPlayerData {
    id: number,
    type: string,
}

export function makePlayerData(): IPlayerData {
    return {
        id: 1479458365,
        type: "playlist",
    }
}