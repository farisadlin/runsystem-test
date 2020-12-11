import React, {useState} from "react";
import Display from './Display';

import "./Form.css";

function Form() {
  const [state, setState] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    gender: [
        "Pria",
        "Wanita"
    ],
    kebutuhan: [
        "Melamar Pekerjaan",
        "Ingin Informasi Tambahan"
    ]
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return (
      <Display
        name={state.name}
        contact={state.contact}
        email={state.email}
        password={state.password}
        gender={state.gender}
        kebutuhan={state.kebutuhan}
      />
    );
    console.log(state);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Form yang harus diisi untuk kebutuhan data pribadi</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Nama: </label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label>Nomor Kontak: </label>
            <input
              type="text"
              name="contact"
              value={state.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <label>Jenis Kelamin: </label>
            <input
              type="radio"
              name="gender"
              value={state.gender[0]}
              onChange={handleInputChange}
            />{" "}
            {state.gender[0]}
            <input
              type="radio"
              name="gender"
              value={state.gender[1]}
              onChange={handleInputChange}
            />{" "}
            {state.gender[1]}
          </div>
          <div className="form-control">
            <label>Kebutuhan Pengisian: </label>
            <br />
            <input
              type="checkbox"
              name="kebutuhan"
              value={state.kebutuhan[0]}
              onChange={handleInputChange}
            />
            {state.kebutuhan[0]}
            <input
              type="checkbox"
              name="kebutuhan"
              value={state.kebutuhan[1]}
              onChange={handleInputChange}
            />
            {state.kebutuhan[1]}
          </div>
          <div className="form-control">
            <label></label>
            <button type="submit">Submit</button>
          </div>
        </form>
        <Display />
      </div>
    </div>
  );
}

export default Form;
