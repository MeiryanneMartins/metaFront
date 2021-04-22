import React from "react";
import { Link, Switch, Route, } from "react-router-dom";
import Address from "./Address";
import Person from "./Person";


const Profile = () => {
  

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>ADMINISTRADOR</strong> 
        </h3>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
            <li className="nav-item">
              <Link to={"/pessoas"} className="nav-link">
                Cadastrar Pessoa
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/address"} className="nav-link">
                Cadastrar Endereço
              </Link>
            </li>

            <div className="container mt-3">
        <Switch>  
          <Route exact path="/pessoas" component={Person} />
          <Route exact path = "/address" component = {Address} />    
        </Switch>
      </div>
      </header>

      
    
    </div>
  );
};

export default Profile;