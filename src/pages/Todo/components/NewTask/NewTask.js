import React, {useState} from 'react'
import {Button, Grid, TextField} from '@material-ui/core'

const NewTask = ({createTask}) => {
  const [newTask, setNewTask] = useState('')

  const onChange = (event) => setNewTask(event.target.value)

  const onSubmit = (event) => {
    event.preventDefault()
    !!createTask && createTask(newTask)
    setNewTask('')
    event.target.reset()
  }

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item>
          <TextField autoFocus id="task" label="Task" name="task" variant="outlined" onChange={onChange} />
        </Grid>
        <Grid item>
          <Button color="primary" type="submit" variant="contained">
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default NewTask
