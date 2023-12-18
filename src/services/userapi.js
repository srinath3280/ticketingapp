import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),
  endpoints: (builder) => ({
    authenticate: builder.query({
      query: (user) =>{
        return `?username=${user.username}&password=${user.password}`
      } ,
    }),
    getAllUsers: builder.query({
      query: ()=>{ 
        return  `/`
      }
    }),
    updateUser: builder.mutation({
      query: (values)=>{
        return {
          url: '/',
          method:'POST',
          body:values
        }
      }
    })
  }),
})

export const { useLazyAuthenticateQuery,
  useAuthenticateQuery,
  useGetAllUsersQuery,
  useLazyGetAllUsersQuery,
  useUpdateUserMutation
  } = userApi