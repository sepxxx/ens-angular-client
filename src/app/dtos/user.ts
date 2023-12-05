export enum Role {
    User='ROLE_USER',
    Admin='ROLE_ADMIN'
}

export interface User {
    username: String,
    role: Role,
    jwtToken: String;
}