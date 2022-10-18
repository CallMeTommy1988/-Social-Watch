

export interface user {
    id: number;
    email: string;
    passwd?: string;
    create_time: Date;
    last_time: Date;
    status: number;
    email_check: number
}

export interface userState {
    user?: user,
    token?: string
}