import './App.css';
import GroupHead from './components/GroupHead/GroupHead';
import Navbar from './components/Navbar/Navbar';
import PostMenu from './components/PostMenu/PostMenu';
import Location from './components/Posts/Location/Location';
import PostCard from './components/Posts/PostCard/PostCard';



function App() {
  return (
  <>
    <Navbar/>
    <GroupHead/>
    <PostMenu/>
  </>
  );
}

export default App;
