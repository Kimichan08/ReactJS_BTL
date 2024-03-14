import React from 'react';
import Banner from './Components/Banner/Banner';
import Favorite from './Components/FavoriteProduct/Favorite';
import Footer from './Components/Footer/Footer';
import Post from './Components/NewPost/Post';
import NewProduct from './Components/NewProduct/NewProduct';
import Review from './Components/ReviewProduct/Review';
import SaleProduct from './Components/SaleProduct/SaleProduct';


function Home() {
  return (
    <>
      <Banner />
      <NewProduct />
      <SaleProduct />
      <Favorite />
      <Review />
      <Post />
      <Footer />
    </>
  )
}

export default Home;