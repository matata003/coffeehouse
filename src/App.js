
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AddProduct from './Components/AddProduct';
import GetProduct from './Components/GetProduct';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <Router>
      <div className='APP'></div>
      <Routes>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path ="/AddProduct" element ={<AddProduct/>}></Route>
      <Route path ="/" element ={<GetProduct/>}></Route>
      <Route path="/Product" element = {<SingleProduct/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
