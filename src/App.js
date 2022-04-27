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
    <GroupHead/>
    <PostMenu joined={joined} setJoin={setjoined}/>
    <Post/>
  </>
  );
}

export default App;
