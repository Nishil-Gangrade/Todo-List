
import { useState } from 'react'

import './App.css'

function App() {
    const[title ,settitle]=useState("")
    const[desc ,setdesc]=useState("") 

    const[mainTask,setmainTask]=useState([])

    const submitHandler = (e)=>{
        e.preventDefault();
        setmainTask([...mainTask,{title,desc}]);
        settitle("");
        setdesc("");
    }

    const deleteHandler = (i) =>{
      let copytask = [...mainTask]
      copytask.splice(i,1)
      setmainTask(copytask)
    }


    let renderTask=<h2>No task Available</h2>;

    if(mainTask.length>0){
      renderTask = mainTask.map((t,i)=>{
        return(
          <li key={i} className='flex items-center justify-between mb-5 '>
            <div className='flex items-center justify-between w-2/3'>
              <h5 className='text-2xl font-semibold'>{t.title}</h5>
              <h6 className='text-xl font-semibold'>{t.desc}</h6>
            </div>
            <button onClick={()=>{
              deleteHandler(i)
            }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
          </li>
        )
      })
    }

  return (
   <>
   <h1 className='bg-slate-900 text-white flex items-center text-3xl p-7 justify-center al'>MY TODO LIST </h1>
      <form onSubmit={submitHandler} >
        <input type="text" 
        className='px-3 py-1 m-6 border-2 border-black '
        placeholder='Enter title here ' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <input type="text" 
        className='px-3 py-1 m-6 border-2 border-black '
        placeholder='Enter description here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }} 
        />
        
        <button className='px-3 py-1 m-6 border-2 border-black '>Add</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
          <ul>{renderTask}</ul>
      </div>

   </>
  )
}

export default App
