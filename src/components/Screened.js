import React from 'react'
import './Screened.css'


function Screened() {
  return (
    <div className='screened-container'>
        <h1 className='sdh'>Movies Screened</h1>
        <div className="box-container">
            <div className="box" id='bx1'></div>
            <div className="box" id='bx2'></div>
            <div className="box" id='bx3'></div>
            <div className="box" id='bx4'></div>
            <div className="box" id="bx5"></div>
           
        </div>
        
    </div>
  )
}

export default Screened
