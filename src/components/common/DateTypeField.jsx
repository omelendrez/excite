import DateFnsUtils from '@date-io/date-fns'
import locale from "date-fns/locale/es"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"

const DateTypeField = ({ field, record, handleDateChange, classes }) =>
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
    <KeyboardDatePicker
      inputVariant="outlined"
      onChange={d => field.readOnly ? {} : handleDateChange(field.name, d)}
      disableFuture
      clearable
      className={classes.field}
      label={field.label}
      value={record[field.name] || null}
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

export default DateTypeField