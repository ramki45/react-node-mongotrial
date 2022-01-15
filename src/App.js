import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserList from './UserList';
import EditUser from './EditUser';
import CreateUser from './CreateUser';
function App() {
  return (
  
      <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/edit/:id' element={<EditUser/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  
  );
}

export default App;