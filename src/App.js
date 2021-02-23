import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import ChatBar from './components/ChatBar';
import Chatbox from './components/Chatbox';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(false)
  const [current, setCurrent] = useState({})
  const openChat = (user) => {
    setState(true)
    setCurrent(user)
  }
  const closeChat = () => {
    setState(false)
  }
  return (
    <div className="App">
      <Navbar />
      <div className="facebook">
        <Sidebar />
        <Posts />
        <ChatBar openChat={openChat} />
        <Chatbox state={state} closeChat={closeChat} current={current} />

      </div>
    </div>
  );
}

export default App;
