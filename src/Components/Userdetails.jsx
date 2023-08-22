import React from 'react'
import Deletall from './Deletall';
import apidata from '../API/fatrchdata';
import { addusers } from '../Store/slice/userslice';
import { useDispatch,  } from 'react-redux';
import Listcompo from './listcompo';
const Userdetails = () => {

 
    const Dispacth = useDispatch()



    const adduserdata = (data) =>{
        
        Dispacth(addusers(data))
        
    }


    // const data = useSelector((state =>{
    //     return state.user;
    // }))
    // console.log(data)

  return (
    <div>
        <div className=''>
            <div className=' text-center mt-5'>
                <h3 className=''>List Of Users</h3>
                <button onClick={()=>adduserdata(apidata())} className='btn btn-outline-primary m-auto'>Add User</button>
            
            </div>
            <div className='text-center ' >
            <ul style={{marginTop:"2rem"}}   >
            <Listcompo/>
                

            </ul>

            </div>
            <Deletall/>
            

        </div>
      
    </div>
  )
}

export default Userdetails;
