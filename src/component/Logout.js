import React from 'react';

export default function Logout(){
    return(
        <>
            {window.localStorage.clear()}
        </>
    )
}