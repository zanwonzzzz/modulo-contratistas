import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";



function DataTables() {
    //ookei entonces de que data es la variable y cuando sucede ago solo seteamos con setData porque
    //data es constante osea no es mutable por lo cual no podemos cambiar su balor a menos que
    //sea con setdata
    const [data,setData] = useState([]);
const columns = [
    {
       name:'Contratista',
       selector: row => row.Contratista,
    },
    {
       name:'apellido_paterno',
       selector:row => row.apellido_paterno
    },
    {
        name:'apellido_materno',
        selector:row => row.apellido_materno
    }
]

    //useeffect es para cargar algo despues de que el componente se renderizo
    useEffect (() => {
        var url = 'http://127.0.0.1:8000/api/contratistas';
        fetch(url,{
        method:"GET",
        headers:
        {
            "Content-Type":"application/json"
        },
        })
        .then((response) => response.json())
        .then((data) => {
            setData(data)
        })
        .catch((error) => console.error("error: ",error))
    },[]);

  return (
    <DataTable
    columns={columns}
    data={data}>

    </DataTable>
  )
}

export default DataTables;
