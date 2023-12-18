import React from 'react'
import ManagerDashboard from './managerdashboard'
import EmployeeDashboard from './employeedashboard'
import CustomerDashboard from './customerdashboard'

function Dashboard() {
    var {role} = JSON.parse(window.localStorage.getItem("user"))[0]
  return (
    <div className='dashboard'>
        {
            role==='manager' && <ManagerDashboard></ManagerDashboard>
        }
        {
            role==='employee' && <EmployeeDashboard></EmployeeDashboard>
        }
        {
            role==='customer' && <CustomerDashboard></CustomerDashboard>
        }
    </div>
  )
}

export default Dashboard