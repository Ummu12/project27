import React, {useEffect, useState} from "react";
import {Grid, Card, CardContent} from "@mui/material";
import axios from "axios";

export const Home=()=>{
    const [data, setData] = useState([])
    const getData = async () =>{
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(result.data)
        setData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <Grid container spacing={2}>
             {
                data.map(item=>
                    <Grid item xs={3}>
                        <Card sx={{bgcolor:"coral"}}>
                            <CardContent>
                                {item.title}
                            </CardContent>
                        </Card>
                    </Grid>
                    )
             } 
        </Grid>    
    )
}