import { useState } from "react"
import  '../css/recepi.css'
import '../css/login.css'

export const CreateArecipe=()=>{
    const [name,setname]=useState()
    const [author,setauthor]=useState()
    const [postImage,setPostImage]=useState()
    const [ingredients,setingredients]=useState()
    const [receipe,setreceipe]=useState()
    const uploadPost=()=>{
        
        const formData= new FormData();
        formData.append('name',name)
        formData.append('author',author)
        formData.append('ingredients',ingredients)
        formData.append('receipe',receipe)
        formData.append("postImage",postImage);
        formData.forEach((val,key)=>{
            console.log(val)
        })
        
        fetch("http://localhost:8080/recipe/addrecipe",{
            method:'POST',
            // headers:{
            //     'content-Type':'application/json',
            //     'accept':'application/json'
            // },
            body:formData
            
        })
    }
    return (
        <div className="container">

            <div className="divc">
                <h1 className="h1c">Create Receipe</h1>
                <hr className="hrc"></hr>
                <h2 className="h2c">Name of Receipe</h2>
                <input placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} required/>
               
                <h2 className="h2c">Name of Author</h2>
                <input placeholder="" value={author} onChange={(e)=>{setauthor(e.target.value)}} required/>
                <h2 className="h2c">Image</h2>
                <input type="file" placeholder=""  onChange={(e)=>{setPostImage(e.target.files[0])}} className='full-width'required/>
                <h2 className="h2c">Ingredients</h2>
                <textarea placeholder=""value={ingredients} onChange={(e)=>{setingredients(e.target.value)}}  required/>
                <h2 className="h2c">Receipe description</h2>
                <textarea  placeholder="" value={receipe} onChange={(e)=>{setreceipe(e.target.value)}} required/>
                <button onClick={uploadPost}>Submit</button>
            </div>
            
        </div>
    )
}
