// Test hit endpoint

import React, { useEffect, useState } from 'react';
import {createUser} from '../APICalls';

const EndpointData = (props) => {

    const [state, setState] = useState(false);
    useEffect( () => {
        async function fetchData() {
            let resBody = await createUser();
            resBody = await resBody.json();
            setState(resBody.user._id)
        }
        fetchData();
    }, []);

	return (
		<div className="EndpointData">
			UserCreated
            <br/>
            {state}
		</div>
	);
}

export default EndpointData;