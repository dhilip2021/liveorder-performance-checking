import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import AnimationLoader from '../webview/components/SiteLoader/AnimationLoader';

const LandingPageContainer = lazy(() => import('../webview/components/landing/LandingPageContainer'));
const LoginPageContainer = lazy(() => import('../webview/components/login/LoginPageContainer'));
/**
* @author
* @function WebRouter
**/

const WebRouter = (props) => {
  return(
    <Routes> 
    <Route path="/" element={ <Suspense fallback={<div>Loading...</div>}> <LandingPageContainer  />  </Suspense> } />
    <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LoginPageContainer  /></Suspense>  } />
    </Routes>
   )
 }

 export default WebRouter;