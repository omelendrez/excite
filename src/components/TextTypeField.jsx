import TextField from '@material-ui/core/TextField'

const TextTypeField = ({ field, record, handleChange, handleKeyPress, classes }) => {
  const inputProps = {
    maxLength: field.length
  }
  return (<TextField
    id={field.name}
    label={field.label}
    type={field.type}
    className={classes.field}
    variant="outlined"
    helperText={field.helperText}
    value={record[field.name]}
    onChange={e => field.readOnly ? {} : handleChange(e)}
    size="small"
    multiline={!!field.rows}
    rows={field.rows}
    onKeyPress={e => handleKeyPress ? handleKeyPress(e) : null}
    inputProps={inputProps}
  />)
}

export default TextTypeField