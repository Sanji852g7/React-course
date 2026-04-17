import axios from "axios";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        /* const SelectedDeliveryOption = deliveryOptions.fund((deliveryOption)=> {
          return deliveryOption.id === cartItem.deliveryOptionsId;
        }); */
        const deleteCartItem = async () => {
          await axios.delete(`/api/cart-items/${cartItem.productId}`);
          await loadCart();
        };
        

        return (
          <div key={cartItem.productId} className="cart-item-container"
          data-testid="cart-item-container">

            <DeliveryDate cartItem={cartItem} deliveryOptions={deliveryOptions} />

            <div className="cart-item-details-grid">

              <CartItemDetails cartItem={cartItem} deleteCartItem={deleteCartItem} loadCart={loadCart}/>

              <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} deleteCartItem={deleteCartItem}/>
            </div>
          </div>
          
        );

        

      })}
      
    </div>
    
  );
}