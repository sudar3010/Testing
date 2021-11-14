import WcRoundedIcon from '@mui/icons-material/WcRounded';
import React from "react";
import Delete from "../Images/Delete.PNG";
import Edit from "../Images/Edit.PNG";
import Mc from "../Images/Mc.PNG";
import Pmc from "../Images/PmcS.PNG";
function HeaderButton(){

    const header = { height: '12vh', width: '96vw', 'background-color': 'green'}
    
    const firstbutton={borderRadius:'5px',margin:'1%',height:'40px', width:'120px',float:'left'}
    return(
        
        <div>
        <div className="HederBtn">
        <button style={firstbutton}><WcRoundedIcon style={{float:'left'}}/><label style={{float:'left'}}>Employess</label></button>
        <div className="btn-group"> 
        <button>Age</button>
        <button>Salary</button>
        <button>Account</button>
        </div>
        <lable style={{ fontSize:'large',float:'right',marginTop:'1%',padding:'1%',color:'blue'}}>Save Report</lable>
        <lable style={{ fontSize:'large',float:'right',marginTop:'1%',padding:'1%'}}>Clear </lable>
        
        </div>
        
            <img src={Pmc} className="PmcS"/>
        
        <hr className="Hr"/>
        <div className="HeaderBtn2">
            
            <img src={Mc} alt="mange column" style={{float:'left'}} />
            <label style={{color:'blue',float:'left'}}>Manage Columns</label>
            <label style={{padding:'25%'}} className="Ids">82 Id found</label>
           <div className="Mview">
            <label style={{color:'blue',float:'right',paddingTop:'3px',marginRight:'20px'}} >Edit</label>
            <img src={Edit} alt="Edit" style={{float:'right',paddingLeft:'15px'}} />
            <label style={{color:'red',float:'right',paddingTop:'3px'}} >Delete</label>
            <img src={Delete} alt="Delete" style={{float:'right'}}  />
            </div>
        </div>
        </div>
        
        
    )
}

export default HeaderButton