import TextField from '@material-ui/core/TextField'

const TextTypeField = ({ field, record, handleChange, classes }) => {
  console.log(record)
  return <TextField
    id={field.name}
    label={field.label}
    type={field.type}
    className={classes.field}
    variant="outlined"
    helperText={field.helperText}
    value={record[field.name]}
    onChange={e => field.readOnly ? {} : handleChange(e)}
  />
}

export default TextTypeField