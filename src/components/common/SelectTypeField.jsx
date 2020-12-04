/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { getRecords } from '../../services'

export default function ComboBox({ field, record, classes, handleChange }) {
  const [options, setOptions] = useState([])
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const records = []
    switch (field.name) {
      case 'PRODCOD':
        getRecords('productos')
          .then(productos => {
            productos.map(producto => records.push({ title: `${producto['PRODCOD']} - ${producto['PRODDES']}`, id: producto[field.name] }))
            setOptions(records)
          })
        break
      case 'CONCLI':
      case 'CLICOD':
        getRecords('clientes')
          .then(clientes => {
            clientes.map(cliente => records.push({ title: `${cliente['CLICOD']} - ${cliente['CLINOM']}`, id: cliente['CLICOD'] }))
            setOptions(records)
          })
        break
      case 'IVACOD':
        getRecords('iva')
          .then(ivas => {
            ivas.map(iva => records.push({ title: `${iva['IVACOD']} - ${iva['IVADES']}`, id: iva['IVACOD'] }))
            setOptions(records)
          })
        break
      case 'TIPCOD':
        getRecords('tipos')
          .then(tipos => {
            tipos.map(tipo => records.push({ title: `${tipo['TIPCOD']} - ${tipo['TIPDES']}`, id: tipo['TIPCOD'] }))
            setOptions(records)
          })
        break
      case 'TRACOD':
        getRecords('transportes')
          .then(transportes => {
            transportes.map(transporte => records.push({ title: `${transporte['TRACOD']} - ${transporte['TRANOM']}`, id: transporte['TRACOD'] }))
            setOptions(records)
          })
        break
      case 'ESTCOD':
        getRecords('estados')
          .then(estados => {
            estados.map(estado => records.push({ title: `${estado['ESTCOD']} - ${estado['ESTDES']}`, id: estado['ESTCOD'] }))
            setOptions(records)
          })
        break
      case 'SUBTIPCOD':
        getRecords('subtipos')
          .then(subTipos => {
            subTipos.map(subTipo => records.push({ title: `${subTipo['SUBTIPCOD']} - ${subTipo['SUBTIPDES']}`, id: subTipo['SUBTIPCOD'] }))
            setOptions(records)
          })
        break
      case 'VENCOD':
        getRecords('vendedores')
          .then(vendedores => {
            vendedores.map(vendedor => records.push({ title: `${vendedor['VENCOD']} - ${vendedor['VENNOM']}`, id: vendedor['VENCOD'] }))
            setOptions(records)
          })
        break
      case 'PROCOD':
      case 'TRAPROCOD':
        getRecords('provincias')
          .then(provincias => {
            provincias.map(provincia => records.push({ title: `${provincia['PROCOD']} - ${provincia['PRONOM']}`, id: provincia['PROCOD'] }))
            setOptions(records)
          })
        break
      case 'CLIINT':
      case 'VENINT':
        const interior = [{ title: 'DEL INTERIOR', id: 'INTERIOR' }, { title: 'BAHIA BLANCA', id: 'BAHIA BLANCA' }]
        setOptions(interior)
        break
      case 'PRODEST':
        const status = [{ title: 'ACTIVO', id: 'A' }, { title: 'INACTIVO', id: 'I' }]
        setOptions(status)
        break
      case 'PRODSEX':
        const sexos = [{ title: '* SIN SEXO *', id: '' }, { title: 'FEMENINO', id: 'FEMENINO' }, { title: 'MASCULINO', id: 'MASCULINO' }]
        setOptions(sexos)
        break
      case 'REMEMI':
        const emitidos = [{ title: ' ', id: '' }, { title: 'EMITIDO', id: 'E' }]
        setOptions(emitidos)
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
    renderInput={(params) =>
      <TextField {...params}
        label={field.label}
        variant="outlined"
        size="small"
        className={classes.field}
      />
    }
  />
}
