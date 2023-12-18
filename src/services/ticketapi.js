import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/tickets' }),
  endpoints: (builder) => ({
    addTicket: builder.mutation({
      query: (ticket) =>{
        return {
            method:"POST",
            body:ticket
        }
      },
    }),
    updateTicket: builder.mutation({
      query: (ticket) =>{
        return {
            url:`/${ticket.id}`,
            method:"PUT",
            body:ticket
        }
      },
    }),
    listTickets:builder.query({
        query:()=>{
            return `/`
        }
    })
  }),
})

export const { useAddTicketMutation,useListTicketsQuery,useUpdateTicketMutation,useLazyListTicketsQuery } = ticketApi;