import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import axios from 'axios'
import { toast } from 'react-toastify'
import React from 'react'
import type { PropsDialog } from '../types/index'
import DialogService from './Dialog'
import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import type { TokenPayload } from '../types/index'
type MyServicesType = {
  id: string
  name: string
  description: string
  price: number
  userId: string
  createdAt: string
}

export default function CardService ({
  id,
  name,
  description,
  price
}: MyServicesType) {
  const [loading, setLoading] = React.useState(false)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [tokenPayload, setTokenPayload] = React.useState<TokenPayload | null>(
    null
  )

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode<TokenPayload>(token)
      setTokenPayload(decoded)
    }
  }, [])

  const formattedPrice = price.toLocaleString('pt-AO', {
    style: 'currency',
    currency: 'AOA'
  })

  const dataDialog: PropsDialog = {
    title: 'Confirmar Solicitação',
    description: `Tem certeza que deseja solicitar este serviço por ${formattedPrice}?`,
    textButton: loading ? 'Solicitando...' : 'Solicitar',
    openDialog: dialogOpen,
    action: async () => {
      await RequestService()
    },
    onClose: () => {
      setDialogOpen(false)
    }
  }
  const RequestService = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        toast.error('Usuário não autenticado')
        return
      }
      setLoading(true)
      // criar data para pegar a data de amanha
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const res = await axios.post(
        'https://bulir.enor.tech/reservation/create',
        {
          serviceId: id,
          date: tomorrow.toISOString() // Enviando
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(res)
      if (res.status !== 200 && res.status !== 201) {
        toast.error(res.data.message || 'Erro ao solicitar serviços')
        setLoading(false)
        return
      }
      toast.success(`Serviço ${name} solicitado com sucesso!`)
      setDialogOpen(false)
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          'Erro ao criar usuário. Por favor, tente novamente.'
        toast.error(message)
      } else if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Erro inesperado.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, minHeight: 100 }}>
      <CardMedia
        sx={{
          height: 10,
          background:
            'linear-gradient(270deg, #31ecc6, #fff, #28b39c, grey, #2afadf)',
          backgroundSize: '600% 600%',
          animation: 'rgbGradient 10s ease infinite',

          '@keyframes rgbGradient': {
            '0%': {
              backgroundPosition: '0% 50%'
            },
            '50%': {
              backgroundPosition: '100% 50%'
            },
            '100%': {
              backgroundPosition: '0% 50%'
            }
          }
        }}
      />
      <CardContent>
        <h2 className='text-lg font-semibold mb-2'>{name}</h2>
        <p className='text-gray-600'>{description}</p>
      </CardContent>

      <CardActions className='flex items-center justify-between'>
        {tokenPayload && tokenPayload.user_type === 'client' && (
          <DialogService key={id} {...dataDialog} />
        )}
        {/* <Button size='small'>Learn More</Button> */}
        <p className='text-gray-500 text-sm text-end px-2'>{formattedPrice}</p>
      </CardActions>
    </Card>
  )
}
