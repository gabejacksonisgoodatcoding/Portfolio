"use client"
import { React, useState } from "react"
import { FaTrash } from "react-icons/fa";
import { DndContext } from "@dnd-kit/core";

/**
 TODO
    *  Proggress bar

 */

export default function Checklist(){


    let [tasks, setTasks] = useState([])

    function Task(id){
        let placeholder = `Task`
        console.log(id)
        return(
        <div key={id} className="flex border-green-200 border-2 rounded-2xl p-2 mb-2">
            <input className="flex grow text-gray-900 placeholder:text-gray-500 focus:outline-none sm:text-sm/6" type="text" placeholder={placeholder}></input>
            <input className="flex align-center w-4 h-4 mr-1" type="checkbox"></input>   
            <button className="flex align-center" onClick={() => deleteTask(id)}>{<FaTrash />}</button> 
        </div>
        )
    }

    function deleteTask(id){
        let newTasks = [...tasks]
        let taskIndex = 0
        for (const task of tasks){
            if(task.id == id){
                break
            }
            taskIndex++;
        }
        newTasks.splice(taskIndex, 1);
        setTasks(newTasks);
    }
    
    function addTask(){
        const id = Date.now();
        console.log(id)
        let newTask = {id: id, done: false}
        setTasks([...tasks, newTask])

    }
    function displayTasks(){
        return(tasks.map(task => Task(task.id)))
        

    }
    

    return(
        <div className="flex flex-col bg-gray-400 justify-center items-center p-5 rounded-2xl">
        <h1 className="flex w-full mt-2">To Do</h1>
        {displayTasks()}
        <button onClick={() => addTask()}> +</button>

        </div>
    )
    
};