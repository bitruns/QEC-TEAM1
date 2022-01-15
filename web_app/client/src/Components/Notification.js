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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //   Custom styling
    const classes = useStyles();

    // Behaviour on submit
    const handleClick = (goalReached) => {
        if (goalReached) {

        }
    }

    return (
    <div>
        <div onClick={handleOpen}><img src='./logo.png' className={classes.logo} /></div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                This is a reminder
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Did you make your goal?
            </Typography>
            <Button variant="outlined" color="error" onClick={() => handleClick(true)}>No</Button>
            <Button variant="outlined" color="success" onClick={() => handleClick(true)}>Yes</Button>
            </Box>
        </Modal>
        </div>
    );
}