import React, { useState, useEffect, forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

import TextField from '@material-ui/core/TextField'

import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },
  buttons: {
    margin: theme.spacing(1),
    width: '80ch',
    display: 'flex',
    justifyContent: 'space-between'
  },
  field: {
    width: '80ch',
    margin: theme.spacing(1)
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const FullScreenDialog = ({ activate, title, fields, record }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(!open)
  }, [activate])


  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <form className={classes.root} noValidate autoComplete="off">
        {fields && fields.map((field, index) =>
          <div key={index}          >
            <TextField
              id={field.name}
              label={field.label}
              type={field.type}
              className={classes.field}
              variant="outlined"
              helperText={field.helperText}
              InputLabelProps={field.type === 'date' ? {
                shrink: true,
              } : {}}
              defaultValue={record[field.name] || ''}
            />
          </div>
        )}
        <div className={classes.buttons}>
          <Button color="primary" variant="contained" onClick={handleClose}>
            Guardar
            </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Salir
            </Button>
        </div>
      </form>
    </Dialog>
  )
}

export default FullScreenDialog 