import React from 'react';
import './products.css';

const productsData = [
  {
    id: 1,
    title: "Սքրեչ գլոբուս",
    category: "Հոբբի, Տան համար",
    price: "49,900",
    image: "https://want.am/wp-content/uploads/2026/04/119124_1e7a4991-square-scaled.jpg",
    isNew: true
  },
  {
    id: 2,
    title: "Իրերի օրգանայզեր «Գանգ»",
    category: "Կանանց համար, Տան համար",
    price: "31,900",
    image: "https://want.am/wp-content/uploads/2026/04/75120_b00bety78m.pt01_2000x.webp",
    isNew: true
  },
   {
    id: 3,
    title: "Լուսամփոձ Bookrest",
    category: "լուսամփոփներ, Տան համար",
    price: "25,500",
    image: "https://want.am/wp-content/uploads/2026/04/61dqgoh8sql._ac_sl1200_.jpg",
    isNew: true
  },
  {
    id: 4,
    title: "Լուսամփոձ Love potion",
    category: "Կանանց համար, կանանց համար",
    price: "21,500",
    image: "https://want.am/wp-content/uploads/2026/04/111253_lovepotiononshelfsquare03-1-scaled.jpg",
    isNew: true
  },
   {
    id: 5,
    title: "Զարդերի օրգանայզեր Skeleton Hand",
    category: "Կանանց համար, Տան համար",
    price: "20,500",
    image: "https://want.am/wp-content/uploads/2026/04/life-white-final-black-04_58235_2000x.webp",
    isNew: true
  },
  {
    id: 6,
    title: "Շշի բացիչ «Գանգ»",
    category: "Խոհանոցի համար, Տան համար",
    price: "11,500",
    image: "https://want.am/wp-content/uploads/2026/04/dsc07825_1000x.webp",
    isNew: true
  },
  {
    id: 7,
    title: "Կերամիկական փղիկ «Մեմո»",
    category: "Խոհանոցի համար, Տան համար",
    price: "15,900",
    image: "https://want.am/wp-content/uploads/2026/04/94357_eric-0029-5sq-scaled.jpg",
    isNew: true
  },
  {
    id: 8,
    title: "Պտտվող գլոբուս",
    category: "Գրասենյակային, Տան համար",
    price: "13,900",
    image: "https://want.am/wp-content/uploads/2026/04/88482_lukrg-24.jpg",
    isNew: true
  },
  {
    id: 9,
    title: "Շշի բացիչ «Բիլիարդի գնդակ»",
    category: "Խոհանոցի համար, Տան համար",
    price: "9,900",
    image: "https://want.am/wp-content/uploads/2026/04/ccf66045d090a868d904c0027b4fe725eec8c4b5a8480925d23a3bd203e5b1d9-scaled.webp",
    isNew: true
  },
  {
    id: 10,
    title: "Փայտե կոնստրուկտոր Classic Carousel",
    category: "Robotime, Կոնստրուկտորներ",
    price: "29,900",
    image: "https://want.am/wp-content/uploads/2026/03/5-35.webp",
    isNew: false
  },
  {
    id: 11,
    title: "3D կոնստրուկտոր Sunset Carnival",
    category: "Robotime, Կոնստրուկտորներ",
    price: "26,500",
    image: "https://want.am/wp-content/uploads/2026/03/%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2026-03-30-175942.png",
    isNew: false
  },
  {
    id: 12,
    title: "3D կոնստրուկտոր Sakura Journey",
    category: "Robotime, Կոնստրուկտորներ",
    price: "12,500",
    image: "https://want.am/wp-content/uploads/2026/03/%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2026-04-01-125924.png",
    isNew: false
  },
  {
    id: 13,
    title: "Roombox-կոնստրուկտոր և Book Nook Silent Corner Study",
    category: "Robotime, Կոնստրուկտորներ",
    price: "15,500",
    image: "https://want.am/wp-content/uploads/2026/03/tge02-4_1800x-600x600.webp",
    isNew: false
  },
  {
    id: 14,
    title: "Roombox-կոնստրուկտոր և Book Nook Arcade Dating",
    category: "Robotime, Կոնստրուկտորներ",
    price: "20,500",
    image: "https://want.am/wp-content/uploads/2026/03/1_8c1ddd97-7f98-44e0-b57c-4b07d7618584-600x600.webp",
    isNew: false
  },
  {
    id: 15,
    title: "Roombox-կոնստրուկտոր Magic Astronomy Shop",
    category: "Robotime, Կոնստրուկտորներ",
    price: "7,900",
    image: "https://want.am/wp-content/uploads/2026/03/magicastronomyshopds048-12-600x600.webp",
    isNew: false
  },
  {
    id: 16,
    title: "Roombox-կոնստրուկտոր Becka's Baking House",
    category: "Robotime, Կոնստրուկտորներ",
    price: "19,900",
    image: "https://want.am/wp-content/uploads/2026/03/71p0fufym5l._ac_sl1500_-600x600.jpg",
    isNew: false
  },
  {
    id: 17,
    title: "3D կոնստրուկտոր Swing Ride",
    category: "Robotime, Կոնստրուկտորներ",
    price: "26,500",
    image: "https://want.am/wp-content/uploads/2026/03/%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2026-03-28-195546-1-600x602.png",
    isNew: false
  },
  {
    id: 18,
    title: "3D կոնստրուկտոր Starry Night",
    category: "Robotime, Կոնստրուկտորներ",
    price: "14,500",
    image: "https://want.am/wp-content/uploads/2026/03/81xj9efooal._ac_sl1500_.jpg",
    isNew: false
  },
  {
    id: 19,
    title: "3D կոնստրուկտոր Monocular Telescope",
    category: "Robotime, Կոնստրուկտորներ",
    price: "15,500",
    image: "https://want.am/wp-content/uploads/2026/03/16619262e98466dd2ed34071631b1e8c-600x612.jpg",
    isNew: false
  },
  {
    id: 20,
    title: "3D կոնստրուկտոր Luminous globe",
    category: "Robotime, Կոնստրուկտորներ",
    price: "26,500",
    image: "https://want.am/wp-content/uploads/2026/03/%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2026-03-28-184047-600x603.png",
    isNew: false
  },
  {
    id: 21,
    title: "Փայտե Կոնստրուկտոր Mechanical Orrery",
    category: "Robotime, Կոնստրուկտորներ",
    price: "43,900",
    image: "https://want.am/wp-content/uploads/2026/03/b6582a34045ade7687769a46d3b81db5-600x600.webp",
    isNew: false
  },
  {
    id: 22,
    title: "3D կոնստրուկտոր Deep-sea Adventurer",
    category: "Robotime, Կոնստրուկտորներ",
    price: "9,500",
    image: "https://want.am/wp-content/uploads/2026/03/%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2026-03-30-202505-600x601.png",
    isNew: false
  },
  {
    id: 23,
    title: "3D կոնստրուկտոր Road Tripper",
    category: "Robotime, Կոնստրուկտորներ",
    price: "9,500",
    image: "https://want.am/wp-content/uploads/2026/03/%D1%81%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2026-03-31-110739.png",
    isNew: false
  },
  {
    id: 24,
    title: "3D կոնստրուկտոր Ocean Fisher",
    category: "Robotime, Կոնստրուկտորներ",
    price: "9,500",
    image: "https://want.am/wp-content/uploads/2026/03/mcd02-wooden-puzzle-5-600x600.webp",
    isNew: false
  }
];

export default function Products() {
  return (
    
    <>
 
    <div className="products-container">
      {productsData.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            {product.isNew && <span className="new-badge">NEW</span>}
            <img src={product.image} alt={product.title} />
          </div>
          
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">{product.price} ֏</p>
          </div>

          <button className="add-to-cart">
            <i class="fa-solid fa-cart-shopping"></i> Ավելացնել
          </button>
        </div>
      ))}
    </div>
      <div className="view-more-container">
        <button className="view-more-btn">
          Տեսնել ավելին
        </button>
      </div>
    </>
    
  );
}