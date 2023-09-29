import React, { useContext } from "react";
// import { MyContextVariables } from "../../App";
import './text2.scss'

function Text2() {
    // const value = useContext(MyContextVariables);
    // console.log("sjufhawierg", new Date(), value?.title)
    return (
        <>
            <h3 className='explore-text' onClick={() => value?.onClick("Changed title")}>{value?.title}</h3>
        </>
    )
}

export default Text2