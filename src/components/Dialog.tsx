import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import type { PropsDialog } from '../types/index'

export default function AlertDialog (props: PropsDialog) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setOpen(props.openDialog || false)
  }, [props.openDialog])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      {props.className && (
        <button onClick={() => handleClickOpen()} className={props.className}>
          {props.textButton || 'Solicitar'}{' '}
        </button>
      )}
      {!props.className && (
        <Button size='small' onClick={() => handleClickOpen()}>
          {props.textButton || 'Solicitar'}{' '}
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => props.action()} autoFocus>
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
