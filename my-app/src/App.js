import "./App.css";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";
/*import { useState } from 'react';
import { useEffect } from 'react';*/


function App() {


    //UseEffect....
    
    /*  const [title , setTitle] = useState('');
  const[name , setName] =  useState('love');

useEffect(() => {
console.log("change observed");
return () => {
  console.log("change removed");
}
  }, [title]);

  function changeHandler(event){
      setTitle(event.target.value);
      console.log(title)
    
  }*/
    const products = [{
            id: 'p1',
            title: 'Nirma',
            amount: 100,
            date: new Date(2021, 21, 10)

        },
        {
            id: 'p2',
            title: 'SurfExel',
            amount: 150,
            date: new Date(2022, 20, 1)

        },
        {
            id: 'p3',
            title: 'Ghadi',
            amount: 200,
            date: new Date(2023, 24, 2)

        },
        {
            id: 'p4',
            title: 'Arial',
            amount: 250,
            date: new Date(2019, 11, 5)

        },
    ];

    return ( <div>
         <div className = "App" >
        <Products item = { products }/>    
  
    </div>
    <NewProduct />
    </div>
   //<input type="text" onChange={changeHandler}/>

    );
}
export default App;
