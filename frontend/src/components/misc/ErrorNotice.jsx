import React from 'react';

function ErrorNotice (props) {
    return (
        <div className="error-notice">
            <span style={{color:'black'}}>{props.message}</span>
            <button onClick={props.clearError}>X</button>
        </div>
    );
}

export default ErrorNotice;