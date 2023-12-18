import React from 'react'

import { Outlet,Link, useNavigate } from 'react-router-dom'

function CustomerDashboard() {
    var navigate = useNavigate();
  return (
    <div className='customerdashboard'>
        <h1>CustomerDashboard</h1>
        <Link to="listTickets">List of Tickets</Link>&nbsp;&nbsp;
        <button onClick={()=>{navigate("addTicket")}}>Raise Ticket</button>
        <Outlet></Outlet>
    </div>
  )
}

export default CustomerDashboard