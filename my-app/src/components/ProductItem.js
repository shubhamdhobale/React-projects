import React from "react";
import { useState } from "react";
import "./ProductItem.css"
import Card from "./Cards";
import ProductDate from "./ProductDate";

function ProductItem(props) {

const[title,setTitle]=useState(props.title);

function ClickHandler(){
    setTitle("Popcorn"); 
    console.log("buttton clicked");
}

    return ( 
    <Card className = "product-item" >
        <ProductDate date = { props.date }/> 
        <button onClick={ClickHandler}>Add to Card</button>
        <div className = "product-discription" >
        <h1 > {title} </h1> 
        </div> 
        </Card>
    );
}

export default ProductItem;