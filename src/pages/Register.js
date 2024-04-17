import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserCreate() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const myFormik = useFormik(
    {
      initialValues: {
        username: "",
        email: "",
        city: "",
        state: "",
        country: ""
      },
      validate: (values) => {
        let errors = {}

        if (!values.username) {
          errors.username = "Preencha o nome do aluno!";
        } else if (values.username.length < 3) {
          errors.username = "O nome deve ter pelo menos 3 letras!";
        }

        if (!values.email) {
          errors.email = "Preencha o e-mail!";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Endereço de e-mail inválido';
        }

        if (!values.city) {
          errors.city = "Selecione uma cidade!";
        }

        if (!values.state) {
          errors.state = "Selecione um estado!";
        }

        if (!values.country) {
          errors.country = "Selecione um país!";
        }

        return errors;
      },
      onSubmit: async () => {
          setLoading(true);
          alert('Aluno cadastrado com sucesso!')
          navigate("/portal/alunos");
      }

    });
  return (
    <div className='container'>

      <form onSubmit={myFormik.handleSubmit}>
        <div className='row'>
          <div className="col-lg-6">
            <label>Nome do Aluno</label>
            <input name='username' value={myFormik.values.username} onChange={myFormik.handleChange} type={"text"}
              className={`form-control ${myFormik.errors.username ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.username}</span>
          </div>

          <div className="col-lg-6">
            <label>E-mail</label>
            <input name='email' value={myFormik.values.email} onChange={myFormik.handleChange} type={"mail"}
              className={`form-control ${myFormik.errors.email ? "is-invalid" : ""} `} />
            <span style={{ color: "red" }}>{myFormik.errors.email}</span>
          </div>

          <div className='col-lg-4'>
            <label>Cidade</label>
            <select name='city' value={myFormik.values.city} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.city ? "is-invalid" : ""} `} >
              <option value="">Selecione</option>
              <option value="Caçapava">Caçapava</option>
              <option value="São José dos Campos">São José dos Campos</option>
              <option value="Jacareí">Jacareí</option>
              <option value="Taubaté">Taubaté</option>
              <option value="Campos do Jordão"></option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.city}</span>
          </div>

          <div className='col-lg-4'>
            <label>Estado</label>
            <select name='state' value={myFormik.values.state} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.state ? "is-invalid" : ""} `} >
              <option value="">Selecione</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="SC">Santa Catarina</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.state}</span>
          </div>
          <div className='col-lg-4'>
            <label>País</label>
            <select name='country' value={myFormik.values.country} onChange={myFormik.handleChange}
              className={`form-control ${myFormik.errors.country ? "is-invalid" : ""} `} >
              <option value="">Selecione</option>
              <option value="USA">Estados Unidos</option>
              <option value="BR">Brasil</option>
            </select>
            <span style={{ color: "red" }}>{myFormik.errors.country}</span>
          </div>
          <div className='col-lg-4 mt-3'>
            <input disabled={isLoading} type="submit" value={isLoading ? "Enviando" : "Criar"} className=' btn btn-primary' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserCreate