import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import { Checkbox } from 'react-input-checkbox';

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo é obrigatório!
      </div>
    );
  }
};

const validEmail = (value) => {

  if (!isEmail(value)) {
    return (
      <div className = "alert alert-danger" role = "alert">
        Este não é um e-mail válido
      </div>
    );
  }

};

const vname = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        O nome de usuário deve ter entre 3 e 20 caracteres.
      </div>
    );
  }
};

const vcpf = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          Cpf é um campo obrigatório.
        </div>
      );
    }
  };

  const vbirthdate = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
          <div className="alert alert-danger" role="alert">
            Campo obrigatório.
          </div>
        );
      }
  };

  const vzip = (value) => {
    if (value.length <3 || value.length > 20){
      return (
        <div className = "alert alert-danger" role="alert">
          Campo deve ter entre 3 e 20 caracteres.
        </div>
      );
    }
  };

  const vcountry = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          Campo obrigatório.
        </div>
      );
    }
  };

  const vstate = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
          <div className="alert alert-danger" role="alert">
            Campo obrigatório.
          </div>
        );
      }
  };

  const vcity = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
          <div className="alert alert-danger" role="alert">
            Campo obrigatório.
          </div>
        );
      }
  };

  const vdistrict = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
          <div className="alert alert-danger" role="alert">
            Campo obrigatório.
          </div>
        );
      }
  };

  const vstreet = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
          <div className="alert alert-danger" role="alert">
            Campo obrigatório.
          </div>
        );
      }
  };

  const vnumber = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
          <div className="alert alert-danger" role="alert">
            Campo obrigatório.
          </div>
        );
      }
  };

  const vcellphone = (value) => {
    if (value.length < 3 || value.length > 20 ){

      return (
        <div className = "alert alert-danger" role ="alert">
          Campo obrigatório
        </div>
      );
    }

  };

const Person = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [zip, setZip] = useState ("");
  const [country, setCountry] = useState ("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setnumber] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  
  
  const onChangename = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangecpf = (e) => {
    const cpf = e.target.value;
    setCpf(cpf);
  };

  const onChangeBirthdate = (e) => {
    const birthdate = e.target.value;
    setBirthdate(birthdate);
  };

  const onChangeZip = (e) => {
    const zip = e.target.value;
    setZip (zip);
  };

  const onChangecountry = (e) => {
    const country = e.target.value;
    setCountry(country);
  }; 
  
  const onChangestate = (e) => {
    const state = e.target.value;
    setState(state);
  };

  const onChangecity = (e) => {
    const city = e.target.value;
    setCity(city);
  };

  const onChangedistrict = (e) => {
    const district = e.target.value;
    setDistrict(district);
  };

  const onChangestreet = (e) => {
    const street = e.target.value;
    setStreet(street);
  };  

  const onChangenumber = (e) => {
    const number = e.target.value;
    setnumber(number);
  };

  const onChangecellphone = (e) => {
    const cellphone = e.target.value;
    setCellphone (cellphone);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

  };

  const handlePerson = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.person(name, cpf, birthdate,zip, country, state,
        city, district, street, number, cellphone, email).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handlePerson} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangename}
                  validations={[required, vname]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpf">Cpf</label>
                <Input
                  type="text"
                  className="form-control"
                  name="cpf"
                  value={cpf}
                  onChange={onChangecpf}
                  validations={[required, vcpf]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="birthdate">Data Aniversário</label>
                <Input
                  type="date"
                  className="form-control"
                  name="birthdate"
                  value={birthdate}
                  onChange={onChangeBirthdate}
                  validations={[required, vbirthdate]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <Input
                  type="text"
                  className="form-control"
                  name="zip"
                  value={zip}
                  onChange={onChangeZip}
                  validations={[required, vzip]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="country">País</label>
                <Input
                  type="text"
                  className="form-control"
                  name="country"
                  value={country}
                  onChange={onChangecountry}
                  validations={[required, vcountry]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">Estado</label>
                <Input
                  type="text"
                  className="form-control"
                  name="state"
                  value={state}
                  onChange={onChangestate}
                  validations={[required, vstate]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Cidade</label>
                <Input
                  type="text"
                  className="form-control"
                  name="city"
                  value={city}
                  onChange={onChangecity}
                  validations={[required, vcity]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="district">Distrito</label>
                <Input
                  type="text"
                  className="form-control"
                  name="district"
                  value={district}
                  onChange={onChangedistrict}
                  validations={[required, vdistrict]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="street">Rua</label>
                <Input
                  type="text"
                  className="form-control"
                  name="street"
                  value={street}
                  onChange={onChangestreet}
                  validations={[required, vstreet]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="number">Telefone Residencial</label>
                <Input
                  type="text"
                  className="form-control"
                  name="number"
                  value={number}
                  onChange={onChangenumber}
                  validations={[required, vnumber]}
                />
              </div>
            
              <div className="form-group">
                <label htmlFor="cellphone">Celular</label>
                <Input
                  type="text"
                  className="form-control"
                  name="cellphone"
                  value={cellphone}
                  onChange={onChangecellphone}
                  validations={[required, vcellphone]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
          
              <div className="form-group">
              <label htmlFor="favorito">Marcar Como favorito?</label>
              <Checkbox>Sim</Checkbox>          
              </div>
              
              <div className="form-group">
                <button className="btn btn-primary btn-block">Cadastrar</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Person;
