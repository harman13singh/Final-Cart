import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import ProductList2 from "./components/ProductList2.js";
import Footer from "./components/Footer.js";
import Third from "./components/Third.js"
import Four from "./components/Four.js"
function App() {
  const Product1 = [
    {
      name: "Gurmukhi Akhar Gyan",
      price: 120,
      quantity: 0,
    },
    {
      name: "Gurmukhi Akhar Abhias ",
      price: 120,
      quantity: 0,
    },
    {
      name: "Punjabi Aabhias Pustak Part-1",
      price: 110,
      quantity: 0,
    },
    {
      name: "Punjabi Aabhias Pustak Part-2",
      price: 140,
      quantity: 0,
    },
    {
      name: "Punjabi Aabhias Pustak Part-3",
      price: 110,
      quantity: 0,
    },
    {
      name: "Punjabi Aabhias Pustak Part-4",
      price: 110,
      quantity: 0,
    },
    {
      name: "Art Book Part 1",
      price: 110,
      quantity: 0,
    },
    {
      name: "Art Book Part 2",
      price: 110,
      quantity: 0,
    },
    {
      name: "Scrap Book Part 1",
      price: 120,
      quantity: 0,
    },
    {
      name: "Scrap Book Part 2",
      price: 120,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal Sulekh M.-1",
      price: 85,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal SulekhM.-2",
      price: 85,
      quantity: 0,
    },
  ];

  let Product2 = [
    {
      name: "Jeeviey Gurbani Nal SulekhM.-3",
      price: 85,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal SulekhM.-4",
      price: 85,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal RangM.-1",
      price: 90,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal RangM.-2",
      price: 90,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal RangM.-3",
      price: 90,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal RangM.-4",
      price: 90,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal ChitarM.-1",
      price: 110,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal ChitarM.-2",
      price: 110,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal ChitarM.-3",
      price: 110,
      quantity: 0,
    },
    {
      name: "Jeeviey Gurbani Nal ChitarM.-4",
      price: 110,
      quantity: 0,
    },
    {
      name: "Sikh History Cards Part-1",
      price: 120,
      quantity: 0,
    },
    {
      name: "Sikh History Cards Part-2",
      price: 120,
      quantity: 0,
    },
  ];
  let [productList1, setProductList1] = useState(Product1);
  let [productList2, setProductList2] = useState(Product2);
  let [totalAmount, setTotalAmount] = useState(0);
  let [totalCount,setTotalCount]=useState(0);
  const decrement = (index) => {
    let newProductList = productList1;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      let newTotalAmount = totalAmount;
      
      newTotalAmount = newTotalAmount - newProductList[index].price;
      setProductList1(newProductList);
      setTotalAmount(newTotalAmount);
      let newTotalCount=totalCount;
      newTotalCount--;
      setTotalCount(newTotalCount);
      
    }
  };
  const increment = (index) => {
    let newProductList = productList1;

    newProductList[index].quantity++;
    let newTotalAmount = totalAmount;
    newTotalAmount = newTotalAmount + newProductList[index].price;
    setProductList1(newProductList);
    setTotalAmount(newTotalAmount);
    let newTotalCount=totalCount;
      newTotalCount++;
      setTotalCount(newTotalCount);
  };
  const decrement2 = (index) => {
    let newProductList = productList2;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      let newTotalAmount = totalAmount;
      newTotalAmount = newTotalAmount - newProductList[index].price;
      setProductList2(newProductList);
      setTotalAmount(newTotalAmount);
      let newTotalCount=totalCount;
      newTotalCount--;
      setTotalCount(newTotalCount);
    }
  };
  const increment2 = (index) => {
    let newProductList = productList2;

    newProductList[index].quantity++;
    let newTotalAmount = totalAmount;
    newTotalAmount = newTotalAmount+newProductList[index].price;
    setProductList2(newProductList);
    setTotalAmount(newTotalAmount);
    let newTotalCount=totalCount;
      newTotalCount++;
      setTotalCount(newTotalCount);
  };
  const resetData=()=>{
    setTotalAmount(0);
    setTotalCount(0);
    let newProductList1=[...productList1];
    newProductList1.map((products)=>{products.quantity=0;});
    setProductList1(newProductList1);
    let newProductList2=[...productList2];
    newProductList2.map((products)=>{products.quantity=0;});
    setProductList2(newProductList2);
  }

  return (
    <div class="maindiv">
      <Navbar totalCount={totalCount} />
      <span className="row maincontainer">
        <span className="one col-6">
          <ProductList
            productList1={productList1}
            increment={increment}
            decrement={decrement}
          />
        </span>
        <span className="two col-6">
          <ProductList2
            productList2={productList2}
            increment2={increment2}
            decrement2={decrement2}
          />
        </span>
      </span>
      <span className="four"><Four productList1={productList1} increment={increment} decrement={decrement}/></span>
      <span className="three"><Third productList2={productList2} increment2={increment2} decrement2={decrement2}/></span>
      <Footer totalAmount={totalAmount} 
      resetData={resetData}/>
    </div>
  );
}

export default App;
