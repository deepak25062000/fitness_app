import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/signup'
import Signin from './components/signin'
import Dashboard from './components/dashboard';
import Profile from './components/profile';
import Protect from './components/protect';


function App() {
  return (
   <BrowserRouter>
    <div className="App">      
      <Routes>

        <Route path="/" element={<Signup/>}/>

        <Route path="/signin" element={<Signin/>}/>

        <Route path="/home" element={ <Protect child={<Dashboard/>}/> }/>

        <Route path="/profile" element={ <Protect child={<Profile/>}/> }/>

      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;