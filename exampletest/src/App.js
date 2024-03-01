
import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './components/pages/home/home';
import PostPage from './components/pages/postPage/postPage';
import CreateAccount from './components/pages/createAccount/createAcount';
import Login from './components/pages/login/login';
import Settings from './components/pages/settings/settings';
import WritePost from './components/pages/writePost/writePost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const currentuser = false;
  console.log(currentuser)
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route path='/posts' element={<Home />}></Route>
        <Route path='/createAccount' element={currentuser ? <Home /> : <CreateAccount />}></Route>
        <Route path='/login' element={currentuser ? <Home /> : <Login />}></Route>
        <Route path='/post/:id' element={<PostPage />}></Route>
        <Route path='/write' element={currentuser ? <WritePost /> : <Home />}></Route>
        <Route path='/settings' element={currentuser ? <Settings /> : <Settings />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
