import React from 'react'
import './ActionForm.scss'
import {useState} from 'react';
import {PaperClipOutlined} from '@ant-design/icons';


export default function ActionForm() {
    const [showActionForm,setShowActionForm]=useState(false)
    const [showUserRequestIssue,setShowUserRequestIssue]=useState(false)
    const [showProduceRequestIssue,setShowProduceRequestIssue]=useState(false)
    const [showAddUser,setShowAddUser]=useState(false)
    const [showLogin,setShowLogin]=useState(false)
    const [showChangePhoneNumber,setShowChangePhoneNumber]=useState(false)
    const [showUpdateBankInfo,setShowUpdateBankInfo]=useState(false)
    const [showAddProduce,setShowAddProduce]=useState(false)
    const [showUpdateInfo,setShowUpdateInfo]=useState(false)
    const [showDeleteProduce,setShowDeleteProduce]=useState(false)

    function handleCategory(event:any){
        if(event.target.value==="user")
        {
            setShowUserRequestIssue(true);
            setShowProduceRequestIssue(false);
            setShowAddUser(false);
            setShowLogin(false);
            setShowChangePhoneNumber(false);
            setShowUpdateBankInfo(false);
            setShowAddProduce(false);
            setShowUpdateInfo(false);
            setShowDeleteProduce(false);
        }
        else
        {
            setShowUserRequestIssue(false);
            setShowProduceRequestIssue(true);
            setShowAddUser(false);
            setShowLogin(false);
            setShowChangePhoneNumber(false);
            setShowUpdateBankInfo(false);
            setShowAddProduce(false);
            setShowUpdateInfo(false);
            setShowDeleteProduce(false);
        }
            
        
    }

    function handleUser(requestIssue:any){
        switch(requestIssue.target.value)
        {
            case "addUser":
                setShowAddUser(true);
                
                setShowLogin(false);
                setShowChangePhoneNumber(false);
                setShowUpdateBankInfo(false);
                setShowAddProduce(false);
                setShowUpdateInfo(false);
                setShowDeleteProduce(false);
                break;
            case "login":
                setShowLogin(true);
                setShowAddUser(false);
                
                setShowChangePhoneNumber(false);
                setShowUpdateBankInfo(false);
                setShowAddProduce(false);
                setShowUpdateInfo(false);
                setShowDeleteProduce(false);
                break;
            case "changePhoneNumber":
                setShowChangePhoneNumber(true);
                setShowAddUser(false);
                setShowLogin(false);
                
                setShowUpdateBankInfo(false);
                setShowAddProduce(false);
                setShowUpdateInfo(false);
                setShowDeleteProduce(false);
                break;
            case "updateBankInfo":
                setShowUpdateBankInfo(true);
                setShowAddUser(false);
                setShowLogin(false);
                setShowChangePhoneNumber(false);
               
                setShowAddProduce(false);
                setShowUpdateInfo(false);
                setShowDeleteProduce(false);
                break;
            default:
                break;
            

        }
    }
    
    function handleCreate()
    {   
        setShowActionForm(false)
        setShowUserRequestIssue(false)
        setShowProduceRequestIssue(false)
        setShowAddUser(false)
        setShowLogin(false)
        setShowChangePhoneNumber(false)
        setShowUpdateBankInfo(false)
        setShowAddProduce(false)
        setShowUpdateInfo(false)
        setShowDeleteProduce(false)
    }
    function handleProduce(requestIssue:any)
    {
        switch(requestIssue.target.value)
        {
            case "addProduce":
                setShowAddProduce(true);
                setShowAddUser(false);
                setShowLogin(false);
                setShowChangePhoneNumber(false);
                setShowUpdateBankInfo(false);
                
                setShowUpdateInfo(false);
                setShowDeleteProduce(false);
                break;
            case "updateInfo":
                setShowUpdateInfo(true);
                setShowAddUser(false);
                setShowLogin(false);
                setShowChangePhoneNumber(false);
                setShowUpdateBankInfo(false);
                setShowAddProduce(false);
                
                setShowDeleteProduce(false);
                
                
                break;
            case "deleteProduce":
                setShowDeleteProduce(true);
                setShowAddUser(false);
                setShowLogin(false);
                setShowChangePhoneNumber(false);
                setShowUpdateBankInfo(false);
                setShowAddProduce(false);
                setShowUpdateInfo(false);
                
               
                break;
            default:
                break;
        }
    }
    
    
    return (
        <div className='create-new-action'>
           {showActionForm && (<div>
                <button className='action-button' onClick={handleCreate}>+ Create New Action</button>
            </div>
            )}

            {!showActionForm && (<div>
                <button className='action-button' onClick={()=>setShowActionForm(true)}> + Create New Action</button>
                
            </div>
            )}
            {showActionForm && (<div className='action-form'>
                
                    <label>
                    <span className="category" >Category:</span>
                    
                
                    <select className="category-select" onChange={handleCategory} defaultValue="select">
                        <option value="select">select</option>
                        <option value="user">User</option>
                        <option value="produce">Produce</option>
                    </select>
                </label>
                    
                
                
                {showUserRequestIssue && (<div className='request-issue'>
                    <label>
                        <span className="req-issue">Request/Issue:</span>
                        <select className="req-issue-select" onChange={handleUser} defaultValue="select">
                            <option value="select">select</option>
                            <option value="addUser">Add User</option>
                            <option value="login">Login</option>
                            <option value="changePhoneNumber">Change Phone Number</option>
                            <option value="updateBankInfo">Update Bank Info</option>
                        </select>

                    </label>
                    </div>
                )}
                {showProduceRequestIssue && (<div className='request-issue'>
                    <label>
                        <span className="req-issue">Request/Issue:</span>
                         <select className="req-issue-select" onChange={handleProduce} defaultValue="select">
                            <option value="select">select</option>
                            <option value="addProduce">Add Produce</option>
                            <option value="updateInfo">Update Info</option>
                            <option value="deleteProduce">Delete Produce</option>
                        </select>
                    </label>
                    </div>
                )}
                {showAddUser && (<div className='add-user'>
                    <label>
                       <span className="details"> Details:</span>
                        <textarea className="details-textarea"defaultValue="Please add following seller and buyers" />
                        <br /><br /><br />
                        <button className="attach-file"> <PaperClipOutlined />Attach file </button>
                    </label>
                    <div className="create">
                        <br /><br />
                    {<button type="submit" onClick={handleCreate}> Create</button>}
                    </div>
                    </div>
                )}
                {showLogin && (<div className='Login'>
                <label>
                        <span className="seller-buyer-id">Seller/buyer id:</span>
                        <input className="seller-buyer-text" type="text"/>
                    </label>
                    <br /> <br />
                    <label>
                        <span className="details">Details:</span>
                        <textarea className="details-textarea" defaultValue="Seller unable to login.Please change password"/>
                    </label>
                    <div className="create">
                    {<button type="submit" onClick={handleCreate}> Create</button>}
                    </div>

                    </div>
                )}
                {showChangePhoneNumber && (<div className='change-phone-number'>
                <label>
                        <span className="seller-buyer-id">Seller/buyer id:</span>
                        <input className="seller-buyer-text" type="text"/>
                    </label>
                    <br /> <br />
                    <label>
                        <span className="details">Details:</span>
                        <textarea className="details-textarea" defaultValue="Change Phone number to:"/>
                    </label>
                    <div className="create">
                    {<button type="submit" onClick={handleCreate}> Create</button>}
                    </div>
                </div>
                )}

                {showUpdateBankInfo && (<div className='update-bank-info'>
                <label>
                        <span className="seller-buyer-id">Seller/buyer id:</span>
                        <input className="seller-buyer-text" type="text"/>
                    </label>
                  <br /><br />
                  <label>
                      <span className="details">Details:</span>
                      <textarea className="details-textarea" defaultValue="Change bank account no to:"/>
                  <br /><br /><br />
                  <button className="attach-file"> <PaperClipOutlined />Attach file </button>
                  </label>
                  
                  <div className="create">
                    {<button type="submit" onClick={handleCreate}> Create</button>}
                    </div>
                  </div>
                )}
            
           
                {showAddProduce && (<div className="add-produce">
                    <label>
                        <span className="seller-buyer-id">Seller/buyer id:</span>
                        <input className="seller-buyer-text" type="text"/>
                    </label>  
                    <br /><br /> 
                    <label>
                        <span className="details" >Details:</span>
                        <textarea className="details-textarea"defaultValue="Add following produce to above seller"/>
                        <br /><br /><br />
                        <button className="attach-file"> <PaperClipOutlined />Attach file </button>
                    </label><br /><br />
                    <div className="create">
                    {<button type="submit" onClick={handleCreate}> Create</button>}
                    </div>
                    </div>

                )}

                {showUpdateInfo && (<div className="update-info">
                <label>
                        <span className="seller-buyer-id">Seller/buyer id:</span>
                        <input className="seller-buyer-text" type="text"/>
                    </label> 
                    <br /><br />  
                    <label>
                        <span className="details">Details:</span>
                        <textarea className="details-textarea" defaultValue="Crop: Change quantity to:"/>
                    </label>
                    <div className="create">
                    {<button type="submit" onClick={handleCreate}> Create</button>}
                    </div>
                </div>)}

                {showDeleteProduce && (<div className="delete-produce">
                <label>
                        <span className="seller-buyer-id">Seller/buyer id:</span>
                        <input className="seller-buyer-text" type="text"/>
                    </label> 
                    <br /> <br />
                    <label>
                        <span className="details">Details:</span>
                        <textarea className="details-textarea"defaultValue="Delete the following produce"/>
                    </label>
                    <div className="create">
                    {<button type="submit" onClick={handleCreate}> Create</button>}
                    </div>
                    </div> 
                )}
               
                <div className="cancel"><span onClick={handleCreate}>Cancel</span></div>
                
           </div>)}
        </div>
    )
}
