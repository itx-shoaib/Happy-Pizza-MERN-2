import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../Css/MenuPage.css";
import Navbar from "./Navbar";

function MenuPage() {
  let [num, setNum] = useState(1);
  const [category, setcategory] = useState(
    []
  )
  const [item, setItem] = useState([])
  let incNum = () => {
    setNum(Number(num) + 1);
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  function showmodal(item) {
    console.log(item.title);
    <div
      className="modal fade"
      id="addtocart"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {item.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label for="quantity">Quantity</label>
            <div id="quantity">
              <button
                className="btn btn-light w-100"
                type="button"
                onClick={decNum}
              >
                -
              </button>
              <input
                type="text"
                className="form-control text-center"
                value={num}
                onChange={handleChange}
              />
              <button
                className="btn btn-light w-100"
                type="button"
                onClick={incNum}
              >
                +
              </button>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}

            <button type="button" className="btn btn-primary w-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>;
  }

  var drink = [
    {
      title: "Coca Cola Cans",
      description: "Cans",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/665e0342-f5f8-4826-a854-9c7df0761789_thumb.jpg",
    },
    {
      title: "Pepsi Can",
      description: "Bottle of soft drink",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/fc66971b-7dea-4186-a9aa-86fd3fe23b1e_thumb.jpg",
    },
    {
      title: "Diet Coca Cola Can",
      description: "Diet Coca Cola Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/e123bb3c-96e4-45c4-b3cf-fd4b1e73f87e_thumb.jpg",
    },
    {
      title: "Tango Orange Can",
      description: "Tango Orange Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/776193a1-0b56-48c6-be77-283edbd9d94b_thumb.jpg",
    },
    {
      title: "Apple Tango Can",
      description: "Apple Tango Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f370fbd7-709a-49ba-b84b-923c7ff4c159_thumb.jpg",
    },
    {
      title: "Dr. Pepper Can",
      description: "Dr. Pepper Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/2e3a66af-887f-48e5-bbdc-ebc2ab42c988_thumb.jpg",
    },
    {
      title: "Rio Can",
      description: "Rio Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/14a7ecda-148d-4419-8639-009a369e7e0a_thumb.jpg",
    },
    {
      title: "Vimto Can",
      description: "Vimto Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/31fd07c0-f8a9-4fde-9d5e-b00ec01cdedc_thumb.jpg",
    },
    {
      title: "7up Can",
      description: "7up Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/6f371c70-fdac-419f-956f-e1357baa4fb8_thumb.jpg",
    },
    {
      title: "Fanta Can",
      description: "Fanta Can",
      price: 1.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/39126517-c0dd-4d80-8468-7422776e0e96_thumb.jpg",
    },
    {
      title: "Tango Orange Bottle",
      description: "Tango Orange Bottle",
      price: 3.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/475b16ba-6c80-4473-9661-fd89d51d0b86_thumb.jpg",
    },
    {
      title: "Fanta Bottle",
      description: "Fanta Bottle",
      price: 3.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/e8396266-2087-4a9c-bc7c-51659c89c80e_thumb.jpg",
    },
    {
      title: "Coca Cola Bottle",
      description: "Coca Cola Bottle",
      price: 3.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/e2e4f454-f7ec-4892-b252-e80d9f6bbc06_thumb.jpg",
    },
    {
      title: "Diet Coca Cola Bottle",
      description: "Diet Coca Cola Bottle",
      price: 3.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/c274906f-6a18-40b5-9025-527f35da8475_thumb.jpg",
    },
  ];

  var drinks = drink.map((item) => (
    <>
      <div
        className="row productcard bs"
        type="button"
        onClick={() => {
          showmodal(item);
        }}
        // data-bs-toggle="modal"
        // data-bs-target="#addtocart"
      >
        <div className="col-xl-7">
          <h5 className="boldtext">{item.title}</h5>
          <p>{item.description}</p>
          <h5>${item.price}</h5>
        </div>
        <div className="col-xl-5">
          <img className="productimg" src={item.image} />
        </div>
      </div>
    </>
  ));

  //   <div
  //   className="modal fade"
  //   id="addtocart"
  //   tabindex="-1"
  //   aria-labelledby="exampleModalLabel"
  //   aria-hidden="true"
  // >
  //   <div className="modal-dialog">
  //     <div className="modal-content">
  //       <div className="modal-header">
  //         <h5 className="modal-title" id="exampleModalLabel">
  //           {item.title}
  //         </h5>
  //         <button
  //           type="button"
  //           className="btn-close"
  //           data-bs-dismiss="modal"
  //           aria-label="Close"
  //         ></button>
  //       </div>
  //       <div className="modal-body">
  //         <label for="quantity">Quantity</label>
  //         <div id="quantity">
  //           <button
  //             className="btn btn-light w-100"
  //             type="button"
  //             onClick={decNum}
  //           >
  //             -
  //           </button>
  //           <input
  //             type="text"
  //             className="form-control text-center"
  //             value={num}
  //             onChange={handleChange}
  //           />
  //           <button
  //             className="btn btn-light w-100"
  //             type="button"
  //             onClick={incNum}
  //           >
  //             +
  //           </button>
  //         </div>
  //       </div>
  //       <div className="modal-footer justify-content-center">
  //         {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}

  //         <button type="button" className="btn btn-primary w-100">
  //           Add to Cart
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  var juice = [
    {
      title: "Pure Orange Juice 500ml",
      description: "Pure Orange Juice 500ml",
      price: 2.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/b526e6eb-c67e-4801-9adc-9b1e2e2880e9_thumb.jpg",
    },
    {
      title: "Pure Apple Juice 500ml",
      description: "Pure Apple Juice 500ml",
      price: 2.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/4cebd16b-8740-45ea-88aa-2d0f8eb30079_thumb.jpg",
    },
  ];

  var juices = juice.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var milkshake = [
    {
      title: "Caramel Shake",
      description: "Caramel Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/0e9eb956-fef0-4c93-9b09-70fc962850b1_thumb.jpg",
    },
    {
      title: "Galaxy Shake",
      description: "Galaxy Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/fbc5abb9-7394-4e6a-8e2b-44f3ae61a23e_thumb.jpg",
    },
    {
      title: "Kinder Bueno Shake",
      description: "Kinder Bueno Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/ec33fb4f-6784-4a26-8ebd-6b9f77eb293d_thumb.jpg",
    },
    {
      title: "Mint Aero Shake",
      description: "Mint Aero Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f2e13bdd-6bd4-4494-8abd-0db9f51da4fa_thumb.jpg",
    },
    {
      title: "Snickers Shake",
      description: "Snickers Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/0674f0fb-d0d8-4338-9fa5-4fddb40483de_thumb.jpg",
    },
    {
      title: "Oreo Cookies Shake",
      description: "Oreo Cookies Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/111221fb-c1b3-4739-910b-2009f01b2163_thumb.jpg",
    },
    {
      title: "Strawberry Shake",
      description: "Strawberry Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/3b1c924c-e21e-4264-9004-eb1f0b6cf4ff_thumb.jpg",
    },
    {
      title: "Milky Way Shake",
      description: "Milky Way Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/0f33b02c-12db-47aa-b04d-7b442ae4b6fe_thumb.jpg",
    },
    {
      title: "Milkybar Shake",
      description: "Milkybar Shake",
      price: 3.99,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/94c5bc59-996a-48e3-a9d6-aa89b786baf3_thumb.jpg",
    },
    {
      title: "Premium Ferrero Rocher Shake",
      description: "Premium Ferrero Rocher Shake",
      price: 4.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/0946e50d-da3b-48f7-ac79-e9dad3853a8f_thumb.jpg",
    },
  ];

  var milkshakes = milkshake.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var burgermeal = [
    {
      title: "Cheese Burger Meal",
      description: "Cheese Burger with Chips and Drinks of your choice",
      image: "",
    },
    {
      title: "Special Burger Meal",
      description:
        "Special Burger Meal with Chips and Drinks of your own choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/c976b318-2e71-4274-a3ee-61cd87e3cad8_thumb.jpg",
    },
    {
      title: "Double Whammy Burger Meal",
      description:
        "Double Whammy Burger Meal with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Cheesy Spam Burger Meal",
      description:
        "Cheesy Spam Burger Meal with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Happy's Special Burger Meal",
      description:
        "Happy's Special Burger Meal with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Ring Burger Meal",
      description: "Ring Burger Meal with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Cheesy Omelette Burger Meal",
      description:
        "Cheesy Omelette Burger Meal with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Hawaiian Burger Meal",
      description: "Hawaiian Burger with Chips and Drinks of your choice",
      image: "",
    },
    {
      title: "Cowboy Burger Meal",
      description: "Cowboy Burger with Chips and Drinks of your choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/867b46bf-0da3-4a50-a686-d06517be8dc6_thumb.jpg",
    },
    {
      title: "Beef Burger Meal",
      description: "Beef BUrger Meal with Chips and Drinks of your own choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/aea99e64-8999-4b50-a230-f1edcaa9e7de_thumb.jpg",
    },
    {
      title: "French Burger Meal",
      description:
        "French Burger Meal with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "American Burger Meal",
      description:
        "American Burger Meal with Chips and Drinks of your own choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/0cd9e769-257d-4031-a471-52151ed25452_thumb.jpg",
    },
    {
      title: "Garlic Burger Meal",
      description:
        "Garlic Burger Meal with Chips and Drinks of your own choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/fb4876bb-300f-46c3-839b-02a7b226c886_thumb.jpg",
    },
    {
      title: "Piggy Burger Meal",
      description: "Piggy Burger Meal with Chips and Drinks of your own choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/1079b120-5f68-4d1a-be45-a6f398981186_thumb.jpg",
    },
    {
      title: "Porky Special Burger Meal",
      description:
        "Porky Speical Burger Meal with Chips and Drinks of your own choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/43b6a246-1108-443d-b044-bcac58d58507_thumb.jpg",
    },
    {
      title: "Bacon & cheese Burger Meal",
      description:
        "Bacon & cheese Burger Meal with Chips and Drinks of your own choice",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/b6cc9773-9945-4859-a109-099d1ed66ad5_thumb.jpg",
    },
    {
      title: "Hellum Burger Meal",
      description: "Helum Burger Meal with Chips and Drinks of your own choice",
      image: "",
    },
  ];

  var burgermeals = burgermeal.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var chickenfillet = [
    {
      title: "BBQ Chicken Fillet Burger Meal",
      description:
        "BBQ Chicken Fillet Burger with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Chicken Fillet Burger Meal",
      description:
        "Chicken Fillet Burger with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Spring Burger Meal",
      description: "Spring Burger with Chips and Drinks of your own choice",
      image: "",
    },
    {
      title: "Happy's Chicken Meal",
      description:
        "Happy's Chicken Fillet Burger with Chips and Drinks of your own choice",
      image: "",
    },
  ];

  var chickenfillets = chickenfillet.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var pizza = [
    {
      title: "Margherita",
      description: "Our special homemade tomato sauce 100% mozarella cheese",
      image: "",
    },
    {
      title: "BBQ Americano",
      description:
        "BBQ Base, Pork Meatballs, Chicken, Hotdog Slice, Mozarella Cheese",
      image: "",
    },
    {
      title: "Spicy Beef",
      description: "Tomato Base, Spicy Beef Onion, Peppers, Mozarella Cheese",
      image: "",
    },
    {
      title: "Hot & Spicy",
      description:
        "Tomato Base, Pepperoni, Spicy Beef, Onion, Fresh Chilli & Mozarella Cheese",
      image: "",
    },
    {
      title: "Seafood",
      description:
        "Tomato Base, Tuna, Prawns, Sweetcorn, Mix Pepper, Onion & Mozarella Cheese",
      image: "",
    },
    {
      title: "Chicken Kiev",
      description:
        "Tomato Base, Garlic Butter, Chicken, Mushroom, Onion & Mozarella Cheese",
      image: "",
    },
    {
      title: "Chorizo & Pepperoni",
      description:
        "Tomato Base, Pepperoni Chorizo, Mix Pepper, Onion, Fresh Tomato, Sweetcorn &...",
      image: "",
    },
    {
      title: "Formaggi",
      description: "Combination of 4 Different Cheese",
      image: "",
    },
    {
      title: "Meat Feast",
      description:
        "Tomato Base, Pepperoni, Salami, Garlic Sausage, Ham, Spicy Beef, Bacon...",
      image: "",
    },
    {
      title: "Mediterranean",
      description:
        "Tomato Base, Salami, Meatballs, Hellumi, Cheese, Oregano, Olive oil &..",
      image: "",
    },
    {
      title: "Marco Polo",
      description:
        "Tomato Base, Pepperoni, Spicy Chicken, Spicy Beef, Fresh Chilli, Onion & ...",
      image: "",
    },
    {
      title: "Frenze",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "American",
      description:
        "Tomato Base, Salami, Hotdog Slice, Onion, Chillies, & Mozarella",
      image: "",
    },
    {
      title: "Hottiest",
      description:
        "Tomato Base, Chicken, Spicy Beef, Onion, Jalepeno, Mix Pepper, Fresh Chillies, &",
      image: "",
    },
    {
      title: "Pepperoni Supreme",
      description:
        "Tomato Base, Pepperoni, Mix Pepper, Sweetcorn & Mozarella Cheese",
      image: "",
    },
    {
      title: "Night Dream",
      description: "Tomato Base, Pepperoni, Chicken, Donner, Bacon & Mozarella",
      image: "",
    },
    {
      title: "Fantastic Four",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Happy's Special",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Chicken Feast",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Pulled Pork",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Happy's Full Breakfast",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Gamberoni Biance",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Cyprus Mediterranean",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Godfather",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Father of Pizza",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Mr. Porky Special",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Create your own Pizza (4 Toppings)",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Florentina",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Donner Spotter",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "BBQ Margherita",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/94cb889a-8f26-4ec4-b879-c5dd0ddf1f37_thumb.jpg",
    },
    {
      title: "Pollo",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/542547ec-cf06-418c-9fea-70d0ae196c93_thumb.jpg",
    },
    {
      title: "Al Funghi",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Hellumi Vegetarian",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Vegetarian",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/e5a4347a-8bc2-4569-8279-2bf3fd0f6060_thumb.jpg",
    },
    {
      title: "Veggie Supreme",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/91226890-5e7a-4e93-94fc-731b9130a5a6_thumb.jpg",
    },
    {
      title: "Pepperoni Passion",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Hawaiian",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/1aec4bb9-4bbf-4c19-b3aa-8c2ffeef0bab_thumb.jpg",
    },
    {
      title: "Napoli",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Pancetta e Funghi",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Kiev Pizza",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Prosciutto",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Prosh Funghi",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Sweet &  Sour Chicken",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Pollo Funghi",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Special Donner",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Prosh Pollo",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "American Farm House",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Hot Shot",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/85971af5-9d77-46c1-a21f-2fac8d723140_thumb.jpg",
    },
    {
      title: "Texas BBQ",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "BBQ Chicken",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Cheese Burger Chips Pizza",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Marzano Charizo",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Mexicano",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f88755e6-3153-4e71-8c38-6387aedff883_thumb.jpg",
    },
    {
      title: "Bolognese",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/35f1adba-54ae-4f77-8c8f-50d647fbaf3d_thumb.jpg",
    },
    {
      title: "Chicken Party",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Texas Dream",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Toscano",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
    {
      title: "Create your own Pizza (2 Toppings)",
      description:
        "Tomato Base, Pepperoni, Mushroom, Onion, Jalepeno, Black Olives, & Mozarella",
      image: "",
    },
  ];

  var pizzas = pizza.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var mealdeal = [
    {
      title: "Smiley Face",
      description: "Any 14 inch pizza, 1 chips and 2 cans of drinks",
      price: 15.9,
    },
    {
      title: "Pizza Offer",
      description: "Any 2x10 inch pizza, 1 chips and 2 cans of drinks",
      price: 17.9,
    },
    {
      title: "Happy Box",
      description:
        "Any 10 inch pizza, any quarter burger, 2x chips and 2 cans of drinks",
      price: 16.9,
    },
    {
      title: "Happy Burger",
      description:
        "Any 2x Quarter Pounder Burger, 2 chips and 2 cans of drinks",
      price: 14.9,
    },
  ];

  var mealdeals = mealdeal.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var parmesan = [
    {
      title: "Parmesan",
      description:
        "Our parmesan chicken comes with garlic butter homemade special tomato sauce,...",
      price: 8.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/753a6012-3131-4c9c-b5b1-69a2f45a6262_thumb.jpg",
    },
  ];

  var parmesans = parmesan.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var platter = [
    {
      title: "Platter",
      description: "",
    },
  ];

  var platters = platter.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  ));

  var dessert = [
    {
      title: "Black Forest Ghetto",
      description: "Black Forest Ghetto",
      price: 3.2,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/94d67980-64a0-4acf-acb2-c70646cfb529_thumb.jpg",
    },
    {
      title: "Cheese Cake",
      description: "Cheese Cake",
      price: 3.2,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/cb40d929-d71b-429b-827b-d4bc12acf47f_thumb.jpg",
    },
    {
      title: "Fudge Cake",
      description: "Fudge Cake",
      price: 3.2,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/6a125b62-9160-475e-b5f9-ab21960c10a1_thumb.jpg",
    },
    {
      title: "Daim Bar Cake",
      description: "Daim Bar Cake",
      price: 3.2,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/5d2504a1-289d-45d6-967f-177274b8da7e_thumb.jpg",
    },
    {
      title: "Sidoli Sophie Clementinas Angle Sparkle Cake",
      description: "Sidoli Sophie Clementinas Angle Sparkle Cake",
      price: 3.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/0833fbfc-30d4-48d2-b4c3-1b081222f21f_thumb.jpg",
    },
  ];

  var desserts = dessert.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var kidsmeal = [
    {
      title: "Chicken Bites (5 Pcs)",
      description: "Comes with Chips and Kids Drink",
      price: 5.5,
    },
    {
      title: "Chicken Nuggets (5 Pcs)",
      description: "Comes with Chips and Kids Drink",
      price: 5.5,
    },
    {
      title: "Chicken Strips (3 Pcs)",
      description: "Comes with Chips and Kids Drink",
      price: 5.5,
    },
    {
      title: "Chicken Popcorn",
      description: "Comes with Chips and Kids Drink",
      price: 5.5,
    },
    {
      title: "Donner Meat",
      description: "Comes with Chips and Kids Drink",
      price: 5.5,
    },
  ];

  var kidsmeals = kidsmeal.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}(Kids Meal)</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var dip = [
    {
      title: "Homemade Garlic Mayo",
      price: 1.0,
    },
    {
      title: "Tomato Sauce",
      price: 1.0,
    },
    {
      title: "Chilli Sauce",
      price: 1.0,
    },
    {
      title: "Sweet Chilli",
      price: 1.0,
    },
    {
      title: "Salad Cream",
      price: 1.0,
    },
    {
      title: "BBQ Sauce",
      price: 1.0,
    },
    {
      title: "Sweet & Sour",
      price: 1.0,
    },
    {
      title: "Sour Cream Chives",
      price: 1.0,
    },
    {
      title: "Garlic & Herbs",
      price: 1.0,
    },
    {
      title: "Burger Sauce",
      price: 1.0,
    },
  ];

  var dips = dip.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var kebab = [
    {
      title: "Chicken Kebab",
      description: "Chicken Kebab",
      price: null,
    },
    {
      title: "Chicken Tikka",
      description: "Chicken Tikka",
      price: null,
    },
    {
      title: "Chicken Mix Kebab",
      description: "Chicken Mix Kebab",
      price: null,
    },
    {
      title: "Donner Kebab",
      description: "Donner Kebab",
      price: null,
    },
    {
      title: "Donner Meat & Chips",
      description: "Donner Meat & Chips",
      price: null,
    },
    {
      title: "Kofte & Chicken Kebab",
      description: "Kofte & Chicken Kebab",
      price: null,
    },
    {
      title: "Kofte & Chicken Tikka Kebab",
      description: "Kofte & Chicken Tikka Kebab",
      price: null,
    },
    {
      title: "Kofte Kebab",
      description: "Kofte Kebab",
      price: null,
    },
    {
      title: "Tray of Donner Meat",
      description: "Plain Donner, No Naan, No Salad, No Sauce",
      price: 6.0,
    },
    {
      title: "Happy's Box",
      description: "Donner Meat, 4 Strips, 4 Chicken Bites & Chips",
      price: 9.9,
    },
    {
      title: "Happy's Special",
      description:
        "Combination of Chicken, Kebab, Chicken Tikka & Donner Meat & chips",
      price: 14.9,
    },
  ];

  var kebabs = kebab.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var wrap = [
    {
      title: "Chicken Kebab Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "Chicken Tikka Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "Combo Wrap",
      description: "",
      price: 7.9,
    },
    {
      title: "Donner Wrap",
      description: "",
      price: 6.2,
    },
    {
      title: "Donner & Chicken Strips Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "Chicken Strips & Crispy Bacon Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "BBQ Chicken Strips Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "Cheese Burger Chips Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "Chicken Strips Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "Saucy Meatballs & Crispy Bacon Wrap",
      description: "",
      price: 7.5,
    },
    {
      title: "Cheesy Chips Wrap",
      description: "",
      price: 5.9,
    },
  ];

  var wraps = wrap.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var spicywing = [
    {
      title: "4 Spicy Wings",
      price: 5.5,
    },
    {
      title: "6 Spicy Wings",
      price: 6.5,
    },
    {
      title: "10 Spicy Wings",
      price: 9.8,
    },
  ];

  var spicywings = spicywing.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var icecream = [
    {
      title: "Ben & Jerry's",
      price: 6.0,
    },
    {
      title: "Chocolate Fudge Brownie",
      price: 6.0,
    },
    {
      title: "Cookie Dough",
      price: 6.0,
    },
  ];

  var icecreams = icecream.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var speciality = [
    {
      title: "Chilli Con Carne",
      description: "Served with Salad & Chips",
      price: 7.9,
    },
    {
      title: "Chicken Curry",
      description: "Served with Salad & Chips",
      price: 7.9,
    },
    {
      title: "Pizza Burger",
      description:
        "Inside Pizza Base Dough Double Cheese Burger, Comes with Chips & Pot of Sauce",
      price: 9.5,
    },
    {
      title: "Melting Meatballs",
      description:
        "20 Mini Pork Meatballs with our special Tomato Sauce & Mozarella Cheese",
      price: 7.9,
    },
    {
      title: "Spicy Melting Meatballs",
      description:
        "20 Mini Pork Meatballs with our special Tomato Sauce, Fresh Chilli, Jalepenos &...",
      price: 7.9,
    },
    {
      title: "Melting Chicken Pieces",
      description:
        "Battered Chicken Pieces with our Special Tomato Sauce & Mozarella Cheese",
      price: 7.9,
    },
    {
      title: "Scampi",
      description: "Served with Chips, Salad & Tartar Sauce",
      price: 7.9,
    },
  ];

  var specialities = speciality.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var sideorder = [
    {
      title: "Chips",
      description: "",
      price: null,
    },
    {
      title: "Chicken Bites (10 Pcs)",
      description: "",
      price: 5.5,
    },
    {
      title: "Cheesy Garlic Mushroom",
      description: "",
      price: 5.5,
    },
    {
      title: "Pitta Bread",
      description: "",
      price: 0.8,
    },
    {
      title: "Special Coleslaw",
      description: "",
      price: 3.5,
    },
    {
      title: "Side Salad",
      description: "",
      price: 2.9,
    },
    {
      title: "Onion Rings (10 Pcs)",
      description: "With Garlic Dips",
      price: 3.5,
    },
    {
      title: "Hash Brown",
      description: "",
      price: 4.0,
    },
    {
      title: "Chicken Bites (10 Pcs) & Chips",
      description: "",
      price: 6.6,
    },
    {
      title: "Chicken Popcorn & Chips",
      description: "",
      price: 6.5,
    },
    {
      title: "Chips & Cheese",
      description: "",
      price: null,
    },
    {
      title: "Chicken Popcorn",
      description: "",
      price: 5.5,
    },
    {
      title: "Chicken Strips & Chicken",
      description: "",
      price: 6.5,
    },
    {
      title: "Chicken Strips (4 Pcs)",
      description: "",
      price: 5.0,
    },
    {
      title: "Cheeseos (5 Pcs)",
      description: "",
      price: 4.6,
    },
    {
      title: "Mozarella Dippers (8 Pcs)",
      description: "",
      price: 5.5,
    },
    {
      title: "Crispy Jalepenos Cheese Bites (8 Pcs)",
      description: "",
      price: 5.5,
    },
    {
      title: "Potato Wedges",
      description: "",
      price: 3.9,
    },
    {
      title: "Curly Fries",
      description: "",
      price: 3.9,
    },
    {
      title: "Brended Garlic Mushroom",
      description: "With Garlic Dips",
      price: 4.5,
    },
  ];

  var sideorders = sideorder.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-12 responsiveness">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
    </div>
  ));

  var garlicbread = [
    {
      title: "Garlic Bread Plain 10 in",
      description: "Garlic Bread Plain 10 in",
      price: 4.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f78e98ed-5499-4c38-9e63-93e411c64e8c_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Donner 14 in",
      description: "Garlic Bread Cheese & Donner 14 in",
      price: 9.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/e4e63ddd-52b3-4301-8754-7bd45a680afe_thumb.jpg",
    },
    {
      title: "Happy's Special 12 in",
      description: "Cheesy Chips Bread",
      price: 8.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/2d1bc212-ef1e-4e0c-ab00-ce077847069d_thumb.jpg",
    },
    {
      title: "Happy's Special 10 in",
      description: "Cheesy Chips Bread",
      price: 7.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/93d35415-517e-4c07-8026-1d9383cc89b3_thumb.jpg",
    },
    {
      title: "Spicy Garlic Bread 14 in",
      description: "Garlic Butter, Cheese, Onion, Jalepeno",
      price: 9.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/6c24fbcb-b69b-40f1-a778-5bcfa63c78fc_thumb.jpg",
    },
    {
      title: "Spicy Garlic Bread 12 in",
      description: "Garlic Butter, Cheese, Onion, Jalepeno",
      price: 7.8,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/b75d40d8-4de4-4b79-a6a8-b1b7bf9eb4c8_thumb.jpg",
    },
    {
      title: "Spicy Garlic Bread 14 in",
      description: "Garlic Butter, Cheese, Onion, Jalepeno",
      price: 6.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/c407f524-3c20-4bed-aef6-d125b5f0cd92_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Mushroom 14 in",
      description: "Garlic Bread Cheese & Mushroom 14 in",
      price: 9.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/2e2c8659-c2bd-445a-be19-3f644aefc426_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Mushroom 12 in",
      description: "Garlic Bread Cheese & Mushroom 12 in",
      price: 7.8,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/2e2c8659-c2bd-445a-be19-3f644aefc426_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Mushroom 10 in",
      description: "Garlic Bread Cheese & Mushroom 10 in",
      price: 6.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/2e2c8659-c2bd-445a-be19-3f644aefc426_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Chicken 14 in",
      description: "Garlic Bread Cheese & Chicken 14 in",
      price: 9.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/53266a98-1b92-4264-8f77-a1a6814dc3ed_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Chicken 12 in",
      description: "Garlic Bread Cheese & Chicken 12 in",
      price: 7.8,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/53266a98-1b92-4264-8f77-a1a6814dc3ed_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Chicken 10 in",
      description: "Garlic Bread Cheese & Chicken 10 in",
      price: 6.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/53266a98-1b92-4264-8f77-a1a6814dc3ed_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Donner 12 in",
      description: "Garlic Bread Cheese & Donner 12 in",
      price: 7.8,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/ffdf18d7-96a9-433e-ac44-a02481a93c29_thumb.jpg",
    },
    {
      title: "Garlic Bread Plain 12 in",
      description: "Garlic Bread Plain 12 in",
      price: 5.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/d100e8db-1150-4181-acba-44fb8b13b775_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Donner 10 in",
      description: "Garlic Bread Cheese & Donner 10 in",
      price: 6.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/a3233e3f-022b-4934-a1ca-9a0ba018ee29_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Tomato 14 in",
      description: "Garlic Bread Cheese & Tomato 14 in",
      price: 9.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/3dcb7fa5-3919-4304-9171-7fe5a6b049ed_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Tomato 12 in",
      description: "Garlic Bread Cheese & Tomato 12 in",
      price: 7.8,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/3dcb7fa5-3919-4304-9171-7fe5a6b049ed_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese & Tomato 10 in",
      description: "Garlic Bread Cheese & Tomato 10 in",
      price: 6.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/3dcb7fa5-3919-4304-9171-7fe5a6b049ed_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese 14 in",
      description: "Garlic Bread Cheese 14 in",
      price: 8.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f28a23d1-9a69-4d7c-893a-0067217f96e3_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese 12 in",
      description: "Garlic Bread Cheese 12 in",
      price: 7.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f28a23d1-9a69-4d7c-893a-0067217f96e3_thumb.jpg",
    },
    {
      title: "Garlic Bread Cheese 10 in",
      description: "Garlic Bread Cheese 10 in",
      price: 6.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f28a23d1-9a69-4d7c-893a-0067217f96e3_thumb.jpg",
    },
    {
      title: "Garlic Bread Tomato 14 in",
      description: "Garlic Butter, Tomato Sauce",
      price: 7.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/d22bb23b-d266-4961-b66e-689283d97718_thumb.jpg",
    },
    {
      title: "Garlic Bread Tomato 12 in",
      description: "Garlic Butter, Tomato Sauce",
      price: 6.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/d22bb23b-d266-4961-b66e-689283d97718_thumb.jpg",
    },
    {
      title: "Garlic Bread Tomato 10 in",
      description: "Garlic Butter, Tomato Sauce",
      price: 5.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/d22bb23b-d266-4961-b66e-689283d97718_thumb.jpg",
    },
    {
      title: "Garlic Bread Plain 14 in",
      description: "Garlic Bread Plain 14 in",
      price: 6.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/9927bd54-95ad-48cf-8371-de130a7e2ca6_thumb.jpg",
    },
    {
      title: "Happy's Special 14 in",
      description: "Cheesy Chips Bread",
      price: 10.0,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/f1763f45-044e-4f4f-a351-913d068d385e_thumb.jpg",
    },
  ];

  var garlicbreads = garlicbread.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var calzone = [
    {
      title: "Calzone 10 in",
      description:
        "All pizzas can be made into calzone. All calzones come with chips and homemade...",
      price: 8.6,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/db1937f6-4ff7-4e8f-99e8-96be4b9977e7_thumb.jpg",
    },
    {
      title: "Calzone 12 in",
      description:
        "All pizzas can be made into calzone. All calzones come with chips and homemade...",
      price: 9.8,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/db1937f6-4ff7-4e8f-99e8-96be4b9977e7_thumb.jpg",
    },
    {
      title: "Calzone 14 in",
      description:
        "All pizzas can be made into calzone. All calzones come with chips and homemade...",
      price: 11.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/db1937f6-4ff7-4e8f-99e8-96be4b9977e7_thumb.jpg",
    },
  ];

  var calzones = calzone.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var burger = [
    {
      title: "Beef Burger 1/4 Pounder",
      description: "Beef Burger 6oz",
      price: 5.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/e0b5ac6c-0475-4d83-a1f1-986f92f53b20_thumb.jpg",
    },
    {
      title: "Ring Burger 3/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 7.5,
      image: "",
    },
    {
      title: "Special Burger 2/4 Pounder",
      description: "Cheese, Donner Meat",
      price: 6.5,
      image: "",
    },
    {
      title: "Special Burger 3/4 Pounder",
      description: "Cheese, Donner meat",
      price: 7.5,
      image: "",
    },
    {
      title: "Hawaiian Burger 1/4 Pounder",
      description: "Cheese, Pineapple",
      price: 5.5,
      image: "",
    },
    {
      title: "Hawaiian Burger 2/4 Pounder",
      description: "Cheese, Pineapple",
      price: 6.5,
      image: "",
    },
    {
      title: "Hawaiian Burger 3/4 Pounder",
      description: "Cheese, Pineapple",
      price: 7.5,
      image: "",
    },
    {
      title: "Cheesy Omelette Burger 1/4 Pounder",
      description: "",
      price: 5.5,
      image: "",
    },
    {
      title: "Cheesy Omelette Burger 1/4 Pounder",
      description: "",
      price: 6.5,
      image: "",
    },
    {
      title: "Cheesy Omelette Burger 18oz",
      description: "",
      price: 7.5,
      image: "",
    },
    {
      title: "Ring Burger 1/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 5.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
    {
      title: "Ring Burger 2/4 Pounder",
      description: "Cheese, Onion Rings",
      price: 6.5,
      image: "",
    },
  ];

  var burgers = burger.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  var chickenfilletburger = [
    {
      title: "BBQ Chicken Fillet Burger 1/4 Pounder",
      description: "Chicken Burger and Bacon",
      price: 5.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/65f93675-247d-49dd-b6dd-fde4b51e7018_thumb.jpg",
    },
    {
      title: "BBQ Chicken Fillet Burger 2/4 Pounder",
      description: "Chicken Burger and Bacon",
      price: 6.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/1ad3d6ee-96f5-4021-bc9d-9db70244559a_thumb.jpg",
    },
    {
      title: "BBQ Chicken Fillet Burger 3/4 Pounder",
      description: "Chicken Burger and Bacon",
      price: 7.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/118fbe78-5e49-4f10-b54a-36645bb18a19_thumb.jpg",
    },
    {
      title: "Chicken Fillet Burger 1/4 Pounder",
      description: "",
      price: 5.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/5c8fcbbb-b5b1-4065-a73d-2a3107809d46_thumb.jpg",
    },
    {
      title: "Chicken Fillet Burger 2/4 Pounder",
      description: "",
      price: 6.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/9975bfb9-d1fb-455b-b0cc-05023b3113e2_thumb.jpg",
    },
    {
      title: "Chicken Fillet Burger 3/4 Pounder",
      description: "",
      price: 7.5,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/0ca8e137-4256-4f8f-af9f-2f8851585373_thumb.jpg",
    },
    {
      title: "Cheeky Chicken Fillet Burger 1/4 Pounder",
      description: "Cheese, Donner Meat",
      price: 5.7,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/15708141-bb7f-4f43-82f0-a469df2dc824_thumb.jpg",
    },
    {
      title: "Cheeky Chicken Fillet Burger 2/4 Pounder",
      description: "Cheese, Donner Meat",
      price: 6.7,
      image:
        "https://www.happyspizzaburger.co.uk/uploads/restorants/9378d2de-a95f-4f17-9710-c79f8ba3d631_thumb.jpg",
    },
    {
      title: "Cheeky Chicken Fillet Burger 3/4 Pounder",
      description: "Cheese, Donner Meat",
      price: 7.7,
      image: "",
    },
    {
      title: "Spring Burger 1/4 Pounder",
      description: "Cheese & Hash Brown",
      price: 5.7,
      image: "",
    },
    {
      title: "Spring Burger 2/4 Pounder",
      description: "Cheese & Hash Brown",
      price: 6.7,
      image: "",
    },
    {
      title: "Spring Burger 3/4 Pounder",
      description: "Cheese & Hash Brown",
      price: 7.7,
      image: "",
    },
    {
      title: "Happy's Chicken Burger 1/4 Pounder",
      description: "Cheese, Bacon, Lettuce Mayo",
      price: 5.7,
      image: "",
    },
    {
      title: "Happy's Chicken Burger 2/4 Pounder",
      description: "Cheese, Bacon, Lettuce Mayo",
      price: 6.7,
      image: "",
    },
    {
      title: "Happy's Chicken Burger 3/4 Pounder",
      description: "Cheese, Bacon, Lettuce Mayo",
      price: 7.7,
      image: "",
    },
  ];

  var chickenfilletburgers = chickenfilletburger.map((item) => (
    <div
      className="row productcard bs"
      type="button"
      onClick={() => {
        showmodal(item);
      }}
      // data-bs-toggle="modal"
      // data-bs-target="#addtocart"
    >
      <div className="col-xl-7">
        <h5 className="boldtext">{item.title}</h5>
        <p>{item.description}</p>
        <h5>${item.price}</h5>
      </div>
      <div className="col-xl-5">
        <img className="productimg" src={item.image} />
      </div>
    </div>
  ));

  return (
    <>
      <div className="scrollingoff">
        <Navbar/>

        <div className="row justify-content-center">
          <div className="col-xl-12 text-center">
            <img
              className="menutitleimg"
              src="https://www.happyspizzaburger.co.uk/uploads/restorants/751msq61654252482.jpg"
            />
          </div>
        </div>

        <ul className="nav nav-pills nav-fill sticky-top flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#drinks">
              Drinks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#juice">
              Juice
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#milkshake">
              Milkshake
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#burgermeal">
              Burger Meal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#chickenfillet">
              Chicken Fillet Burger Meal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pizza">
              Pizza
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#mealdeal">
              Meal Deals
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#parmesan">
              Parmesan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#platter">
              Platter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#dessert">
              Dessert
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#kidsmeal">
              Kids Meal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#dips">
              Dips
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#kebab">
              Kebabs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#wrap">
              Wraps
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#spicywing">
              Spicy Wings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#icecream">
              Ice Cream
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#speciality">
              Happy's Specialities
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sideorder">
              Side Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#garlicbread">
              Garlic Bread
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#calzone">
              Calzone
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#burger">
              Burgers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#chickenfilletburger">
              Chicken Fillet Burgers
            </a>
          </li>
        </ul>

        <div className="row productrow" id="drinks">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5 nomargin">Drinks</h3>
            <div className="row centeritems">{drinks}</div>
          </div>
        </div>

        <div className="row productrow" id="juice">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Juices</h3>
            <div className="row centeritems">{juices}</div>
          </div>
        </div>

        <div className="row productrow" id="milkshake">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Milk Shakes</h3>
            <div className="row centeritems">{milkshakes}</div>
          </div>
        </div>

        <div className="row productrow" id="burgermeal">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Burger Meal</h3>
            <div className="row centeritems">{burgermeals}</div>
          </div>
        </div>

        <div className="row productrow" id="chickenfillet">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Chicken Fillet Burger Meal</h3>
            <div className="row centeritems">{chickenfillets}</div>
          </div>
        </div>

        <div className="row productrow" id="pizza">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Pizza</h3>
            <div className="row centeritems">{pizzas}</div>
          </div>
        </div>

        <div className="row productrow" id="mealdeal">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Meal Deals</h3>
            <div className="row centeritems">{mealdeals}</div>
          </div>
        </div>

        <div className="row productrow" id="parmesan">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Parmesan</h3>
            <div className="row centeritems">{parmesans}</div>
          </div>
        </div>

        <div className="row productrow" id="platter">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Platter</h3>
            <div className="row centeritems">{platters}</div>
          </div>
        </div>

        <div className="row productrow" id="dessert">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Dessert</h3>
            <div className="row centeritems">{desserts}</div>
          </div>
        </div>

        <div className="row productrow" id="kidsmeal">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Kids Meal</h3>
            <div className="row centeritems">{kidsmeals}</div>
          </div>
        </div>

        <div className="row productrow" id="dips">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Dips</h3>
            <div className="row centeritems">{dips}</div>
          </div>
        </div>

        <div className="row productrow" id="kebab">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Kebabs</h3>
            <div className="row centeritems">{kebabs}</div>
          </div>
        </div>

        <div className="row productrow" id="wrap">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Wraps</h3>
            <div className="row centeritems">{wraps}</div>
          </div>
        </div>

        <div className="row productrow" id="spicywing">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Spicy Wings</h3>
            <div className="row centeritems">{spicywings}</div>
          </div>
        </div>

        <div className="row productrow" id="icecream">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Ice Creams</h3>
            <div className="row centeritems">{icecreams}</div>
          </div>
        </div>

        <div className="row productrow" id="speciality">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Happy's Specialities</h3>
            <div className="row centeritems">{specialities}</div>
          </div>
        </div>

        <div className="row productrow" id="sideorder">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Side Orders</h3>
            <div className="row centeritems">{sideorders}</div>
          </div>
        </div>

        <div className="row productrow" id="garlicbread">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Garlic Bread</h3>
            <div className="row centeritems">{garlicbreads}</div>
          </div>
        </div>

        <div className="row productrow" id="calzone">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Calzone</h3>
            <div className="row centeritems">{calzones}</div>
          </div>
        </div>

        <div className="row productrow" id="burger">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Burger</h3>
            <div className="row centeritems">{burgers}</div>
          </div>
        </div>

        <div className="row productrow" id="chickenfilletburger">
          <div className="col-xl-12 responsiveness">
            <h3 className="boldtext ms-2 mt-5">Chicken Fillet Burger</h3>
            <div className="row centeritems">{chickenfilletburgers}</div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default MenuPage;
