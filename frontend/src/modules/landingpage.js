import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import   '../json/data.json'
import '../css/nav.css'
export const Landing = () => {
    const [values,setdata]=useState()
    const [search,setsearch]=useState()
    if(search){
        values.forEach(element => {
            element.name===search
            
        });
    }
    useEffect(()=>{
        fetch("http://localhost:8080/recipe/getrecipe").then(data=>{
            return data.json()
        }).then((data)=>{
            console.log(data)
            setdata(data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            <nav className="nav"> 
            <div>
                <img src="https://img.icons8.com/small/16/null/fork.png "/><img src="https://img.icons8.com/small/16/null/fork.png"/>
                <span>Recipe App</span>

            </div>
            </nav>
            
            <div className="body">
                <input type='text' value={search} onChange={(e)=>{setsearch(e.target.data)}}/>
                <Link  to="/addnewrecipe">
                    <button>
                    <img src="https://img.icons8.com/small/16/null/pizza.png"/>
                    <p>New</p>
                    </button>
                </Link>


            </div>

            {values?.values?.length && values?.values?.map((val, index) => {
                
            })}

        </div>
    )
}
