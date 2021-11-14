import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

function Header({
    preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce((value)=>{
        setGlobalFilter(value || undefined)
    },300)
    const header = { height: '11vh', width: '97vw', 'background-color': 'green',padding:'1%' }
    return (
        <div style={header}>
            <div style={{ fontSize:'xx-large',float:'left',marginTop:'1.5%'}}className="lines">
                  <CalendarViewDayIcon/>
            </div>
            <TextField  style={{'backgroundColor':'white', color:'black',borderRadius:'10px',width:'58%',margin:'1%',marginLeft:'25px'}}
                placeholder="...search" 
                InputProps={{
                    startAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                value={value || ''}
                onChange={(e)=>{
                    setValue(e.target.value)
                    onChange(e.target.value)
                }}
            />
            <AccountCircleSharpIcon fontSize="large" style={{float:'right',margin:'1%',marginTop:'1.3%'}} />
            <label style={{ fontSize:'large',float:'right',marginTop:'1.6%'}} className="labels">Sid</label>
            <label style={{fontSize:'large',float:'right',margin:'1.6%'}}className="labels">Report bug</label>

            
        </div>
    )
}

export default Header