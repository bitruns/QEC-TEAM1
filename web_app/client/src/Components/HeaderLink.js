/**
 * A link for navigation
 */
import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
		paddingLeft: "2em",
        paddingRight: "2em",
        color: "black",
    },
	inactive: {
		textDecoration: 'unset',
	},
	active: {
        textDecoration:"underline",
	},
}));

const HeaderLink = (props) => {

    const classes = useStyles();

    const {body, path, title} = props;

    return (
        <NavLink to={path} className={classes.root + " " + classes.inactive} activeClassName={classes.active}>
            <Typography variant={title ? "h4" : "h6"}>{body}</Typography>
        </NavLink>
    );

}

export default HeaderLink;