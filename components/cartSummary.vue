<template>
  <div>
    <div id="cart-product-counter" v-if="cartQuantity > 0">{{ cartQuantity }}</div>
    <transition name="slide-in">
      <div id="cart-summary-container" class="cart-pop-up" v-if="showCartItems && cartList.length > 0">
        <div id="cart-total">
          <p>Total: ${{ cartTotal }}</p>
        </div>
        <div id="cart-list-container">
          <ul id="cart-summary-list" v-if="showCartItems">
          <li v-for="item in cartList">
            <div id="cart-product-image-container">
              <img id="cart-product-image" :src="item.image" />
            </div>
            <div id="cart-product-details">
              <p>{{item.quantity}} {{item.name}}<span v-if="item.quantity > 1">s</span></p>
              <p>${{item.price * item.quantity}}</p>
              <div>
                <button id="cart-decrement-btn" class="cart-quantity-btn" @click="decrementCartProductQuantity(item)">-</button>
                <button id="cart-increment-btn" class="cart-quantity-btn" @click="incrementCartProductQuantity(item)">+</button>
              </div>
            </div>
          </li>
        </ul>
        </div>
        <!-- TODO: if button is clicked and no bike is selected.
        A message will pop up -->
        <button id="cart-checkout-btn" @click="this.checkout">Checkout</button>
      </div>
    </transition>
    <transition name="slide-in">
      <div id="cart-empty-pop-up" class="cart-pop-up" v-if="showCartItems && cartList.length === 0">
        <h3>Your Cart is Empty</h3>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      showCartItems: {
        type: Boolean,
        required: true
      },
      toggleShowCartItems: {
        type: Function,
        required: true
      }
    },
    methods: {
      ...mapActions('cart', [
        'incrementCartProductQuantity',
        'decrementCartProductQuantity'
      ]),
      checkout() {
        console.log("what is bikeInCart: ", this.bikeInCart)
        if (this.bikeInCart) {
          this.toggleShowCartItems()
          this.$router.push("/checkout")
        }
      }
    },
    computed: {
      cartList() {
        return this.$store.getters["cart/cartList"];
      },
      cartTotal() {
        return this.$store.getters["cart/cartTotalPrice"];
      },
      cartQuantity() {
        return this.cartList.reduce((acc, item) => {
          acc += item.quantity
          return acc
        }, 0)
      },
      bikeInCart() {
        return this.cartList.some(item => {
          console.log("the item: ", item)
          return item.product_type === "bike"
        })
      }
    },
  }
</script>

<style>
#cart-product-counter {
  position: absolute;
  top: -0.8rem;
  left: -0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.4rem;
  height: 1.4rem;
  text-align: center;
  background: red;
  color: #fcfcfc;
  border-radius: 50%;
}

.cart-pop-up {
  background: #fcfcfc;
  border-radius: 5px;
  box-shadow: 2px 2px 14px 4px rgba(0, 0, 0, 20%);
}

#cart-empty-pop-up {
  position: absolute;
  z-index: 100;
  bottom: -3.6rem;
  left: -7.6rem;
  padding: 1rem 0.4rem;
  font-size: 0.8rem;
  white-space: nowrap;
}

#cart-total {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  width: 100%;
  padding: 0.6rem 0;
  font-size: 0.9rem;
  background: #222;
  color: #fcfcfc;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
}

#cart-summary-container {
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  bottom: -20.4rem;
  left: -16.2rem;
  width: 18.1rem;
  height: 20rem;
}

#cart-list-container {
  flex: 4;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
}

#cart-summary-list {
  display: flex;
  flex-direction: column;
  /* background: lime; */
}

#cart-summary-list li {
  display: flex;
  height: 7rem;
  margin: 0.8rem 0;
  font-size: 0.9rem;
}

#cart-product-image-container {
  width: 40%;
  /* background: purple; */
}

#cart-product-image {
  width: 100%;
}

#cart-product-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem;
  width: 60%;
  /* background: orange; */
}

.cart-quantity-btn {
  padding: 0.3rem 0.5rem;
  border: 2px solid #222;
  border-radius: 50%;
  font-size: 0.8rem;
  background: rgba(0, 0, 0, 0);
}

#cart-checkout-btn {
  width: 100%;
  flex: 1;
  font-weight: 600;
  color: #fcfcfc;
  background: #22BF39;
  border-radius: 0px 0px 5px 5px;
}

.slide-in-enter-active {
  animation: slide-in-in .3s;
}
.slide-in-leave-active {
  animation: slide-in-in .3s reverse;
}
@keyframes slide-in-in {
  0% {
    transform: translateY(4rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);;
    opacity: 1;
  }
}
</style>