import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Loginscreen from "./Loginscreen";
import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";
import Menu from "../components/Menu";


export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;



  useEffect((e) => {
    if (!currentUser.isAdmin) {
      window.location.href = "/login";
      e.preventdefault();
    }
  }, []);




  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={'/admin/userslist'} style={{color: 'white'}}>Users List</Link>
            </li>
            <li>
            <Link to={'/admin/pizzaslist'} style={{color: 'white'}}>Procedure List</Link>
            </li>
            <li>
            <Link to={'/admin/addpizza'} style={{color: 'white'}}>Add Procedure</Link>
            </li>
            {/* <li>
            <Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link>
            </li> */}

            {/* <li>
            <Link to={'/admin/AddMenu'} style={{color: 'white'}}>Add menu</Link>
            </li> */}
            
          </ul>
          
          
          

          <Switch>
          <Route path="/admin" component={Userslist} exact/>
              <Route path="/admin/userslist" component={Userslist} exact/>
              <Route path="/admin/orderslist" component={Orderslist} exact/>
          
              <Route path="/admin/pizzaslist" component={Pizzaslist} exact/>
              <Route path="/admin/AddMenu" component={Menu} exact />
              <Route path="/admin/addpizza" component={Addpizza} exact/>
              <Route path="/admin/addpizza" component={Addpizza} exact/>
      
              <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact/>
              
          </Switch>
        </div>
      </div>
    </div>
  );
}
