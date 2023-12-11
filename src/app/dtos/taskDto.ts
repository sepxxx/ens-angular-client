export interface TaskResponseDto {
    id: number,
    recipientListName: String,
    text: String,
    done: number,
    total: number
}

export interface TaskRequestDto {
    recipientListName: String,
    text: String
}