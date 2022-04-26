import './App.css';
import GroupHead from './components/GroupHead/GroupHead';
import Navbar from './components/Navbar/Navbar';
import PostMenu from './components/PostMenu/PostMenu';
import Post from './components/Posts/Post/Post';



function App() {
  return (
  <>
    <Navbar/>
    <GroupHead/>
    <PostMenu/>
    <Post/>
  </>
  );
}

export default App;
