export type TokenPayload = {
    userId: string
    email: string
    user_type: string
}

export type User = {
  id: string
  full_name: string
  nif: string
  email: string
  balance: number
  user_type: string
  createdAt: string
}

export type MyServivesType = {
  id: string
  name: string
  description: string
  price: number
  userId: string
  createdAt: string
}

export type PropsDialog = {
  title: string
  description: string
  className?: string
  textButton: string
  openDialog: boolean
  action: () => void | Promise<void>
  onClose: () => void
}