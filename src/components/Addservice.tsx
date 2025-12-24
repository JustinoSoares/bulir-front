import * as React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { FaPlus } from 'react-icons/fa'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

export default function CustomizedDialogs () {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <div onClick={handleClickOpen} className='w-12 h-12 rounded-full cursor-pointer bg-[#28b39c] flex items-center justify-center'>
        <FaPlus className='text-black' />
      </div>
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
              <input type="text" className='p-2 w-[100%] outline-none' placeholder='Nome do serviço' />
            </div>
            <div className='border border-gray-300 rounded-2xl p-1 w-md h-32'>
              <input type="text" className='p-2 w-[100%] outline-none' placeholder='Descrição do serviço' />
            </div>
             <div className='border border-gray-300 rounded-2xl p-1 w-md'>
              <input type="number" className='p-2 w-[100%] outline-none' placeholder='Preço do serviço' />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Adicionar Serviço
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  )
}
