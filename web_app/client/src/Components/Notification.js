/**
 * Popup Modal page from template
 * Please see note in README for more information on commenting
 * Source Code can be found here:
 * https://mui.com/components/modal/
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from "@material-ui/core/styles";

// logo styling
const useStyles = makeStyles((theme) => ({
    logo: {
        height: "auto",
        width: "100px",
    },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    width: "80%"
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const [response, setResponse] = React.useState(false);
    const handleOpen = () => {
        setResponse(false);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    //   Custom styling
    const classes = useStyles();

    // Behaviour on submit
    const handleClick = (goalReached) => {
        setResponse(goalReached ? "Greatt!": "You can do it next time!");
        fetch("/api/habitSuccess", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: localStorage.getItem('credentials'),
                habitId_sleeping: 0,
                success: goalReached,
            }),
        }).then(res => res.json()).then((res) => setResponse(res));
    }

    return (
    <div>
        {/* clickable button */}
        <div onClick={handleOpen}><img alt="Habits" src='./logo.png' className={classes.logo} /></div>
        {/* Popup */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {response || <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    This is a reminder
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Did you make your goal?
                </Typography>
                <Button color="error" onClick={() => handleClick(true)}>No</Button>
                <Button color="success" onClick={() => handleClick(false)}>Yes</Button>
                </>}
            </Box>
        </Modal>
        </div>
    );
}