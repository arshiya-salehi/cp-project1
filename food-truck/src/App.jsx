import React from "react";
import FoodTruckCard from "./FoodTruckCard.jsx";
import './App.css';

const foodTrucks = [
  {
    name: "Birria-Landia",
    cuisine: "Mexican",
    image: "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg",
    menuLink: "https://ww12.thebirrialandia.com/menu/?usid=17&utid=37525721522"
  },
  {
    name: "Mysttik Masala",
    cuisine: "Indian",
    image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42",
    menuLink: "https://indianfoodny.com/lander"
  },
  {
    name: "The Halal Guys",
    cuisine: "Middle Eastern",
    image: "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024",
    menuLink: "https://thehalalguys.com/menu/"
  },
];

const App = () => {
  return (
    // make the class name app
    <div className="container">
      <header>
        <div className="banner">
          <h1>Food Truck Favorites</h1>
        </div>
      </header>
      <div className="grid">
        {foodTrucks.map((truck, index) => (
          <FoodTruckCard key={index} truck={truck} />
        ))}
      </div>
    </div>
  );
};

export default App