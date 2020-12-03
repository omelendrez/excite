import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import Alert from './Alert'

import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Search from '@material-ui/icons/Search'
import FilterListIcon from '@material-ui/icons/FilterList'
import TextTypeField from './TextTypeField'

import { getRecordById, deleteRecord } from '../../services'

import readonlyTables from './readOnlyTables.json'

const ROWS_PER_PAGE = [5, 10, 15, 20, 25]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, columns, model } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }
  return (
    <TableHead>
      <TableRow>
        {!readonlyTables.includes(model) &&
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
        }
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.info.main,
        backgroundColor: lighten(theme.palette.info.light, 0.85),
      }
      : {
        color: theme.palette.text.info,
        backgroundColor: theme.palette.info.dark,
      },
  title: {
    flex: '1 1 100%',
  },
  fabButton: {
    marginLeft: theme.spacing(1),
    '&:focus': {
      outline: 'none'
    }
  },
  field: {
    width: '40ch',
    marginRight: theme.spacing(1)
  },
  searchButtonContainer: {
    position: 'absolute',
    left: '50%',
    marginLeft: '-20ch',
  }
}))

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles()
  const { numSelected, title, openForm, setOpenForm, handleAdd, handleDelete, doSearch } = props
  const [showSearch, setShowSearch] = useState(false)
  const [search, setSearch] = useState({ search: '' })
  const searchField = {
    name: 'search',
    label: '',
    type: 'text'
  }

  const handleShowSearch = e => {
    e.preventDefault()
    setSearch({ search: '' })
    setShowSearch(!showSearch)
    doSearch(search)
  }

  const onSearchChange = e => {
    e.preventDefault()
    setSearch({ ...search, [e.target.id]: e.target.value })
  }

  const handleSearch = e => {
    e.preventDefault()
    doSearch(search)
  }

  return (
    <>
      <Toolbar
        className={clsx(classes.root, { [classes.highlight]: numSelected > 0 })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} registro(s) seleccionado
          </Typography>
        ) : (
            <>
              <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                {title}
              </Typography>
              {showSearch && (
                <div className={classes.searchButtonContainer}>
                  <TextTypeField field={searchField} record={search} classes={classes} handleChange={e => onSearchChange(e)} />
                  <Button color="primary" variant="contained" onClick={e => handleSearch(e)}>
                    Buscar
                  </Button>
                </div>
              )}
            </>
          )}
        {numSelected > 0 ? (
          <>
            {numSelected === 1 && (
              <Tooltip title="Editar" className={classes.fabButton}>
                <Fab aria-label="add" color="secondary" size="small" onClick={() => setOpenForm(!openForm)}>
                  <EditIcon />
                </Fab>
              </Tooltip>
            )}
            <Tooltip title="Eliminar" className={classes.fabButton}>
              <Fab aria-label="delete" color="secondary" size="small" onClick={() => handleDelete()} >
                <DeleteIcon />
              </Fab>
            </Tooltip>
          </>
        ) : (
            <>
              {doSearch &&
                <Tooltip title="Buscar" className={classes.fabButton}>
                  <Fab aria-label="search" color="primary" size="small" onClick={e => handleShowSearch(e)}>
                    <Search />
                  </Fab>
                </Tooltip>
              }
              <Tooltip title="Filtros" className={classes.fabButton}>
                <Fab aria-label="filter list" color="primary" size="small">
                  <FilterListIcon />
                </Fab>
              </Tooltip>
              <Tooltip title="Agregar" className={classes.fabButton}>
                <Fab aria-label="add record" color="primary" onClick={() => handleAdd()} size="small" >
                  <AddIcon />
                </Fab>
              </Tooltip>
            </>
          )}

      </Toolbar>
    </>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

export default function EnhancedTable({ title, model, columns, rows, fieldId, fields, setUpdate, doSearch }) {
  const rowsPerPageStored = localStorage.getItem('rows-per-page') || 15
  const classes = useStyles()
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('calories')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageStored)
  const [recordSelected, setRecordSelected] = useState({})
  const [openForm, setOpenForm] = useState(false)
  const [alert, setAlert] = useState({ title: '', message: '', open: false })

  const handleAdd = () => {
    setRecordSelected({})
    setOpenForm(!openForm)
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n[fieldId])
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []
    let recordId = null

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }
    if (newSelected.length === 1) {
      recordId = newSelected[0]
    }
    if (recordId) {
      getRecordById(model, recordId)
        .then(record => setRecordSelected(record))
    }

    setSelected(newSelected)
  }

  const handleDelete = () => {
    if (readonlyTables.includes(model)) {
      return
    }
    setAlert({
      title: 'Eliminando registros',
      message: `Está seguro que quiere eliminar ${selected.length} registros?`,
      color: 'info',
      handleClose: closeAlert,
      handleConfimation: confirmDelete,
      open: true
    })
  }

  const confirmDelete = async () => {
    await selected.map(async id => {
      await deleteRecord(model, id)
    })
    setUpdate()
    setSelected([])
    closeAlert()
  }

  const closeAlert = () => {
    setAlert({})
  }

  const handleChangePage = (event, newPage) => {
    event.preventDefault()
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    const rows = parseInt(event.target.value, 10)
    localStorage.setItem('rows-per-page', rows)
    setRowsPerPage(rows)
    setPage(0)
  }

  const notifyUpdated = () => {
    setAlert({ message: 'Registro guardado satisfactoriamente', color: 'ok', open: true })
    setUpdate()
    setTimeout(() => {
      setAlert({ open: false })
      getRecordById(model, selected[0])
        .then(record => setRecordSelected(record))
    }, 1000)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div className={classes.root}>

      <Alert title={alert.title} open={alert.open} color={alert.color} message={alert.message} handleClose={alert.handleClose} handleConfirmation={alert.handleConfimation} />
      <Form open={openForm} setOpen={setOpenForm} title={title} fields={fields} record={recordSelected} model={model} setUpdate={notifyUpdated} />
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} setOpenForm={setOpenForm} openForm={openForm} title={title} handleAdd={handleAdd} handleDelete={handleDelete} doSearch={doSearch} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'small'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              columns={columns}
              title={title}
              model={model}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row[fieldId])
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={index}
                      selected={isItemSelected}
                    >
                      {!readonlyTables.includes(model) &&
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onClick={(event) => handleClick(event, row[fieldId])}
                          />
                        </TableCell>
                      }
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            onClick={(event) => !readonlyTables.includes(model) ? handleClick(event, row[fieldId]) : {}}
                          >
                            {column.format ? column.format(value) : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Registros por página"
        />
      </Paper>
    </div >
  )
}
