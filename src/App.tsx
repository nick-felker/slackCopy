import styled from "styled-components";
import {Route, Routes} from 'react-router-dom';
import {WelcomePage,
        AppPage,
        RegistrationPage,
        LoginPage,
        UserPage,
        NotFoundPage
  } from './';

function App() {

  return(
    <>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/registration" element={<RegistrationPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/app" element={<AppPage/>}/>
      <Route path="/" element={<WelcomePage/>}/>
      <Route path="/personal" element={<UserPage/>}/>
    </Routes>

    </>
  )
            
}

 



export default App;

