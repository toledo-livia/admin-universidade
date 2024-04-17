import React from 'react'
import { Outlet } from 'react-router-dom'

import Topbar from '../components/Topbar'

function Portal() {
  return (
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className='container-fluid'>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Portal

