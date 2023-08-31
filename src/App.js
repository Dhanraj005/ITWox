import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './componants/Details';
import Error from './componants/Error';
import Home from './componants/Home';
import Login from './componants/Login';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from './componants/Hrader';
import GetUser from './componants/GetUser';
import GetComment from './componants/GetComment';
import PostUser from './componants/PostUser';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path='/get' element={<GetUser/>}/>
        {/* <Route path='/comment' element={<GetComment/>}/> */}
        <Route path='/post' element={<PostUser/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
