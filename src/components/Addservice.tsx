import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import { createService } from '../services/createService'
import { ToastContainer, toast } from 'react-toastify'
import Confetti from 'react-confetti'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

export default function CustomizedDialogs () {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = React.useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [loading, setLoading] = useState(false)

  async function addService () {
    try {
      if (!name || !description || !price || price <= 0) {
        setError('Por favor, preencha todos os campos corretamente.')
        toast.error(error || 'Por favor, preencha todos os campos corretamente.')
        return
      }
      setLoading(true)
      const response = await createService({ name, description, price })

      if ('message' in response) {
        throw new Error(response.message)
      } 
      setError(null)
      toast.success('Serviço criado com sucesso!')
      setOpen(false)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)
      // Aqui você pode adicionar lógica para atualizar a lista de serviços ou fechar o diálogo
    } catch (error) {
      console.error('Erro ao criar serviço:', error)
      setError('Erro ao criar serviço. Por favor, tente novamente.')
      const MessageApi = error as { response: { data: { message: string } } }
      toast.error(MessageApi.response.data.message || 'Erro ao criar serviço.')
    }
    finally {
      setLoading(false)
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <div
        onClick={handleClickOpen}
        className='w-12 h-12 rounded-full cursor-pointer bg-[#28b39c] flex items-center justify-center'
      >
        <FaPlus className='text-black' />
      </div>
      {showConfetti && <Confetti />}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'>
          Adicionar Serviço
        </DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={theme => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500]
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className='flex flex-col gap-4'>
            <div className='border border-gray-300 rounded-2xl p-1 w-md'>
              <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                className='p-2 w-[100%] outline-none'
                placeholder='Nome do serviço'
              />
            </div>
            <div className='border border-gray-300 rounded-2xl p-1 w-md h-32'>
              <input
                value={description}
                onChange={e => setDescription(e.target.value)}
                type='text'
                className='p-2 w-[100%] outline-none'
                placeholder='Descrição do serviço'
              />
            </div>
            <div className='border border-gray-300 rounded-2xl p-1 w-md'>
              <input
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                type='number'
                className='p-2 w-[100%] outline-none'
                placeholder='Preço do serviço'
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={addService} disabled={loading}>
            {loading ? 'Adicionando...' : 'Adicionar Serviço'}
            <ToastContainer />
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  )
}
