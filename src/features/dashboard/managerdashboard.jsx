import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useListTicketsQuery, useUpdateTicketMutation } from '../../services/ticketapi';

function ManagerDashboard() {
  var {isLoading,data} = useListTicketsQuery();
  var [employeedata,setEmployeedata] = useState([]);
  var [selectedEmployeeId,setSelectedEmployeeId] = useState(null);
  // var [btn,setBtn] = useState([]);
  // console.log(btn)
  var [updatedTicketFn] = useUpdateTicketMutation();
  // var [changeButton,setChangeButton] = useState(true);
  var index;

  useEffect(()=>{
    axios.get('http://localhost:4000/users').then((res)=>{
      return (setEmployeedata(res.data))
    })
  },[data])
  // console.log(employeedata)
  function assignTicketToEmployee(emply,i){
    var updatedTicket = {...emply,employeeId:selectedEmployeeId};
    index = i;
    // setBtn(updatedTicket);
    updatedTicketFn(updatedTicket).then(()=>{alert('Ticket assigned successfully.')});
  }
  console.log("index:",index)
  return (
    <div className='managerdashboard'>
        <h1>ManagerDashboard</h1>
        {
          isLoading && <h3>Loading....</h3>
        }
        {/* <h2>List of all tickets</h2> */}
        {
          !isLoading && (
            <div>
              <h2>List of all tickets</h2>
              <table>
                <thead>
                  <th>Issue</th>
                  <th>Select Employee</th>
                  <th>Action</th>
                </thead>
                <tbody>
                    {
                        data.map((ticket,i)=>{
                          return (
                            <tr>
                              <td>
                                {ticket.issue}
                              </td>
                              <td>
                                <select onChange={(e)=>{setSelectedEmployeeId(e.target.value)}}>
                                  <option value="" selected disabled>select employee</option>
                                  {
                                    employeedata.map((emp)=>{
                                        if(emp.role==="employee"){
                                          return <option value={emp.id} selected={+ticket.employeeId === emp.id}>{emp.username}</option>
                                        }
                                    })
                                  }
                                </select>
                              </td>
                              <td>
                                <button id='button' onClick={()=>{assignTicketToEmployee(ticket,i)}}>Assign</button>
                                {/* {
                                  !isLoading && data.map((a,i)=>{
                                    console.log(i)
                                    if(a.employeeId){
                                      if(index === i){
                                        return "Assigned"
                                      }
                                    }
                                    else{
                                      <button id='button' onClick={(ticket,i)=>{assignTicketToEmployee(ticket,i)}}>Assign</button>
                                    }
                                  })
                                } */}
                                {/* {
                                  btn.employeeId?
                                  "Assigned":
                                  <button id='button' onClick={()=>{assignTicketToEmployee(ticket)}}>Assign</button>
                                } */}
                                {/* {
                                  !isLoading && data.map((a)=>{
                                    return (a.employeeId?
                                      "Assigned":
                                      <button id='button' onClick={()=>{assignTicketToEmployee(ticket,i)}}>Assign</button>)
                                  })
                                } */}
                              </td>
                            </tr>
                          )
                        })
                    }
                </tbody>
              </table> 
            </div>
          )
        }
    </div>
  )
}

export default ManagerDashboard