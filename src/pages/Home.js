import Carousel from "../components/Carousel";
import Filter from "../components/Filter";
import Products from "../components/Products";

const Home = (props) => {
  return (
    <>
      <Carousel />
      <Filter cate={props.cate} pass={props.pass}/>
      <Products store={props.store} />
    </>
  );
};

export default Home;
