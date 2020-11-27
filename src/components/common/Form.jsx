import React, { useState, useEffect, forwardRef } from 'react'
import TextTypeField from './TextTypeField'
import DateTypeField from './DateTypeField'
import SelectTypeField from './SelectTypeField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { objectChanged, inputFormatDate } from '../../helpers'

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


const FullScreenDialog = ({ open, setOpen, title, fields, record }) => {
  const classes = useStyles()
  const [newRecord, setNewRecord] = useState(record)
  const [submitDisabled, setSubmitDisabled] = useState(true)

  useEffect(() => {
    const object = { ...record }
    if (!Object.keys(object).length) {
      fields.map(field => object[field.name] = '')
    }
    setNewRecord(object)
  }, [record, fields])

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
    const object = { ...record }
    if (!Object.keys(object).length) {
      fields.map(field => object[field.name] = '')
    }
    setNewRecord(object)
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
    console.table(newRecord)
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
          if (field.readOnly && !newRecord[field.name]) {
            return null
          }
          switch (field.type) {
            case 'text':
              return <div key={index}><TextTypeField field={field} record={newRecord} handleChange={handleChange} classes={classes} /></div>
            case 'select':
              return <div key={index}><SelectTypeField field={field} record={newRecord} handleChange={handleChange} classes={classes} /></div>
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