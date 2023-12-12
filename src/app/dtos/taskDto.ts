export interface TaskResponseDto {
    id: number,
    recipientListName: String,
    text: String,
    done: number,
    total: number
}

export interface TaskRequestDto {
    recipientsListName: String,
    text: String
}