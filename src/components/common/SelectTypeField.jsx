/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getProductos } from '../../services/productos'
import { getClientes } from '../../services/clientes'
import { getIva } from '../../services/iva'

export default function ComboBox({ field, record, classes, handleChange }) {
  const [options, setOptions] = useState([])
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const records = []
    switch (field.name) {
      case 'PRODCOD':
        getProductos()
          .then(productos => {
            productos.map(producto => records.push({ title: `${producto['PRODCOD']} - ${producto['PRODDES']}`, id: producto[field.name] }))
            setOptions(records)
          })
        break
      case 'CONCLI':
        getClientes()
          .then(clientes => {
            clientes.map(cliente => records.push({ title: `${cliente['CLICOD']} - ${cliente['CLINOM']}`, id: cliente['CLICOD'] }))
            setOptions(records)
          })
        break
      case 'IVACOD':
        getIva()
          .then(ivas => {
            ivas.map(iva => records.push({ title: `${iva['IVACOD']} - ${iva['IVADES']}`, id: iva['IVACOD'] }))
            setOptions(records)
          })
        break
      default:
    }
  }, [field])

  useEffect(() => {
    const current = options.find(option => option.id === record[field.name])
    if (current) {
      setInputValue(current.title)
      setValue(current)
    } else {
      setInputValue('')
      setValue(null)
    }
  }, [options, record, field])

  const onChange = value => {
    setValue(value)
    console.log(value)
    handleChange({ target: { id: field.name, value: value ? value.id : value } })
  }

  const onInputChange = value => {
    setInputValue(value)
  }

  return options.length > 0 && <Autocomplete
    id={field.name}
    value={value}
    onChange={(event, newValue) => onChange(newValue)}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => field.readOnly ? {} : onInputChange(newInputValue)}
    options={options}
    getOptionLabel={(option) => option.title || ''}
    style={{ width: 300 }}
    renderInput={(params) =>
      <TextField {...params}
        label={field.label}
        variant="outlined"
        className={classes.field}
      />
    }
  />
}
