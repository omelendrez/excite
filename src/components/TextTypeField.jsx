import TextField from '@material-ui/core/TextField'

const TextTypeField = ({ field, record, handleChange, handleKeyPress, classes }) =>
  <TextField
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
    inputProps={{
      maxLength: field.length
    }}
  />

export default TextTypeField