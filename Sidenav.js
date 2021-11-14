import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AttractionsIcon from '@mui/icons-material/Attractions';
import React from "react";

function Sidenav() {
    const sidenav = { height: '84vh', width: '5%', 'background-color': 'green', float: 'left', align: 'center' }
    return (
        <div style={sidenav} className="sidebar">
            <br></br> <br></br> <br></br>
            <AccountBoxIcon fontSize="large" style={{backgroundColor:'orange', paddingLeft:'3%'}}/>
            <br></br> <br></br>
            <AllInboxIcon fontSize="large" style={{paddingLeft:'5%'}} />
            <br></br> <br></br>
            <AttractionsIcon fontSize="large" style={{paddingLeft:'5%'}}/>
            <br></br> <br></br>
            <AllInboxIcon fontSize="large" style={{paddingLeft:'5%'}}/>
        </div>
    )
}

export default Sidenav