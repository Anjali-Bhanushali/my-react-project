
import React, { useState, useEffect, useRef, useCallback } from "react";


const Skill = () => {
     const [length,setLength] = useState(8)
      const [numberAllowed,setNumberAllowed] = useState(false)
      const [characterAllowed,setCharacterAllowed] = useState(false)
      const [password,setPassword] = useState("")
      
      const passwordRef = useRef(null)
    
      const passwordgenerator = useCallback(() =>{
        let pass = ""
        let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
        if(numberAllowed) str+="0123456789"
        if(characterAllowed) str+="!@#$%^&*()_+-={}[]|:;<>,/"
    
        for(let i=1; i<= length; i++){
          let char = Math.floor(Math.random()* str.length +1)
          pass += str.charAt(char)
        }
    
        setPassword(pass)
    
      }, [length,numberAllowed, characterAllowed,setPassword] )
    
      const copyPasswordToClipboard = useCallback(() =>{passwordRef.current.select(),
        // passwordRef.current.setSelectionRange(0,9),
        window.navigator.clipboard.writeText(password)
      }, [password])
    
      
    
      useEffect(() => {passwordgenerator()},[length,numberAllowed,characterAllowed])
    return (
        <> 
        <div className= 'hover:shadow-2xl hover:ring-2 hover:ring-blue-400 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-700'> 

      <h1 className='text-white text-center my-3'>Password generator</h1>

      <div className= 'flex shadow rounded-lg overflow-hidden mb-4'> 

        <input type="text" 
        value={password}
        className=' text-black outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className=' active:bg-black  outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer accent-blue-600'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length: {length}</label>
        </div>


        <div>
         <input 
         id="numberInput"
         type="checkbox"
         className='cursor-pointer accent-blue-600'
         checked={numberAllowed}
         onChange={() => {setNumberAllowed((prev) => !prev);}}
          />
        </div>
        <label htmlFor="numberInput"> Numbers</label>

        <div>
         <input 
         id="characterInput"
         type="checkbox"
         className='cursor-pointer accent-blue-600'
         checked={characterAllowed}
         onChange={() => {setCharacterAllowed((prev) => !prev);}}
          />
        </div>
        <label htmlFor="characterInput">Character</label>

      </div>
     </div>
        </>
    )
}

export default Skill;