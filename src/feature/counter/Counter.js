import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Upload } from './counterSlice'

export function Counter() {

    const [val,setVal]=useState("");
    const count=useSelector(state => state.counter.value);
    const [showImage, setShowImage]= useState(false);
    const dispatch=useDispatch()
    
    const changeHandle = (event) => {
        setVal(event.target.value);
    }

    const submitHandle = () => {
        dispatch(Upload(val));
        // console.log(val);
    }

    const printHandle = () => {
        
    }

     console.log(count);

    return (
        <div>
            <div>
            <div>
           <input value={val} onChange={changeHandle} placeholder='Upload your URL'/>
           <br/>
           <button onClick={submitHandle}>Upload the image</button>
           </div>
           <button onClick={()=>setShowImage(true)}>Show images</button>
           {
            showImage && <div>
                 {count.map((item)=>(
                   
                    <div> <img key={item} src={item}/></div>
                 ))}
</div>
           }
            </div>
        </div>
    )
}