export interface GameConfig {
    categories: GameCategory[]
}

export interface GameCategory {
    name: string
    color: string
    questions: GameQuestion[]
}

export interface GameQuestion {
    id: string
    points: number
    text: string
    solution: string
    used?: boolean
    code?: GameQuestionCode
}

export interface GameQuestionCode {
    question?: string
    answer?: string
    language: string
}
