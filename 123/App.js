import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = () => {
	return (
	<div className='App-wrapper'>
		<Header />
		<Navbar />
		<div className="App-wrapper-content">
			<Profile />
			{/* <Dialogs /> */}
		</div>
	</div>);
}

export default App;
