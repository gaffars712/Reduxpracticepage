import React from 'react';
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteuser} from '../Store/slice/userslice'

const Listcompo = () => {
    const dispach =  useDispatch()
    const Data = useSelector((state)=>{
        return(state.user)
    })
    console.log(Data)
    const deletesingle = (id) =>{
        dispach(deleteuser(id))
    }
  return (
    <>
    {Data.map((element , id)=>{
        return(
            <div key={id} style={{display:"block"}}>
        <span>{element }        </span>  <span style={{cursor:"pointer"}} onClick={()=>deletesingle(id)}>&#10060;</span>
            
        </div>
    )})}
      
      
    </>
  )
}

export default Listcompo;
