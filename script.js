import React, {  useState,useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client"


function RandomPasswordGenerator(){
    const[password,setpassword]=useState("")
    const [length, setlength]=useState(10);
    const[numberchanged, setnumberchanged]=useState(false);
    const[charchanged,setcharchanged]=useState(false);

    const passwordgenerator=useCallback(()=>{
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRSTUVWXYZ";

        if(numberchanged){
            str+="0123456789";
        }
        if(charchanged){
            str+="#&*(){}%^@!+-";
        }

        let pass="";
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]

        }
        setpassword(pass);
    },[length,numberchanged,charchanged])
    // passwordgenerator();

    useEffect(()=>{
        passwordgenerator();
    },[passwordgenerator])



    return(
        <>
           <h1>Random password generator</h1>
           <div className="but">
            <h3>{password}</h3>
              <input type="range" min="5" max="50" value={length} onChange={(e)=>setlength(e.target.value)}></input>
              <label>Length is:({length})</label>

              <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumberchanged(!numberchanged)}></input>
              <label>Number</label>

              <input type="checkbox" defaultChecked={charchanged} onChange={()=>setcharchanged(!charchanged)}></input>
              <label>Character</label>
           </div>
        
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RandomPasswordGenerator/>)