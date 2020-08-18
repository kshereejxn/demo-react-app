import React from 'react';
import { useParams } from 'react-router-dom';

function Child(){
    let {name} = useParams();

    return(
        <div>
            Welcome {name}

        </div>
    )

}

export default Child;