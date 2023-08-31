import React,{useState,useEffect} from "react";
import axios from "axios";
import { Grid,Card,CardContent } from "@mui/material";

export const Todos=()=>{
  const [data, setData]=useState([])
    
  const getApi= async()=>{
    const result=  await axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    console.log(result.data)  
    setData(result.data)
};

useEffect(()=> {
  getApi()
},[])
    return(
    <div>
        <h1> API Page</h1>
        {
            data.map((item)=>
            <Grid container spacing={2}>
                <Grid item xs={4}>
               <Card>
                <CardContent>
                    <h1>{item.name}</h1>
                     <h3>{item.city}</h3>
                </CardContent>
               </Card>
               </Grid>
            </Grid>
            )
        }
    </div>

    )
}

