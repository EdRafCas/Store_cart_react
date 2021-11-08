import Product1 from './../img/product-1.jpg';
import Product2 from './../img/product-2.jpg';
import Product3 from './../img/product-3.jpeg';
import Product4 from './../img/product-4.jpg';
import Product5 from './../img/product-5.jpeg';
import Product6 from './../img/product-6.jpeg';
import Product7 from './../img/product-7.jpg';
import Product8 from './../img/product-8.jpg';

 const ProductList =[
      { id: 1,
        src: Product1,
        color: "Red",
        category: "Pants",
        name: "Red Cargo Pants",
        nametag: "red-cargo-pants",
        alt:"Red cargo pants",
        price: 4000,
      },
      { id: 2,
        src: Product2,
        color: "White",
        category: "Headwear",
        name: "White Cap",
        nametag: "white-cap",
        alt:"White Cap",
        price: 2000,
        oldPrice: "$3000"
      },
      { id: 3,
        src: Product3,
        color: "Black",
        category: "Pants",
        name: "Black Cargo Pants",
        nametag: "black-cargo-pants",
        alt:"Black Cargo Pants",
        price: 4500,
        
      },
      { id: 4,
        src: Product4,
        color: "Black and white",
        category: "Outfits",
        name: "Black and white outfit",
        nametag: "black-and-white-outfit",
        alt:"Black and white outfit",
        price: 8500,
        oldPrice: "$6500"
      },
      
      { id: 5,
        src: Product5,
        color: "Purple",
        category: "Pants",
        name: "Purple Cargo Pants",
        nametag: "purple-cargo-pants",
        alt:"Purple cargo pants",
        price: 5500,
      },
      
      { id: 6,
        src: Product6,
        color: "Black and white",
        category: "Pants",
        name: "Black and white Cargo Pants",
        nametag: "black-and-white-cargo-pants",
        alt:"Black and white cargo pants",
        price: 5500,
        oldPrice: "$6500"
      },
      
      { id: 7,
        src: Product7,
        color: "White",
        category: "Outfits",
        name: "White outfit",
        nametag: "white-outfit",
        alt:"White outfit",
        price: 6500,
        oldPrice: "$7500"
      },
      { id: 8,
        src: Product8,
        color: "Black and white",
        category: "Outfits",
        name: "Cross outfit",
        nametag: "cross-outfit",
        alt:"Cross outfit",
        price: 8900,
        oldPrice: "$10000"
      },
    ];

const Categories = [
    "Pants", "Shirts", "Outfits", "Headwear", "Sweaters", "Accesories"
]
export {ProductList, Categories};