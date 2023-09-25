import React from "react";
import "./ProductDate.css"

function ProductDate(props) {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();

    return (
    <div className="product-date">
        <div className="product-date-day">{day}</div>
        <div className="product-date-month">{month}</div>
        <div className="product-date-year">{year}</div>
    </div>

    );
}
export default ProductDate;