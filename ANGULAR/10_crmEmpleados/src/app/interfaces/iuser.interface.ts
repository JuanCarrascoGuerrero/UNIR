export interface IUser {
  username?: string;
  email: string;
  password?: string;
}

export interface IResponse {
  success: string;
  token: string;
  user: IUser
}

