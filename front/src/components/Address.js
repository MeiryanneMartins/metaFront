import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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

const vzip = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
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
const Address = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [number, setnumber] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangezip = (e) => {
    const zip = e.target.value;
    setZip(zip);
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

  const handleAddress = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.address(zip, country, state, city, district, street, number).then(
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

        <Form onSubmit={handleAddress} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <Input
                  type="text"
                  className="form-control"
                  name="zip"
                  value={zip}
                  onChange={onChangezip}
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

export default Address;
