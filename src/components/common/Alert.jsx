import React, { forwardRef } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide({ title, message, color, open, handleClose, handleConfirmation }) {
  let background = ''
  switch (color) {
    case 'ok':
      background = 'linear-gradient(45deg, #2196f3 30%, #00b0ff 90%)'
      break
    case 'error':
      background = 'linear-gradient(45deg, #f44336 30%, #f50057 90%)'
      break
  }
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      disableBackdropClick
    >
      {title && <DialogTitle id="alert-dialog-slide-title" style={{ background: background, color: "#ffffff" }} > {title}</DialogTitle>}
      <DialogContent dividers>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      {(handleConfirmation || handleClose) && <DialogActions>
        {handleConfirmation &&
          <Button onClick={handleConfirmation} color="primary" variant="contained">
            Confirmar
          </Button>
        }
        {handleClose &&
          <Button onClick={handleClose} color="secondary" variant="outlined">
            {handleConfirmation ? 'Cancelar' : 'Salir'}
          </Button>
        }
      </DialogActions>
      }
    </Dialog>
  )
}
