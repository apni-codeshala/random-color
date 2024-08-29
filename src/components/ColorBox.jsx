import React from "react";
import toast from "react-hot-toast";

const ColorBox = ({color}) => {
    const copyClipboard = () => {
        navigator.clipboard.writeText(color);
        toast(`Your copied ${color}`);
    }
    return (
        <div style={{width: "200px", height: "100px", background: color, borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={copyClipboard}>{color}</div>
    )
}

export default ColorBox;