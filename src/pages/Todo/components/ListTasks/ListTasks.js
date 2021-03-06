import React, {useState} from 'react'
import {
  Card,
  Checkbox,
  Grid,
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
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    marginTop: theme.spacing(4),
    width: theme.spacing(50),
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
    <Grid container justify="center">
      {tasks.length > 0 && (
        <Card className={classes.list}>
          <List dense className={classes.root}>
            {tasks.map((task) => (
              <Item key={task._id} task={task} />
            ))}
          </List>
        </Card>
      )}
    </Grid>
  )
}

export default ListTasks
