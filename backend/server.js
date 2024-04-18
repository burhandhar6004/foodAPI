const express = require("express");
require("dotenv").config()
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/app", (req,res)=>{
  res.send("Food Court")
})

app.get("/paratha", (req, res) => {
  res.json([
    {
      _id: "1",
      name: "Plain paratha + Yogurt",
      price: "40",
      description: "Extra Sauce",
      qty: "1",
      category: "paratha",
      img: "https://b.zmtcdn.com/data/dish_photos/a6b/126aa7e892cbad15adbf696d060bba6b.png?fit=around%7C130:130&crop=130:130;*,*",
    },
    {
      _id: "2",
      name: "Aalo Paratha ",
      price: "50",
      description: "Extra Sauce, Yogurt, Cheese",
      qty: "1",
      category: "paratha",
      img: "https://b.zmtcdn.com/data/dish_photos/23f/5ffa97ac943424bd301189912f04723f.jpg?fit=around|130:130&crop=130:130;*,*",
    },
    {
      _id: "3",
      name: "Veg Paratha",
      price: "50",
      description: "Corn, Cabbage, Fenugreek, Cheese",
      qty: "1",
      category: "paratha",
      img: "https://b.zmtcdn.com/data/dish_photos/16f/e4555967361aa1ceb249fabc27c5a16f.jpg?fit=around|130:130&crop=130:130;*,*",
    },
    {
      _id: "4",
      name: "Double Cheese Paratha",
      price: "70",
      description: "Extra Sauce, Yogurt, Corn",
      qty: "1",
      category: "paratha",
      img: "https://b.zmtcdn.com/data/dish_photos/849/7135abe633165d3227ed54c9e4f4e849.jpg?fit=around|130:130&crop=130:130;*,*",
    },
    {
      _id: "5",
      name: "Corn Cheese Paratha",
      price: "80",
      description: "Extra Sauce, Yogurt, Cheese",
      qty: "1",
      category: "paratha",
      img: "https://b.zmtcdn.com/data/dish_photos/6b8/19789e0fec1c374884865abd461ee6b8.png?fit=around|130:130&crop=130:130;*,*",
    },
    {
      _id: "6",
      name: "Paneer Paratha",
      price: "100",
      description: "Extra Sauce, Yogurt, Cheese",
      qty: "1",
      category: "paratha",
      img: "https://b.zmtcdn.com/data/dish_photos/f24/0d6673fdece45efd2a47b556f17d2f24.jpg?fit=around|130:130&crop=130:130;*,*",
    },
  ]);
});

app.get("/burger", (req, res) => {
  res.json([
    {
      _id: "1",
      name: "Wendy burgers",
      price: "200",
      description: "Extra Sauce",
      qty: "1",
      category: "Burger",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/312423/0b140d9303f0ffd4c39d94c43576ba29.jpg?fit=around|300:273&crop=300:273;*,*",
    },
    {
      _id: "2",
      name: "Singh Burger",
      price: "300",
      description: "cheez",
      qty: "1",
      category: "Burger",
      img: "https://b.zmtcdn.com/data/pictures/chains/1/310301/ce87c272e2a248c0a19ea8bc42948dfa.jpg?fit=around|300:273&crop=300:273;*,*",
    },
    {
      _id: "3",
      name: "Wendy burgers",
      price: "200",
      description: "Extra Sauce",
      qty: "1",
      category: "Burger",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/312423/0b140d9303f0ffd4c39d94c43576ba29.jpg?fit=around|300:273&crop=300:273;*,*",
    },
    {
      _id: "4",
      name: "Smolehouse Burger",
      price: "350",
      description: " Sauce",
      qty: "1",
      category: "Burger",
      img: "https://b.zmtcdn.com/data/pictures/4/18787684/927f5dbbc84ba40d6957e60fd89397da.jpg?fit=around|300:273&crop=300:273;*,*",
    },
    {
      _id: "5",
      name: "BurgerWa",
      price: "250",
      description: "cream",
      qty: "1",
      category: "Burger",
      img: "https://b.zmtcdn.com/data/pictures/9/18614929/80b00bc9daa926cbbd9eff789af62525.jpg?fit=around|300:273&crop=300:273;*,*",
    },
    {
      _id: "6",
      name: "Hulk Burger",
      price: "400",
      description: "Extra Sauce",
      qty: "1",
      category: "Burger",
      img: "https://b.zmtcdn.com/data/pictures/chains/6/20851316/e04785edd9b65ca6f12d56d9e58e63e4.jpg?fit=around|300:273&crop=300:273;*,*",
    },
  ]);
});

app.get("/pizza", (req, res) => {
  res.json([
    {
      _id: "1",
      name: "Margherita pizza",
      price: "350",
      description: "cheez",
      qty: "1",
      category: "pizza",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/143/37f6ce4eefbdfb4f5598ae262849b57a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "2",
      name: "Greek Piza",
      price: "300",
      description: " Extra cheez",
      qty: "1",
      category: "pizza",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/143/c751805b5927046d340926f870a95f5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "3",
      name: "Veg pizza",
      price: "500",
      description: "cheez",
      qty: "1",
      category: "pizza",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/143/28c01b6cd6579b395c8b92b61f3fe794.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "4",
      name: "Paneer pizza",
      price: "650",
      description: "cheez",
      qty: "1",
      category: "pizza",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/143/5cf123bb1d92163e8c393b91f6d7182b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "5",
      name: "California pizza",
      price: "700",
      description: "cheez",
      qty: "1",
      category: "pizza",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/143/e38a58c964554dd10abf7dbe20895bfa.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "6",
      name: "Indorii pizza",
      price: "150",
      description: "cheez",
      qty: "1",
      category: "pizza",
      img: "https://b.zmtcdn.com/data/reviews_photos/c41/d1df2d97b2b6d922e7ece3be2e25fc41_1523769865.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
  ]);
});

app.get("/desert", (req, res) => {
  res.json([
    {
      _id: "1",
      name: "Dark Chocholate",
      price: "350",
      description: "cream",
      qty: "1",
      category: "desert",
      img: "https://b.zmtcdn.com/data/pictures/chains/5/312275/9b390531c6efd3a710621ade7bb4366c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "2",
      name: "Blue Berry",
      price: "850",
      description: "cream",
      qty: "1",
      category: "desert",
      img: "https://b.zmtcdn.com/data/pictures/chains/5/312275/dd15a33862f9bf705bf22ffab4122973.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "3",
      name: "Cheez Cake",
      price: "660",
      description: "cream",
      qty: "1",
      category: "desert",
      img: "https://b.zmtcdn.com/data/pictures/chains/5/312275/d3a78c2996c88805c593bef6499e5923.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "4",
      name: "Pudding ",
      price: "220",
      description: "cream",
      qty: "1",
      category: "desert",
      img: "https://b.zmtcdn.com/data/pictures/chains/5/312275/d3a78c2996c88805c593bef6499e5923.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "5",
      name: "Choclate Cake",
      price: "335",
      description: "cream",
      qty: "1",
      category: "desert",
      img: "https://b.zmtcdn.com/data/pictures/chains/5/312275/a61e30c586be8b8c53df7c9026342fe4.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
    {
      _id: "6",
      name: "Carrot Cake",
      price: "440",
      description: "cream",
      qty: "1",
      category: "desert",
      img: "https://b.zmtcdn.com/data/pictures/chains/5/312275/66fa11769fd1bf53ebaad4a961300bd1.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    },
  ]);
});

app.get("/soup", (req,res)=>{
    res.json([
        {
            _id: "1",
            name: "Tomato Soup",
            price: "350",
            description: "",
            qty: "1",
            category: "soup",
            img: "https://b.zmtcdn.com/data/pictures/chains/2/19354452/2f2bccf3d12d1ba3626f0f4b499f7def.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "2",
            name: "Veg Soup",
            price: "150",
            description: "",
            qty: "1",
            category: "soup",
            img: "https://b.zmtcdn.com/data/pictures/chains/2/19354452/286d1f7d89f63f9ac0948856d8c2fed1.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "3",
            name: "Brocoli Soup",
            price: "110",
            description: "",
            qty: "1",
            category: "soup",
            img: "https://b.zmtcdn.com/data/pictures/chains/2/19354452/ddf798c73c7e91ee60297d4648e81c61.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "4",
            name: "French Onion Soup",
            price: "210",
            description: "",
            qty: "1",
            category: "soup",
            img: "https://b.zmtcdn.com/data/pictures/chains/2/19354452/934361c9243d3a9ea13aaba0b8c07873.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "5",
            name: "Lentil Soup",
            price: "150",
            description: "",
            qty: "1",
            category: "soup",
            img: "https://b.zmtcdn.com/data/pictures/chains/2/19354452/74633533d053186b3b88c0fd8b455276.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "6",
            name: "Cheese Soup",
            price: "180",
            description: "",
            qty: "1",
            category: "soup",
            img: "https://b.zmtcdn.com/data/pictures/chains/2/19354452/74633533d053186b3b88c0fd8b455276.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },
    ])
})

app.get("/beverages", (req,res)=>{
    res.json([
        {
            _id: "1",
            name: "Pinaple",
            price: "65",
            description: "",
            qty: "1",
            category: "bev",
            img: "https://b.zmtcdn.com/data/pictures/chains/9/300749/d7c8926cb0788a6e06a972a5da8e740c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "2",
            name: "Cold Cofee",
            price: "210",
            description: "",
            qty: "1",
            category: "bev",
            img: "https://b.zmtcdn.com/data/pictures/chains/9/300749/558880818932a76684fdd07fa67fe2ca.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "3",
            name: "Coconut Crush",
            price: "125",
            description: "",
            qty: "1",
            category: "bev",
            img: "https://b.zmtcdn.com/data/pictures/chains/9/300749/32312b4f9c9d14ff4ef1da7d573b4977.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "4",
            name: "Orange Juice",
            price: "140",
            description: "",
            qty: "1",
            category: "bev",
            img: "https://b.zmtcdn.com/data/pictures/chains/9/300749/74a321f4ecdc130db97e21f394b9005a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "5",
            name: "Tea",
            price: "60",
            description: "",
            qty: "1",
            category: "bev",
            img: "https://b.zmtcdn.com/data/pictures/chains/9/300749/7a8bdf2a9c14575962f0e047e8e00bb0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },

          {
            _id: "6",
            name: "Lemon Tea",
            price: "80",
            description: "",
            qty: "1",
            category: "bev",
            img: "https://b.zmtcdn.com/data/pictures/chains/9/300749/4626f8a8886e9891568c3835aad03bde.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
          },
    ])
})

app.get("/app", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server running on  PORT ${PORT}`);
});
