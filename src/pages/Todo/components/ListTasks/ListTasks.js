import React from 'react'
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

const ListTasks = ({markToDone, removeTask, tasks}) => {
  const classes = useStyles()

  const Item = ({task}) => {
    const {_id, done, title} = task
    const labelId = `checkbox-list-label-${_id}`

    return (
      <ListItem>
        <ListItemAvatar>
          <Checkbox
            edge="end"
            onChange={() => markToDone(_id)}
            checked={done}
            inputProps={{'aria-labelledby': labelId}}
          />
        </ListItemAvatar>
        <ListItemText id={labelId} primary={title} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => removeTask(_id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }

  return (
    <List dense className={classes.root}>
      {tasks.map((task) => (
        <Item key={task._id} task={task} />
      ))}
    </List>
  )
}

export default ListTasks
