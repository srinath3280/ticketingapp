import { useFormik } from 'formik'
import React from 'react'
import { useAddTicketMutation, useLazyListTicketsQuery } from '../../services/ticketapi';
import { useNavigate, useParams } from 'react-router-dom';

function AddTicket() {
    var x = useParams();
    var [addTktFn]=useAddTicketMutation();
    var [fn] = useLazyListTicketsQuery();
    var navigate = useNavigate();
    var ticketForm = useFormik({
        initialValues:{
            issue:"",
            productName:'',
            image:"",
            date:Date.now(),
            customerId:JSON.parse(window.localStorage.getItem('user'))[0].id
        },
        onSubmit:(values)=>{
            addTktFn(values)
            .then((res)=>{
                alert(JSON.stringify(res))
                navigate(`/dashboard/${x.id}/listTickets`)
            })
            .catch((err)=>{
                alert(JSON.stringify(err))
            })
            fn();
        }
    });
    return (
        <div className='addticket'>
            <h1>AddTicket</h1>
            <form onSubmit={ticketForm.handleSubmit}>
                Issue:<textarea name="issue" onChange={ticketForm.handleChange}></textarea><br></br>
                Product Name:<input type="text" name="productName" onChange={ticketForm.handleChange}></input>
                <br />
                <button>Raise Ticket</button>
            </form>
        </div>
    )
}

export default AddTicket