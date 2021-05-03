import React, {useState} from 'react'
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import {Delete as DeleteIcon, Edit as EditIcon} from '@material-ui/icons'
import useTasks from '../../../../hooks/useTasks'
import {TaskForm} from '../TaskForm'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

const Item = ({task}) => {
  const {markToDone, removeTask, updateTask} = useTasks()
  const [isUpdating, setIsUpdating] = useState(false)
  const {_id, done, title} = task
  const labelId = `checkbox-list-label-${_id}`

  const handleUpdate = (title) => {
    updateTask({...task, title})
    setIsUpdating(false)
  }

  const handleRemoveTask = () => removeTask(_id)

  const toggleUpdating = () => setIsUpdating(!isUpdating)

  return (
    <React.Fragment>
      <ListItem>
        <ListItemAvatar>
          <Checkbox
            edge="end"
            onChange={() => markToDone(_id)}
            checked={done}
            inputProps={{'aria-labelledby': labelId}}
          />
        </ListItemAvatar>
        <ListItemText id={labelId}>{title}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit" onClick={toggleUpdating}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={handleRemoveTask}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {isUpdating && <TaskForm defaultValue={title} onSubmit={handleUpdate} />}
    </React.Fragment>
  )
}

const ListTasks = () => {
  const {tasks} = useTasks()
  const classes = useStyles()

  return (
    <List dense className={classes.root}>
      {tasks.map((task) => (
        <Item key={task._id} task={task} />
      ))}
    </List>
  )
}

export default ListTasks
