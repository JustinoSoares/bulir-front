import {api} from './api'

type ServicePayload = {
  name: string
  description: string
  price: number
}

type ServiceResponse = {
  id: string
  name: string
  description: string
  price: number
  userId: string
  createdAt: string
  updatedAt: string
}

type ErrorResponse = {
  message: string
}

export async function createService(data: ServicePayload): Promise<ServiceResponse | ErrorResponse> {
  const token = localStorage.getItem('token')
  const response = await api.post<ServiceResponse>('/service/create', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}