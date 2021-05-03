import React, {useState} from 'react'
import {Button, Grid, TextField} from '@material-ui/core'

const TaskForm = ({autoFocus = false, defaultValue = '', onSubmit = null}) => {
  const [inputText, setInputText] = useState(defaultValue)

  const onChange = (event) => setInputText(event.target.value)

  const handleOnSubmit = (event) => {
    event.preventDefault()
    !!onSubmit && onSubmit(inputText)
    setInputText('')
    event.target.reset()
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item>
          <TextField
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            id="task"
            label="Task"
            name="task"
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button color="primary" type="submit" variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default TaskForm
