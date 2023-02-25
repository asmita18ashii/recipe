import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {CreateArecipe} from './modules/createArecipe.js'
import {Login} from './modules/loginpage'
import { Signup } from './modules/signupPage'
import { Landing } from './modules/landingpage'
export const App=()=>{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/landing'} element={<Landing/>}/>
          <Route path={'/addnewrecipe'} element={<CreateArecipe/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/signup'} element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}