import React from 'react';


export default function Audio({ mySource, ref }){
    return(
        <audio ref = {ref} controls preload="auto">
            <source src = {mySource} type = "audio/mpeg"/>
            Your browser does not support the audio element
        </audio>
    );
}
