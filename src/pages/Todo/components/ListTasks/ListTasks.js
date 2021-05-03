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
import {Delete as DeleteIcon} from '@material-ui/icons'
import {TaskForm} from '../TaskForm'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

const Item = ({markToDone, removeTask, task, updateTask}) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const {_id, done, title} = task
  const labelId = `checkbox-list-label-${_id}`

  const handleUpdate = (title) => {
    updateTask({...task, title})
    setIsUpdating(false)
  }

  return (
    <React.Fragment>
      <ListItem button onClick={() => setIsUpdating(!isUpdating)}>
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
          <IconButton edge="end" aria-label="delete" onClick={() => removeTask(_id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {isUpdating && <TaskForm defaultValue={title} onSubmit={handleUpdate} />}
    </React.Fragment>
  )
}

const ListTasks = ({markToDone, removeTask, tasks, updateTask}) => {
  const classes = useStyles()

  return (
    <List dense className={classes.root}>
      {tasks.map((task) => (
        <Item
          key={task._id}
          markToDone={markToDone}
          removeTask={removeTask}
          task={task}
          updateTask={updateTask}
        />
      ))}
    </List>
  )
}

export default ListTasks
