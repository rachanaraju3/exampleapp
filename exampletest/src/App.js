
import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/pages/home/home';
import PostPage from './components/pages/postPage/postPage';
import CreateAccount from './components/pages/createAccount/createAcount';
import Login from './components/pages/login/login';
import Settings from './components/pages/settings/settings';
import WritePost from './components/pages/writePost/writePost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WritePost/>

    </div>
  );
}

export default App;
