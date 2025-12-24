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

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<unknown>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function FullScreenDialog () {
  const [open, setOpen] = React.useState(false)

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
              edge='start'
              color='black'
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
        <List>
          <ListItemButton>
            <ListItemText primary='Phone ringtone' secondary='Titania' />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary='Default notification ringtone'
              secondary='Tethys'
            />
          </ListItemButton>
        </List>
      </Dialog>
    </React.Fragment>
  )
}
