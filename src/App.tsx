import styled from "styled-components";
import {Navigate, Route, Routes} from 'react-router-dom';
import {WelcomePage,
        AppPage,
        RegistrationPage,
        LoginPage,
        UserPage,
        NotFoundPage,
        useAppSelector, 
        selectUserData,
  } from './';

function App() {
  const userData = useAppSelector(selectUserData);

  return(
    <>
    <Routes>
      
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/registration" element={<RegistrationPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      <Route 
        path="/app" 
        element={userData.authFlag === true ? <AppPage/> : <Navigate to={"/"} replace/> }
      />
      <Route 
        path="/" 
        element={userData.authFlag === true ? <Navigate to={"/app"} replace/> : <WelcomePage/>}
      />
      <Route 
        path="/personal"
        element={userData.authFlag === true ? <UserPage/> : <Navigate  to={"/"} replace/>}
      />
    </Routes>

    </>
  )
            
}

 



export default App;

