import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './App';
import { ToDoComponent } from './components/ToDoComponent';
import MyFuncComponent from './components/MyFuncComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<MyApp />
		<ToDoComponent value="James" />
		<MyFuncComponent name="Mike" age={34} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
