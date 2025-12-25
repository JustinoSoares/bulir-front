import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import type { TransitionProps } from '@mui/material/transitions'
import { FaHistory } from 'react-icons/fa'
import axios  from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import type { Resevation } from '../types'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<unknown>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
  type createData = {
  id: string
  serviceId: string
  date: string
  status: string
  createdAt: string
  name: string
  description: string
  price: number
}



export default function FullScreenDialog () {
  const [open, setOpen] = React.useState(false)

   const [reservations, setReservations] = useState<createData[]>([])
  useEffect(() => {
    // pegar as minhas solicitações da api e popular a tabela
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'https://bulir.enor.tech/reservation/all',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
  
        if (!response.data || response.data.length === 0) {
          setReservations([])
          return
        }
        const transformedReservations : createData[] = response.data.map((reservation : Resevation) => ({
          id: reservation.id,
          serviceId: reservation.serviceId,
          date: reservation.date,
          status: reservation.status,
          createdAt: reservation.createdAt,
          name: reservation.service.name,
          description: reservation.service.description,
          price: reservation.service.price
        }))
        setReservations(transformedReservations)
      } catch (error) {
        console.error('Erro ao buscar solicitações:', error)
        setReservations([])
        toast.error('Erro ao buscar solicitações')
      }
    }
    fetchRequests()
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }



  return (
    <React.Fragment>
      <button onClick={handleClickOpen} className='flex cursor-pointer items-center px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-50 transition-colors duration-200'>
        <FaHistory className='mr-2' />
        Histórico
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        slots={{
          transition: Transition
        }}
      >
        <AppBar sx={{ position: 'relative', background: 'linear-gradient(90deg, #ebfefa, #28b39c)' }} >
          <Toolbar>
            <IconButton
              className='text-black'
              edge='start'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, color: 'black' }} variant='h6' component='div'>
              Histórico de Atividades
            </Typography>
            {/* <Button autoFocus color='inherit' onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        {reservations.length === 0 ? (
          <div className='flex justify-center items-center h-full'>
            <p className='text-gray-500 text-lg'>Nenhuma atividade encontrada.</p>
          </div>
        ) : (
          <List>
            {reservations.map((reservation) => (
              <div key={reservation.id}>
                <ListItemButton>
                  <ListItemText
                    primary={reservation.name}
                    secondary={`Data: ${new Date(reservation.date).toLocaleDateString()} - Status: ${reservation.status} - Preço: $${reservation.price}`}
                  />
                </ListItemButton>
                <Divider />
              </div>
            ))}
          </List>
        )}
      </Dialog>
    </React.Fragment>
  )
}
