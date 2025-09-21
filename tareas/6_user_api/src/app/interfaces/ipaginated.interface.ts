import { IUser } from "./iuser.interface";

// Representa la respuesta paginada de la API
export interface IResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: IUser[];
}

