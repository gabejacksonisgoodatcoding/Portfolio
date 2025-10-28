import React from "react";
import MyHeader from '../components/myHeader/myHeader';
import Checklist from '../components/planner/Checklist'

export default function Planner(){
    return(
        <>
        <MyHeader></MyHeader>
        <div className="flex justify-center items-center">
            <Checklist></Checklist>

        </div>
        </>
    )
};