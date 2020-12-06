import React, { useState, useEffect, forwardRef } from 'react'
import TextTypeField from './TextTypeField'
import DateTypeField from './DateTypeField'
import SelectTypeField from './SelectTypeField'
import Alert from './Alert'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { objectChanged, formatInputDate, formatDatesForSumit } from '../helpers'
import { addRecord, updateRecord } from '../services'

import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  field: {
    width: '64ch',
    margin: theme.spacing(1)
  },
  buttons: {
    width: '65ch',
    margin: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-around'
  },
  button: {
    width: '22ch',
    '&:focus': {
      outline: 'none'
    }
  },
}))

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})


const FullScreenDialog = ({ open, setOpen, title, fields, record, model, setUpdate }) => {
  const classes = useStyles()
  const [newRecord, setNewRecord] = useState(record)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [alert, setAlert] = useState({ title: '', message: '', open: false })

  useEffect(() => {
    setNewRecord(record)
  }, [record])

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = e => {
    const { id, value } = e.target
    const updatedRecord = { ...newRecord, [id]: value }
    setNewRecord(updatedRecord)
    if (objectChanged(record, updatedRecord)) {
      return setSubmitDisabled(false)
    }
    setSubmitDisabled(true)
  }

  const handleReset = e => {
    setNewRecord(record)
    setSubmitDisabled(true)
  }

  const handleDateChange = (fieldName, date) => {
    const newDate = formatInputDate(date)
    const updatedRecord = { ...newRecord, [fieldName]: newDate }
    setNewRecord(updatedRecord)
    if (objectChanged(record, updatedRecord)) {
      return setSubmitDisabled(false)
    }
    setSubmitDisabled(true)
  }

  const handleSubmit = () => {
    const record = formatDatesForSumit(newRecord)
    if (!newRecord.ID) {
      addRecord(model, record)
        .then(() => {
          setUpdate()
          handleClose()
        })
        .catch(err => {
          setAlert({ title: 'Error de servidor', message: err.message, color: 'error', open: true })
        })
    } else {
      updateRecord(model, record)
        .then(() => {
          setUpdate()
          handleClose()
        })
        .catch(err => {
          setAlert({ title: 'Error de servidor', message: err.message, color: 'error', open: true })
        })
    }
  }

  const handleAlertClose = () => {
    setAlert({ open: false })
  }

  return (
    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition} disableBackdropClick>
      <Alert title={alert.title} open={alert.open} color={alert.color} message={alert.message} handleClose={handleAlertClose} />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => handleClose()} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <form className={classes.root} noValidate autoComplete="off">
        {fields && fields.map((field, index) => {
          if (field.readOnly && !newRecord[field.name]) {
            return null
          }
          switch (field.type) {
            case 'text':
              return <div key={index}><TextTypeField field={field} record={newRecord} handleChange={handleChange} classes={classes} /></div>
            case 'number':
              return <div key={index}><TextTypeField field={field} record={newRecord} handleChange={handleChange} classes={classes} /></div>
            case 'select':
              return <div key={index}><SelectTypeField field={field} record={newRecord} handleChange={handleChange} classes={classes} /></div>
            case 'date':
              return <div key={index}><DateTypeField field={field} record={newRecord} handleDateChange={handleDateChange} classes={classes} /></div>
            default:
              return <div key={index}><div className={classes.field}>🤷‍♂️ <b style={{ color: 'red' }}>{field.label}</b> ({field.name}) tiene un <i><b>type</b></i> incorrecto. Verificar <code>field.js</code></div></div>
          }
        })
        }
      </form>
      <div className={classes.buttons}>
        <Button color="primary" variant="contained" disabled={submitDisabled} onClick={handleSubmit} className={classes.button}>
          Guardar cambios
            </Button>
        <Button color="default" variant="contained" disabled={submitDisabled} onClick={handleReset} className={classes.button}>
          Deshacer cambios
            </Button>
        <Button color="secondary" variant="outlined" onClick={handleClose} className={classes.button}>
          Salir
            </Button>
      </div>
    </Dialog>
  )
}

export default FullScreenDialog 