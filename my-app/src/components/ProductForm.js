import { useState } from 'react';
import './ProductForm.css';


function ProductForm() {

    const[newTitle ,setTitle] = useState('');
    const[newDate , setDate] = useState('');

    function titlechangehandler(event){
         setTitle(event.target.value)
        console.log(event.target.value)
    }

    function datechangehandler(event){
        setDate(event.target.value)
        console.log(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const productdata = 
        {
            title: newTitle,
            date : newDate
        };
        console.log(productdata)

        setTitle(' ');
        setDate(' ');
    }

    return(<div>
        <form onSubmit={submitHandler}>
            <div className='new-product-title'>
                <label htmlFor="text">Title</label>
                <input type="text" value={newTitle} onChange={titlechangehandler}/>
            </div>
            <div className='new-product-date'>
                <label htmlFor="date">Date</label>
                <input type="date" value={newDate} onChange={datechangehandler}/>
            </div>
            <div className='new-product-button'>
                <button >Add to Card</button>
            </div>
        </form>
    </div>)
}

export default ProductForm;