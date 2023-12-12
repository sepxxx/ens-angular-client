export interface TaskResponseDto {
    id: number,
    recipientListName: string,
    text: string,
    createdAt: string,
    done: number,
    total: number
}

export interface TaskRequestDto {
    recipientsListName: String,
    text: String
}