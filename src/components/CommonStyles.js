import React from 'react';
import { styles } from './style.js';

function CommonStyles() {
    return (
        <div>
            <div style={styles.ToDoComponent}></div>
            <div style={styles.Header}>ToDo</div>
        </div>
    );
}

export default CommonStyles;