import {api} from './api'

type UserPayload = {
    full_name: string
    nif: string
    email: string
    password: string
}

type UserResponse = {
  id: string
  full_name: string
  nif: string
  email: string
  balance: number
  user_type: string
  createdAt: string
  updatedAt: string
}

type ErrorResponse = {
  message: string
}

export async function createUser(data: UserPayload): Promise<UserResponse | ErrorResponse> {
  const token = localStorage.getItem('token')
  const response = await api.post<UserResponse>('/user/create', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}