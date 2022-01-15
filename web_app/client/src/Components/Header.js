// Custom Header and menu
import React from 'react';
import { AppBar, Fade, Icon, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import HeaderLink from './HeaderLink';
import ChildModal from './Notification';

const useStyles = makeStyles((theme) => ({
	root: {
        display: "flex",
        flexDirection: "row",
		alignItems: "center",
		alignContent: "center",
        textAlign: "center",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2),
    },
	icon: {
        "&:hover": {
            cursor: "pointer",
		},
        padding: "2vw",
        color: "white",
	},
	hiddenicon: {
        padding: "2vw",
        color: theme.palette.primary.main,
	},
    item: {
        backgroundColor: "white"
    },
    logo: {
        height: "auto",
        width: "100px",
    },
}));


const Header = (props) => {

	const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
		<AppBar position="sticky" className={classes.root}>
            <Icon onClick={handleClick} className={classes.icon} variant="h4" color="primary">menu</Icon>
            {/* <Typography variant="h6">{process.env.REACT_APP_SITE_NAME}</Typography> */}
            <ChildModal />
            
            <Icon onClick={handleClick} className={classes.hiddenicon} variant="h4" color="primary">filter-variant</Icon>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}><HeaderLink path={"/" + process.env.REACT_APP_PAGES_PATH_HOME} body={process.env.REACT_APP_PAGES_TITLE_HOME} /></MenuItem>
                <MenuItem onClick={handleClose}><HeaderLink path={"/" + process.env.REACT_APP_PAGES_PATH_SIGNUP} body={process.env.REACT_APP_PAGES_TITLE_SIGNUP} /></MenuItem>
                <MenuItem onClick={handleClose}><HeaderLink path={"/" + process.env.REACT_APP_PAGES_PATH_LOGIN} body={process.env.REACT_APP_PAGES_TITLE_LOGIN} /></MenuItem>
                {/* <MenuItem onClick={handleClose}><HeaderLink path={"/" + process.env.REACT_APP_PAGES_PATH_LOGOUT} body={process.env.REACT_APP_PAGES_TITLE_LOGOUT} /></MenuItem> */}
            </Menu>
		</AppBar>
	);
}

export default Header;