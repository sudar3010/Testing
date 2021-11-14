import React from "react";
import Datatables from './Datatables';

function Emp() {

    const page = { height: '100vh', width: '99%' }
       return (
        <div style={page}>
            
            <div >
                <Datatables />
            </div>

        </div>

    )
}

export default Emp