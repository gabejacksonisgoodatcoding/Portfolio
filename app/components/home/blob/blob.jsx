import React from "react"

export default function Blob({blobTitle, blobBody}){
    return(
        <div>
            <div class="text-4xl text-center px-4">
            <p>{blobTitle}</p>
            </div>
            <div className="text-2xl text-left px-4">
            <p>{blobBody}</p>
            </div>
        </div>
    )
};