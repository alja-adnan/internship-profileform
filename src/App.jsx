import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Profile from './components/Profile'

function App() {
 
  return (
   <div>
    
    <BrowserRouter>
   <Routes>
      
      <Route path='/'  element={<Profile/>}> </Route>  
    

    </Routes>
    </BrowserRouter>

   </div>
  )
}

export default App
