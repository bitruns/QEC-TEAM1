/**
 * This page allows users to choose or create ah abit ot get started!
 */
/**
 * Request existing Habits (GET)
 * type in to search
 * Select one or if none, create
 * selecting one means object returned looks like
 * [{habit details}, habit_id]
 * Give score b/t 1-10; send back as 0-1 (divide by 10)
 * send; don't expect response
 */
// send list to BE 
// name;score;suggestion; time

import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  instructions: {
    // marginBottom: 8,
    paddingBottom: 8,
  },
}));

const Habits = (props) => {

  const [habits, setHabits] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [typedValue, setTypedValue] = useState("");
  const [score, setScore] = useState(8);
  const [reminder, setReminder] = useState("00:00");
  const [newHabitExplanation, setNewHabitExplanation] = useState("");
  const classes = useStyles();

  useEffect(() => {
    async function getHabits() {
        const res = await fetch('/api/habit', {
            method: 'GET',
        });
        const resBody = await res.json();
        setHabits(resBody.habits);
    }
    getHabits();
  }, []);

  // Handler for submitting form
  const handleSubmit = () => {
    let toReturn = {};
    // Data parsing
    // extracting date from reminder
    const reminderDate = new Date (null,null,null,reminder.substring(0,2), reminder.substring(3,5))
    // if existing habit
    if (selectedValue !== false) {
      toReturn = {
        ref: selectedValue,
        reminder: reminderDate,
        score
      }
      // if new habit
    } else {
      toReturn = {
        habit: {
          name: typedValue,
          explanation: newHabitExplanation,
        },
        reminder: reminderDate,
        score
      }
    }
    console.log(toReturn)
    // TODO: HIT API with toReturn
  }

  // Outputs loading while waiting on backend
  if (!habits) return "Loading ....";

  return (
    <Box spacing={2}>
      <Box>
        {/* page title */}
        <Typography variant="h5">What Habit do you want to Improve</Typography>
      </Box>
        <br/>
        <br/>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography variant="body1" className={classes.instructions}>Choose a habit you want to improve on from the list. If it's not there, type it in and create one!</Typography>
          <Autocomplete
            renderInput={(params) => <TextField {...params} label="Choose or Create a Habit!" />}
            options={habits}
            onChange={(event) => {
              setSelectedValue(event.target.value)
              setTypedValue(false);
            }}
            onInputChange={(event) => {
              setTypedValue(event.target.value);
              setSelectedValue(false);
            }}
            />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography variant="body1" className={classes.instructions}>What is this habit? Explain it in a few words. Leave this empty if you chose an existing habit.</Typography>
          <TextField label="Habit Explanation" onChange={(event) => setNewHabitExplanation(event.target.value)}/>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography variant="body1" className={classes.instructions}>Give yourself a score out of 10</Typography>
          <TextField label="Score" onChange={(val) => setScore(val)}/>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography variant="body1" className={classes.instructions}>When do you want to be reminded about this?</Typography>
          
          <TextField
          id="time"
          label="Select Time"
          type="time"
          defaultValue={reminder}
          value={reminder}
          onChange={(event) => setReminder(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <br/>
      <Button color="primary" variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  )

}

export default Habits;