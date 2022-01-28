import React, {Component} from 'react';

function Boll(props) {
    return(
        <div className={'radius'}>
            <h2>{props.headline}</h2>
            <p>{props.descrip}</p>
        </div>
    )
}
export default Boll;