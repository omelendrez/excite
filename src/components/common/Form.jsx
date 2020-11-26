import React, { useState, useEffect, forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import DateFnsUtils from '@date-io/date-fns'
import locale from "date-fns/locale/es"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import { objectChanged, inputFormatDate } from '../../helpers'

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

const TextTypeField = ({ field, record, handleChange, classes }) =>
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
    value={record[field.name] || ''}
    onChange={e => handleChange(e)}
  />

const DateTypeField = ({ field, record, handleDateChange, classes }) =>
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
    <KeyboardDatePicker
      inputVariant="outlined"
      onChange={d => handleDateChange(field.name, d)}
      disableFuture
      clearable
      className={classes.field}
      label={field.label}
      value={record[field.name]}
      animateYearScrolling
      format="dd/MM/yyyy"
      invalidDateMessage="Fecha no válida"
      maxDateMessage="Fecha no puede ser posterior a hoy"
      cancelLabel="Salir"
      clearLabel="Limpiar"
      showTodayButton
      todayLabel="Hoy"
    />
  </MuiPickersUtilsProvider>


const FullScreenDialog = ({ open, setOpen, title, fields, record }) => {
  const classes = useStyles()
  const [newRecord, setNewRecord] = useState(record)
  const [submitDisabled, setSubmitDisabled] = useState(true)

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
    const newDate = inputFormatDate(date)
    const updatedRecord = { ...newRecord, [fieldName]: newDate }
    setNewRecord(updatedRecord)
    if (objectChanged(record, updatedRecord)) {
      return setSubmitDisabled(false)
    }
    setSubmitDisabled(true)
  }

  const handleSubmit = () => {
    console.log(newRecord)
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
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
          switch (field.type) {
            case 'text':
              return <div key={index}><TextTypeField field={field} record={newRecord} handleChange={handleChange} classes={classes} /></div>
            case 'date':
              return <div key={index}><DateTypeField field={field} record={newRecord} handleDateChange={handleDateChange} classes={classes} /></div>
            default:
              return <div key={index}><TextTypeField field={field} record={newRecord} handleChange={handleChange} classes={classes} /></div>
          }
        })
        }
        <div className={classes.buttons}>
          <Button color="primary" variant="contained" disabled={submitDisabled} onClick={handleSubmit}>
            Guardar
            </Button>
          <Button color="default" variant="contained" disabled={submitDisabled} onClick={handleReset}>
            Reset
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