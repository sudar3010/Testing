import axios from 'axios';
import React, { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useGlobalFilter, useTable } from "react-table";
import '../SuperResponsiveTableStyle.css';
import Header from "./Header";
import HeaderButton from "./HeaderButton";
import Sidenav from "./Sidenav";


function Datatables() {
    
    const [userdata, setdata] = useState([])
    const [pagecount,setpagecount]=useState(1)
    const [pagenumber,setpagenumber]=useState(1)
    const [dumy,setdumy]=useState(1)
   
      const fetchproduct=async()=>{
        console.log(dumy)
          const response= await axios.get(`https://swapi.dev/api/people/?page=${pagenumber}`).catch(err=> console.log("error"))
          if(response)
          {
            setdata(response.data.results)
            setpagecount(response.data.count/10)
          }
      }

      const fetchproducts=async(currentpage)=>{
        console.log("...currentpage"+currentpage)
          const response= await axios.get(`https://swapi.dev/api/people/?page=${currentpage}`).catch(err=> console.log("error"))
          if(response)
          {
            setdata(response.data.results)
            setpagecount(Math.ceil(response.data.count/10))
          }
      }

      
     
    const handlePageClick=(data)=>{
         console.log("data-selected..."+typeof(data.selected))
         const addition=data.selected+1
        
       
         fetchproducts(addition)
    }
      useEffect(()=>{
        fetchproduct()
    },[])

     var i = 1
    userdata.forEach(function (element) {

        element.id = i;
        i++
    });
    
function displaybutons(){
    const cb = document.getElementById('accept').checked
     console.log(cb);
}

    
    const COLUMNS =
    [
        {
            HEADER: 'ID',
            accessor: 'id'
        },
        {
            HEADER: 'NAME',
            accessor: 'name'
        },
        {
            HEADER: 'BIRTH_YEAR',
            accessor: 'birth_year'
        },
        {
            HEADER: 'GENDER',
            accessor: 'gender'
        },
        {
            HEADER: 'HEIGHT',
            accessor: 'height'
        }
        
    ]
      
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => [...userdata], [userdata])
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        preGlobalFilteredRows,
        setGlobalFilter,
        state
      } = useTable({
        columns,
        data
      },useGlobalFilter)
    
    
     return(
         <div>
             
                        
            <div >
            <Header preGlobalFilterRows={10} setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter}/>

            </div>
            
            <div >
                <Sidenav />

            </div>
            <div style={{height:'22vh'}}>
                <HeaderButton/>
            </div>
            <hr className="Hr2"/>
            <div className="tablestyle">
        <table {...getTableProps()} >
            <thead >
                {
                    headerGroups.map((headergroup) => (
                        <tr{...headergroup.getHeaderGroupProps()}>
                            {
                                headergroup.headers.map(column => (
                                    <th{...column.getHeaderProps()}>{column.render('HEADER')} </th>
                                ))
                            }
                            <label className="selection">Selection</label>  
                        </tr>
                        
                    ))
                }

            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr{...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                       
                                        return <td data-label={cell.column.HEADER+":"}{...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    }

                                    )
                                }
                             <input type="checkbox" id="accept" name="accept" onClick={displaybutons} className="checkhide"/>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        <div className="react-paginate">
        <ReactPaginate 
        onPageChange={handlePageClick}
        previousLabel={'Previous'}
        nextLabel={'next'}
        breakClassName={'break-me'}
        pageCount={pagecount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={10}
        containerClassName={'pagination'}
        
       activeClassName={'active'}
        />
        </div>
        
        </div>
        
        </div>
     )
}

export default Datatables