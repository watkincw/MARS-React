import React from 'react';

function ChildComponent(props) {
    const data = 'This data is being passed from child to parent.';
    return (
        <div>
            <button onClick={() => props.toParent(data)}>From Child!</button>            
        </div>
    );
}

export default ChildComponent;