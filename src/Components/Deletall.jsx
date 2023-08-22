import React from 'react';
import {alldeleteuser}  from '../Store/slice/userslice'
import { useDispatch } from 'react-redux'; 

const Deletall = () => {
  const dispatch = useDispatch()


  const dleteall =() =>{
    dispatch(alldeleteuser())

  }
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <button onClick={dleteall}>

      delete
      </button>
    </div>
  )
}

export default Deletall;
