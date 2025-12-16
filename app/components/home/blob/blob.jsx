import React from "react"

export default function Blob({blobTitle, blobBody}){
    return(
        <div>
            <div className="text-4xl text-center px-4">
            <p className="whitespace-pre-line">{blobTitle}</p>
            </div>
            <div className="text-2xl text-left px-4">
            {blobBody}
            </div>
        </div>
    )
};