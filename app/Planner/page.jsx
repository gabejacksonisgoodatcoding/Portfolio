import React from "react";
import MyHeader from '../components/myHeader/myHeader';
import Checklist from '../components/planner/Checklist'

import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";

export default function Planner(){
    return(
        <>
        <MyHeader></MyHeader>
        <DndContext>
        <div className="flex justify-center items-center">
            <Checklist></Checklist>
        </div>
        </DndContext>
        </>
    )
};