/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types'
import { createTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
// @material-ui/core components
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
// @material-ui/icons
import styles from './tableTheme'

const theme = createTheme()
const useStyles = makeStyles(styles(theme))
const CustomTable = (props) => {
   const classes = useStyles()
   const { tableHead, tableData, tableHeaderColor } = props
   return (
      <div className={classes.tableResponsive}>
         <Table className={classes.table}>
            {tableHead !== undefined ? (
               <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
                  <TableRow className={classes.tableHeadRow}>
                     {tableHead.map((prop, key) => (
                        <TableCell
                           className={`${classes.tableCell} ${classes.tableHeadCell}`}
                           key={key}
                        >
                           {prop}
                        </TableCell>
                     ))}
                  </TableRow>
               </TableHead>
            ) : null}
            <TableBody>
               {tableData.map((prop, key1) => (
                  <TableRow key={key1} className={classes.tableBodyRow}>
                     {prop.map((prop1, key2) => (
                        <TableCell className={classes.tableCell} key={key2}>
                           {prop1}
                        </TableCell>
                     ))}
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   )
}

CustomTable.defaultProps = {
   tableHeaderColor: 'gray',
}

CustomTable.propTypes = {
   tableHeaderColor: PropTypes.oneOf([
      'warning',
      'primary',
      'danger',
      'success',
      'info',
      'rose',
      'gray',
   ]),
   tableHead: PropTypes.arrayOf(PropTypes.string),
   tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
}
export default CustomTable
