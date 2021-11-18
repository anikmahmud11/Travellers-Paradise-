import { BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
// import AuthProvider from './context/AuthProvider';
import AddNewPackage from './pages/AddNewPackage/AddNewPackage';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Home/Nav/Navigation';
import Login from './pages/Login/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageOrder from './pages/ManageOrders/ManageOrder';
import MyOrder from './pages/MyOrders/MyOrder';
import NotFound from './pages/Notfound/NotFound';
import Payment from './pages/Payment/Payment';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="text-center">
     
      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
        <Route  exact path="/">
          <Home></Home>
          </Route>
        <Route exact  path="/home">
          <Home></Home>
          </Route>
        <Route exact  path="/login">
          <Login></Login>
          </Route>
        <Route exact  path="/payment/:bookingId">
          <Payment></Payment>
          </Route>
        <PrivateRoute exact path="/myorder">
          <MyOrder></MyOrder>
          </PrivateRoute>
        <PrivateRoute exact path="/manageorder">
          <ManageOrder></ManageOrder>
          </PrivateRoute>
        <PrivateRoute exact path="/addpackage">
          <AddNewPackage></AddNewPackage>
          </PrivateRoute>
        <PrivateRoute exact path="/placeorder/:serviceId">
          <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="*">
         <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
