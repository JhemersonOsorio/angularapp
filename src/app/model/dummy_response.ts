import { User } from "./user";

export interface DummyResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}