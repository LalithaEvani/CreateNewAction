import React from 'react'
import {useState} from "react"
import './ProduceList.scss'
import SampleTable from './SampleTable'
export default function ProduceList() {
    const [showProduceList,setShowProduceList]= useState(false)
    
    const handleCancel = ()=>{
        setShowProduceList(false);
    }

    const handleShow= ()=>{
        setShowProduceList(true);
    }
    
    interface Person{
        sellerID:number,
        name:string,
        produces:number
    }

    var seller:Person = {
        sellerID :12345,
        name :"Ramesh Gowda",
        produces :2,
    }

    return (
        <div>
            <p onClick={handleShow}><a >Produce list</a></p>
            
            {showProduceList && (<div className="produce-list-backdrop">
            <div className="produce-list">
                <table className="seller-info">
                <tr>
                    <td>Seller ID &emsp;</td>
                    <td>: {seller.sellerID}</td>
                </tr>
                <tr>
                    <td>Name &emsp;</td>
                    <td>: {seller.name}</td>
                </tr>
                <tr>
                    <td>Produces &emsp;</td>
                    <td>: {seller.produces}</td>
                </tr>
            </table>   
            <span className="cancel" onClick={handleCancel}>X</span>
                <SampleTable />
                <div className="done-close"><span className="done" onClick={handleCancel}>Done</span></div>
            </div>
            </div>)}
       </div> 
    )
}
