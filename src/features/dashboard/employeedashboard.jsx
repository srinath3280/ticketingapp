import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EmployeeDashboard() {
  var x = useParams();
  console.log(x)
  var [listTickets,setListTickets] = useState();
  useEffect(()=>{
    axios.get('http://localhost:4000/tickets').then((res)=>{
      return (setListTickets(res.data))
    })
  },[])
  console.log(listTickets)
  return (
    <div>
        <h1>EmployeeDashboard</h1>
        {
          listTickets && listTickets.map((listticket)=>{
            if(listticket.employeeId === x.id){
              return (
                <li>{listticket.issue}</li>
              )
            }
          })
        }
    </div>
  )
}

export default EmployeeDashboard