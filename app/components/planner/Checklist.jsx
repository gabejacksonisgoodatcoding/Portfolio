"use client"
import { React, useState } from "react"

/**
 TODO
    *  Proggress 
 
 */



function Task(){
    return(
    <div className="border-green-200 border-2 rounded-2xl p-2 mb-2">
        <input className="grow text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6" type="text" placeholder="Task"></input>
        <input type="checkbox"></input>    
    </div>
    )
}


export default function Checklist(){


    let [tasks, setTasks] = useState([])


    function addTask(){
        let newTask = [...tasks.slice(0, tasks.length + 1), <Task key={tasks.length}></Task>];
        setTasks(newTask)
    }



    return(
        <div className="flex flex-col bg-gray-400 justify-center items-center w-fit p-5 rounded-2xl">
        {tasks}
        <button onClick={addTask}> +</button>

        </div>
    )
    
};