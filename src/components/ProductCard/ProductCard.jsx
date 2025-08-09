import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({
  image,
  name,
  price,
  variants = ["Default"],
  inStock = true,
  onAddToCart,
  onView,
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={image}
        alt={name}
        onClick={onView}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.price}>${price}</div>
      </div>
      <div className={styles.controls}>
        <select className={styles.select} aria-label="variants">
          {variants.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
        <button
          className={styles.cta}
          type="button"
          disabled={!inStock}
          onClick={inStock ? onAddToCart : undefined}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;


