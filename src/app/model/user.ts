export interface User {
  role: string;
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  ip?: number;
  image?: string;
}