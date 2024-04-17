import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Loader from '../assets/images/loading.gif'

function Userlist() {

  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      const users = await axios.get("https://randomuser.me/api/?results=50");
      setUserList(users.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Você tem certeza que deseja excluir o usuário?");
      if (confirmDelete) {
        alert('Usuário excluído!')
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Relação de Alunos</h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Cadastrar Aluno
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Alunos</h6>
        </div>
        <div className="card-body">
          {
            isLoading ? 
              <img src={Loader} width="100%" height="100%" alt="carregando" />
              : <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Cidade</th>
                      <th>Estado</th>
                      <th>País</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Cidade</th>
                      <th>Estado</th>
                      <th>País</th>
                      <th>Ação</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {userList.map((user) => {
                      return (
                        <tr>
                          <td>{user.name.first} {user.name.last}</td>
                          <td>{user.email}</td>
                          <td>{user.location.city}</td>
                          <td>{user.location.state}</td>
                          <td>{user.location.country}</td>
                          <th>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-danger btn-sm mr-1'>Excluir</button>
                          </th>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
          }

        </div>
      </div>
    </>
  )
}

export default Userlist