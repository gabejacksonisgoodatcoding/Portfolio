"use client"
import MyHeader from '../components/myHeader/myHeader';
import React from 'react';
import styles from './Art.module.css';
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

let boxes = []
boxes.push({x: 0, y: 200, w: 100, h: 100, forward: true, up: true, color: 'red' })

export default function Art(){
    
    const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight - 50).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(500);
    let dvdBox = boxes[0];
    bounce(dvdBox, p5) 
    p5.fill(dvdBox.color)
    p5.rect(dvdBox.x, dvdBox.y, dvdBox.w, dvdBox.h)
    p5.fill('black')
    p5.textSize(14);
    p5.text('DVD', dvdBox.x+35, dvdBox.y+50)

  };
  
    return(
        <>
        <MyHeader></MyHeader>
        <Sketch setup={setup} draw={draw}></Sketch>
        </>
    )

}

function bounce(box, p5){
  if(box.forward){
    box.x+=5.5
  }else{
    box.x-=5.5
  }
  if(box.up){
    box.y+=5.5
  }else{
    box.y-=5.5
  }
  if(box.y +100>= p5.windowHeight - 50){
    box.color = 'yellow'
    box.up = false
  }
  if(box.y <= 0){
    box.color = 'blue'
    box.up = true
  }
  if(box.x + 100>= p5.windowWidth){
    box.color = 'purple'
    box.forward = false
  }
  if(box.x<=0){
    box.color = 'green'
     box.forward = true
  }
}