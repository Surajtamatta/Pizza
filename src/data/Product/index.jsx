import product1 from "../../images/product-1.jpg"
import product2 from "../../images/product-2.jpg"
import product3 from "../../images/product-3.jpg"
import product4 from "../../images/product-4.jpg"
import product5 from "../../images/product-5.jpg"
import product6 from "../../images/product-6.jpg"
import sweet1 from "../../images/sweet-1.jpg"
import sweet2 from "../../images/sweet-2.jpg"
import sweet3 from "../../images/sweet-3.jpg"

export const pizzasdata=[
  {
    id:1,
    name: "Margherita",
    varients: ['small', 'medium', 'large'],
    prices: [
      {
        small: 99,
        medium: 199,
        large: 399,
      },
    ],
    category: "veg",
    image:product1,
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    id:2,
    name: "Farmhouse",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 229,
        medium: 399,
        large: 599,
      }
    ],
    category: "veg",
    image:product2,
    description:
      "Delightful combination of onion, capsicum, tomato & grilled mushroom",
  },
  {
    id:3,
    name: "Veggie Paradise",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 180,
        medium: 290,
        large: 460,
      },
    ],
    category: "veg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
    image:product3
  },
  {
    id:4,
    name: "Chicken Golden Delight",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 249,
        medium: 349,
        large: 599,
      },
    ],
    category: "nonveg",
   image:product4,
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    id:5,
    name: "Chicken Pepperoni",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 320,
        medium: 580,
        large: 800,
      },
    ],
    category: "nonveg",
   image:product5,
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    id:6,
    name: "Indi Chicken Tikka",
    varients: ["small", "medium", "large"],
    prices: [
      {
        small: 250,
        medium: 380,
        large: 500,
      },
    ],
    category: "nonveg",
    image:product6,
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
     


]


export const sweetdata= [
  {
    id:1,
    image:sweet1,
    alt: 'Donuts',
    name: 'Doughlicious',
    desc:
      'Belgian chocolate glazed donuts covered in icing with sprinkles on top',
    prices: 9.99,
  },
  {
    id:2,
    image:sweet2,
    alt: 'Ice Cream',
    name: 'Caramel Wonder',
    desc:
      'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick',
    prices: 12.99,
  },
  {
    id:3,
    image:sweet3,
    alt: 'Brownie',
    name: 'Brownie Bunch',
    desc:
      'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts',
    prices: 9.99,
  }
];
