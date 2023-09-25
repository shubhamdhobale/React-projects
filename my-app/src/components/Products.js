import Card from "./Cards";
import ProductItem from "./ProductItem";
import "./Product.css"

function Products(prrops) {
    return ( 
        <Card className = "product" >
        <ProductItem title = { prrops.item[0].title }
        amount = { prrops.item[0].amount }
        date = { prrops.item[0].date } />
         <ProductItem title = { prrops.item[1].title }
        amount = { prrops.item[1].amount }
        date = { prrops.item[1].date }/> 
        <ProductItem title = { prrops.item[2].title }
        amount = { prrops.item[2].amount }
        date = { prrops.item[2].date }/>
         <ProductItem title = { prrops.item[3].title }
        amount = { prrops.item[3].amount }
        date = { prrops.item[3].date }
        /> <
        /Card>
    );
}

export default Products;