
// habit listing
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Card, CardContent, Typography} from "@material-ui/core";
const HabitTracker = () =>{
    const [habits, setHabits] = useState(false);
    // query from db
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

    // if not loaded yet, say so
    if (habits === false) return "Loading...."
	return (
		<div className="Home">
			<Typography variant="h5"> Habit List</Typography>
            {/* display habits or the fact that there are none in the system */}
            {habits.length === 0 ? "No habits in system" : habits.map((habit) => 
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {habit.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {habit.explanation}
                        </Typography>
                    </CardContent>
                </Card>
            )}
		</div>
	);
}

export default HabitTracker;