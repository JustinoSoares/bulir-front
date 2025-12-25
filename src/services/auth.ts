import { api } from './api'

type LoginPayload = {
  username: string
  password: string
}

type LoginResponse = {
  token: string
}

export async function login(data: LoginPayload): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/auth/login', data)
  return response.data
}
