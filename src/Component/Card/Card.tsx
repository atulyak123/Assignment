import  { useState } from 'react';
import styles from './card.module.css';
import productimage from '../../assets/product image.svg';
const productData=[
  {id:1,
    header:'Beige-Me Up, Buttercup!',
    content:' Your Daily Dollop of Dazzlingly Delightful Neutral Chic.',
    description:`Welcome to the wonderful world of beige—where subtlety meets sass and
        neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy
        complexion savior packaged in a warm, welcoming shade that’s guaranteed
        to make your routine feel as smooth as a spoonful of caramel mousse.
        Spread it on with glee, knowing you’re delivering a glow that whispers,
        “I’m effortless” while winking mischievously at the mirror. It’s time to
        embrace the hue that never tries too hard, because sometimes being
        gorgeously, gloriously beige is the most enchanting statement of all.`
  },
  {id:2,
      header:'Tropical Delight',
      content:' Your Daily Dollop of Dazzlingly Delightful Neutral Chic.',
    description:`elcome to the wonderful world of beige—where subtlety meets sass and
        neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy
        complexion savior packaged in a warm, welcoming shade that’s guaranteed
        to make your routine feel as smooth as a spoonful of caramel mousse.
        Spread it on with glee, knowing you’re delivering a glow that whispers,
        “I’m effortless” while winking mischievously at the mirror. It’s time to
        embrace the hue that never tries too hard, because sometimes being
        gorgeously, gloriously beige is the most enchanting statement of all.`
    }
]
export const ProductCard = (): any => {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>(
    {}
  );

  // Handle card click to toggle expansion
  const toggleExpansion = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the specific card's state
    }));
  };

  return (
    <>
    {productData.map((product)=>{
      return(
        <div className={styles.card} onClick={() => toggleExpansion(product.id)}
        key={product.id}>
      <img src={productimage} alt="Product Image" className={styles.image} />
      <div className={styles.headerText}>{product.header}</div>
      <div className={styles.content}>
       {product.content}
      </div>

      {/* Add onClick to toggle the expanded description */}
      <div
        className={`${styles.description} ${
              expandedCards[product.id] ? styles.open : ''
            }`}
      >
        {product.description}
      </div>

      <button className={styles.button}>Buy Me</button>
    </div>
      )
      
    })}
  
     
    </>
  );
};