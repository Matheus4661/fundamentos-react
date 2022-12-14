import "./Card.css";
import React from "react";

export default (props) => {

    const estilo = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className="Card" style={estilo}>
            <div className="Title">{ props.titulo }</div>
            <div className="Content">{props.children}</div>
        </div>
    );
};
