import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Authentication/Register/Register';
import Login from './Pages/Authentication/Login/Login';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Profile from './Pages/Profile/Profile/Profile';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/Profile/MakeAdmin/MakeAdmin';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import ClientApproved from './Pages/ClientApproved/ClientApproved';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/Profile'>
          <Profile></Profile>
        </PrivateRoute>
        <AdminRoute path='/MakeAdmin'>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path='/ClientApproved'>
          <ClientApproved></ClientApproved>
        </AdminRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/register'>
          <Register></Register>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
