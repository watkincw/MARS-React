import './App.css';
import { useState } from 'react';
// import Demo from './components/Demo.js';
// import StyledDemo from './components/StyledDemo';
// import EffectHook from './components/EffectHook';
// import EffectNew from './components/EffectNew';
// import { ToDoComponent } from './components/ToDoComponent';
// import MyFuncComponent from './components/MyFuncComponent';
// import CommonStyles from './components/CommonStyles';
// import Component1 from './components/Component1';
// import UseRefDemo from './components/UseRefDemo';
// import FirstComponent from './components/customHooks/FirstComponent';
// import ParentToChild from './components/passingDataToChildAndParents/ParentToChild';
// import Child1 from './components/passingDataToChildAndParents/Child1';
// import Child2 from './components/passingDataToChildAndParents/Child2';
// import TwoWayBind from './components/PassingDataBetweenComponents/TwoWayBind';
import Form from './components/SimpleForm/Form';

function App() {
	// // for use with 'Child1' and 'Child2' components
	// const [selectedMessage, setMessage] = useState('');
	return (
		<div className="App">
			<h1>Hello world from React!</h1>
			<Form />
			{/* <TwoWayBind /> */}
			{/* <Child2 selectedMessage={selectedMessage} /> */}
			{/* <Child1 setMessage = {setMessage} /> */}
			{/* <ParentToChild /> */}
			{/* <FirstComponent /> */}
			{/* <UseRefDemo /> */}
			{/* <Component1 /> */}
			{/* <CommonStyles /> */}
			{/* <EffectHook /> */}
			{/* <EffectNew /> */}
			{/* <ToDoComponent value="James" /> */}
			{/* <MyFuncComponent name="Mike" age={34} /> */}
		</div>
	);
}

export default App;
