import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
// @material-ui/core components
import Checkbox from '@mui/material/Checkbox'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
// @material-ui/icons
import Edit from '@mui/icons-material/Edit'
import Close from '@mui/icons-material/Close'
import Check from '@mui/icons-material/Check'
import styles from './taskThemes'

const useStyles = makeStyles(styles)

const Tasks = (props) => {
   const classes = useStyles()
   const { tasksIndexes, tasks, rtlActive, checkedIndexes } = props
   const [checked, setChecked] = React.useState([...checkedIndexes])
   const handleToggle = (value) => {
      const currentIndex = checked.indexOf(value)
      const newChecked = [...checked]
      if (currentIndex === -1) {
         newChecked.push(value)
      } else {
         newChecked.splice(currentIndex, 1)
      }
      setChecked(newChecked)
   }
   const tableCellClasses = rtlActive
      ? `${classes.tableCell} ${classes.tableCellRTL}`
      : classes.tableCell
   return (
      <Table className={classes.table}>
         <TableBody>
            {tasksIndexes.map((value) => (
               <TableRow key={value} className={classes.tableRow}>
                  <TableCell className={tableCellClasses}>
                     <Checkbox
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        onClick={() => handleToggle(value)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{
                           checked: classes.checked,
                           root: classes.root,
                        }}
                     />
                  </TableCell>
                  <TableCell className={tableCellClasses}>
                     {tasks[value]}
                  </TableCell>
                  <TableCell className={classes.tableActions}>
                     <Tooltip
                        id="tooltip-top"
                        title="Edit Task"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                     >
                        <IconButton
                           aria-label="Edit"
                           className={classes.tableActionButton}
                        >
                           <Edit
                              className={`${classes.tableActionButtonIcon} ${classes.edit}`}
                           />
                        </IconButton>
                     </Tooltip>
                     <Tooltip
                        id="tooltip-top-start"
                        title="Remove"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                     >
                        <IconButton
                           aria-label="Close"
                           className={classes.tableActionButton}
                        >
                           <Close
                              className={`${classes.tableActionButtonIcon} ${classes.close}`}
                           />
                        </IconButton>
                     </Tooltip>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}

Tasks.propTypes = {
   tasksIndexes: PropTypes.arrayOf(PropTypes.number),
   tasks: PropTypes.arrayOf(PropTypes.node),
   rtlActive: PropTypes.bool,
   checkedIndexes: PropTypes.array,
}
export default Tasks
