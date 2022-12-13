import React from "react";
import { Switch, Route } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyGalleries from "./pages/MyGallery";
import UserGalleries from "./pages/UserGalleries";
import PrivateRoute from "./components/PrivateRoute";
import ViewGallery from "./components/ViewGallery";


const Routes = () => {
  return (
    <>
      <Switch>
      <Route exact path='/'>
            <HomePage />
          </Route>
          <PublicRoute path='/login'>
            <LoginPage />
          </PublicRoute>
          <PublicRoute path='/register'>
            <RegisterPage />
          </PublicRoute>
          <PrivateRoute exact path='/my-galleries/'>
            <MyGalleries />
          </PrivateRoute>
          <Route exact path='/authors/:id'>
            <UserGalleries />
          </Route>
          <Route exact path='/galleries/:id'>
            <ViewGallery />
          </Route>
      </Switch>
    </>
  );
};

export default Routes;