export interface AuthResponse {
    status_code: number;
    message:     string;
    data:        Data;
    error:       Error;
}

export interface Data {
    user: User;
}

export interface User {
    _id:        string;
    email:      string;
    isAdmin:    boolean;
    token:      string;
    phone:      string;
    imageUrl:   string;
    isVerified: boolean;
    username:   string;
}

export interface Error {
    message: string;
}
