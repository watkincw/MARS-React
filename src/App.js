import './App.css';
// import Demo from './components/Demo.js';
// import StyledDemo from './components/StyledDemo';
import EffectHook from './components/EffectHook';
import EffectNew from './components/EffectNew';
import { ToDoComponent } from './components/ToDoComponent';
import MyFuncComponent from './components/MyFuncComponent';
import CommonStyles from './components/CommonStyles';
import Component1 from './components/Component1';
import UseRefDemo from './components/UseRefDemo';

function App() {
	return (
		<div className="App">
			<h1>Hello world from React!</h1>
			<UseRefDemo />
			{/* <Component1 />
			<CommonStyles />
			<EffectHook />
			<EffectNew />
			<ToDoComponent value="James" />
			<MyFuncComponent name="Mike" age={34} /> */}
		</div>
	);
}

export default App;
