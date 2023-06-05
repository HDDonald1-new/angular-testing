import { Address, Company } from "./share.model";

  export interface User {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
  }
