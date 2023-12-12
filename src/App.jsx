import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ToDos, setToDos] = useState([])
  const [ToDo,setToDo]=useState('')
  const currentDate=new Date()
  const year = currentDate.getFullYear(); // e.g., 2023
  const month = currentDate.getMonth() + 1; // months are zero-based, so add 1
  const day = currentDate.getDate()
  const datnow=`${day}/${month}/${year}`;
  const hours = currentDate.getHours(); // e.g., 14
  const minutes = currentDate.getMinutes(); // e.g., 30
  const seconds = currentDate.getSeconds()
  const timenow=`${hours}:${minutes}:${seconds}`;
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 style={{textAlign:'center'}}>Hey, it's Working Day 🌝⛑️ </h2>
      </div>
      <div className="input">
        <input type="text" value={ToDo}  onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add Name..." />
        <i onClick={()=>setToDos([...ToDos,{id:Date.now(),text:ToDo,status:false,date:datnow,time:timenow}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {ToDos.map((obj)=>{
        
         return(<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);  
              console.log(obj);
              setToDos(ToDos.filter(obj2=>{
                if(obj2.id==obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p id={obj.status?'strikethrough-text':''}>{obj.text}</p>
          </div>
          
          <div className="right">
          <i id={obj.id} className="fas fa-times" onClick={(e)=>{
              let index= ToDos.findIndex(obj=>{return obj.id==e.target.id})
              if (index !== -1) {
                ToDos.splice(index, 1);
                setToDos([...ToDos]);
              }
            }}>
          </i>
          </div>
        </div>)
        })
        }
        <table border={2} style={{color:"white",margin:'30px'}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
        {
          ToDos.map((list,index)=>{
             return( 
                <tbody>
                  <tr>
                    <td>{index+1}</td>
                    <td>{list.text}</td>
                    <td>{list.date}</td>
                    <td>{list.time}</td>
                  </tr>
                </tbody>
               )
          })
        }
        </table>
      </div>
    </div>
  )
}

export default App
