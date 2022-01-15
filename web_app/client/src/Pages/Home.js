import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from "@material-ui/core";
const Home = (props) =>{
    const history = useHistory();

    const changePage = (path) => {
        history.push({
            pathname: path
        })
    }

	return (
		<div className="Home">
			Home
            <br/>
            <Button 
                color="primary" 
                onClick={()=>{changePage("/" + process.env.REACT_APP_PAGES_PATH_PAGENOTFOUND)}}
            >
                {process.env.REACT_APP_PAGES_TITLE_PAGENOTFOUND}
            </Button>
            <br/>
            <Button 
                color="primary" 
                onClick={()=>{changePage("/EndpointData")}}
            >
            test hit API
            </Button>
		</div>
	);
}

export default Home;