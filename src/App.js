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
// import Form from './components/SimpleForm/Form';
// import DynamicContent from './components/DynamicContent/DynamicContent';
// import NumberList from './components/DynamicContent/NumberList';

// react-router-dom
import Home from './components/Navigation/Home';
import About from './components/Navigation/About';
import Profile from './components/Navigation/Profile';
import Error from './components/Navigation/Error';
import Redirect from './components/Navigation/Redirect';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';


function App() {
	// // for use with 'Child1' and 'Child2' components
	// const [selectedMessage, setMessage] = useState('');

	// // for user with 'DynamicContent' component
	// const [user, changeUser] = useState('userA');

	// // for use with the 'NumbersList' component
	// const numbers = [1, 2, 3, 4, 5];
	
	
	return (
		<div className="App">
			<h1>Hello world from React!</h1>

			{/* react-router-dom */}
			<Router>
				<nav>
					<ul>
						<Link to='/'>Home Page</Link><br />
						<Link to='/about'>About Us</Link><br />
						<Link to='/profile'>Profile</Link>
					</ul>
				</nav>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/profile' element={<Profile />} />
					{/* if targeted route does not exist, show 'Error' component */}
					<Route path='*' element={<Error />} />
				</Routes>
				<Redirect />
			</Router>

			{/* NumbersList component */}
			{/* <NumberList numbers={numbers} /> */}

			{/* DynamicContent component */}
			{/* <DynamicContent user={user} />
			<button onClick={() => changeUser('userA')}>Switch to user A</button>
			<br />
			<button onClick={() => changeUser('userB')}>Switch to user B</button> */}

			{/* <Form /> */}
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
