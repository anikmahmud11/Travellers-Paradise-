import { BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import './App.css';
import AddNewPackage from './pages/AddNewPackage/AddNewPackage';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Navigation from './pages/Home/Nav/Navigation';
import ManageOrder from './pages/ManageOrders/ManageOrder';
import MyOrder from './pages/MyOrders/MyOrder';
import NotFound from './pages/Notfound/NotFound';

function App() {
  return (
    <div className="text-center">
      <Router>
        <Navigation></Navigation>
        <Switch>
        <Route  exact path="/">
          <Home></Home>
          </Route>
        <Route exact  path="/home">
          <Home></Home>
          </Route>
        <Route exact path="/myorder">
          <MyOrder></MyOrder>
          </Route>
        <Route exact path="/manageorder">
          <ManageOrder></ManageOrder>
          </Route>
        <Route exact path="/addpackage">
          <AddNewPackage></AddNewPackage>
          </Route>
          <Route exact path="*">
         <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
