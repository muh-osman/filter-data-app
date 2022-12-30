import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Card from "./components/Card";


function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const api = "https://fakestoreapi.com/products";

  // Fetch All Data onMount or OnClick on "All" Button & Saved Data in "products state"
  const allProduct = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }


  useEffect(() => {

    // Fetch All Data onMount
    allProduct()

    // Fetch Categories Name onMount
    fetch(`${api}/categories`)
      .then((res) => res.json())
      .then((cat) => setCategories(cat));

  }, []);


  // Pass Data that saved in "products state" to the Cards
  const store = products.map((product) => {
    return <Card key={product.id} product={product} />;
  });


  // Map on Categories & puplish as Button
  const cate = categories.map((cc) => {
    return (
      <button onClick={() => {filterCat(cc);}} key={cc} className="btn btn-primary m-2">
        {cc}
      </button>
    );
  });


  // OnClick Fetch new Data that filterd by category API then overwrite on All data in "products state"
  function filterCat(cc) {
    fetch(`${api}/category/${cc}`)
      .then((res) => res.json())
      .then((catt) => setProducts(catt));
  }



  return (
    <Router>

      <Navbar />

      <Routes>
        {/* "pass will pass "allProduct" function to another component */}
        <Route path="/" element={<Home store={store} cate={cate} pass={allProduct}/>} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails products={products} />}/>
      </Routes>

    </Router>
  );
}

export default App;
