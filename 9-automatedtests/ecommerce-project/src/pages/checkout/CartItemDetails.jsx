import { formatMoney } from "../../utils/money";
import { useState } from "react";
import axios from "axios";

export function CartItemDetails({ cartItem, deleteCartItem, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = async () => {
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  };

  const updateQuantityInput = (event) => {
    setQuantity(event.target.value);
  };

  const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;

    if (keyPressed === 'Enter') {
      updateQuantity();

    } else if (keyPressed === 'Escape') {
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  };

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image}
        data-testid="cart-item-image" />

      <div className="cart-item-details">
        <div className="product-name"
          data-testid="cart-item-name">
          {cartItem.product.name}
        </div>
        <div className="product-price"
          data-testid="cart-item-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span data-testid="cart-item-quantity">
            Quantity: {isUpdatingQuantity
              ? <input type="text" className="quantity-textbox" value={quantity} onChange={updateQuantityInput} onKeyDown={handleQuantityKeyDown} />
              : <span className="quantity-label">{quantity}</span>
            }</span>
          <span className="update-quantity-link link-primary" onClick={updateQuantity}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
            data-testid="cart-item-delete-quantity-link"
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}