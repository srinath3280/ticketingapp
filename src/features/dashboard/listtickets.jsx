import React from 'react'
import { useListTicketsQuery } from '../../services/ticketapi'
import { useParams } from 'react-router-dom'

function ListTickets() {
    var x = useParams();
    var {isLoading,data}=useListTicketsQuery()
  return (
    <div>
        <h1>ListTickets</h1>
        {
            isLoading && (<h2 id='loading'>Loading....</h2>)
        }
        {
            !isLoading && (
                <ul>
                    {
                        data.map((ticket)=>{
                            if((ticket.customerId) == parseInt(x.id)){
                                return <li>{ticket.issue}</li>
                            }
                        })
                    }
                </ul> 
            )
        }
    </div>
  )
}

export default ListTickets