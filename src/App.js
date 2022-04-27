import { useState } from 'react';
import './App.css';
import GroupHead from './components/GroupHead/GroupHead';
import Navbar from './components/Navbar/Navbar';
import PostMenu from './components/PostMenu/PostMenu';
import Post from './components/Posts/Post/Post';



function App() {
  const [joined,setjoined] = useState(false)
  return (
  <>
    <Navbar/>
    <GroupHead joined={joined} setJoin={setjoined}/>
    <PostMenu joined={joined} setJoin={setjoined}/>
    <Post joined={joined}/>
  </>
  );
}

export default App;
