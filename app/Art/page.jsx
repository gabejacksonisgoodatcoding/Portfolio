"use client"
import MyHeader from '../components/myHeader/myHeader';

import dynamic from "next/dynamic";


const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

let boxes = []
boxes.push({x: 0, y: 200, w: 100, h: 100, forward: true, up: true, color: 256})

export default function Art(){
    
    const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 50).parent(canvasParentRef);
    //randomWall(p5)
    
};
  const draw = (p5) => {

    p5.background(255);
    //randomWall(p5, false);
    let dvdBox = boxes[0];
    bounce(dvdBox, p5) 
    p5.fill(dvdBox.color)
    p5.rect(dvdBox.x, dvdBox.y, dvdBox.w, dvdBox.h)
    p5.fill('black')
    p5.textSize(14);
    p5.text('DVD', dvdBox.x+35, dvdBox.y+50)
    p5.text(`box x: ${dvdBox.x} box y: ${dvdBox.y}`,50, 100);
    p5.text(`x: ${p5.mouseX} y: ${p5.mouseY}`,50, 50);
  };
  
    return(
        <>
        <MyHeader></MyHeader>
        <Sketch setup={setup} draw={draw}></Sketch>
        </>
    )

}

let chosenWall = null

function randomWall(p5, reroll= true){
    let walls = ["top", "bottom", "left", "right"]

    if (reroll || chosenWall === null) {
        chosenWall = walls[Math.floor(p5.random(0, 4))];
  }
    console.log("chosewall = ", chosenWall);

    p5.push()
    p5.stroke('magenta')
    p5.strokeWeight(10)

    if(chosenWall == "top"){
        p5.line(0, 0, p5.windowWidth, 0)
    }
    if(chosenWall == "bottom"){

        p5.line(0, p5.windowHeight-50, p5.windowWidth, p5.windowHeight-50)

    }
    if(chosenWall == "left"){
        p5.line(0, 0, 0, p5.windowHeight-50)
    }
    if(chosenWall == "right"){
        p5.line(p5.windowWidth, 0, p5.windowWidth, p5.windowHeight-50)
    }
    p5.pop()

}

function bounce(box, p5){
    let color = p5.color(p5.random(100, 256), p5.random(100, 256), p5.random(100, 256));
    
    if(box.forward){
        box.x+=5
    }else{
        box.x-=5
    }
    if(box.up){
        box.y-=5
    }else{
        box.y+=5
    }
    if(box.y +100>= p5.windowHeight - 50){
        box.color = color
        box.up = true
    }
    if(box.y <= 0){
        box.color = color
        box.up = false
    }
    if(box.x + 100>= p5.windowWidth){
        box.color = color
        box.forward = false
    }
    if(box.x<=0){
        box.color = color
        box.forward = true
    }
    //hit right wall
    if(box.forward){
        if((p5.mouseX >= box.x + 100 && p5.mouseX <= box.x + 110) && (p5.mouseY >= box.y && p5.mouseY <= box.y + 100)){
            box.forward = false
        }
    }//check if hit left wall 
    else{
        if((p5.mouseX <= box.x && p5.mouseX >= box.x -10) && (p5.mouseY >= box.y && p5.mouseY <= box.y + 100)){
            box.forward = true
        }
    }//check if hit top wall
    if(box.up){
        if((p5.mouseX <= box.x + 100 && p5.mouseX >= box.x) && (p5.mouseY <= box.y && p5.mouseY >= box.y - 10)){
            box.up = false
        }
    }//check if hit bottom wall
    else{
        if((p5.mouseX <= box.x + 100 && p5.mouseX >= box.x) && (p5.mouseY <= box.y +100 && p5.mouseY >= box.y - 10)){
            box.up = true
        }  
    }


}