<template>
  <div>
    <nav>
      <ul>
        <li id="bike-link"><nuxt-link to="/products/bikes/1">Bikes</nuxt-link></li>
        <!-- TODO: -->
        <!-- Could make this more dynamic by having a getter check what the lowest productId is -->
        <li id="accessories-link"><nuxt-link to="/products/accessories/4">Accessories</nuxt-link></li>
        <li><nuxt-link to="/products/addons/6">Add-ons</nuxt-link></li>
      </ul>
      <div id="cart-container">
        <Cart @click="this.toggleShowCartItems" />
        <CartSummary v-bind:showCartItems="showCartItems" v-bind:toggleShowCartItems="toggleShowCartItems" />
      </div>
    </nav>
  </div>
</template>

<script>
  import CartSummary from '@/components/cartSummary'
  import Cart from '@/assets/svg/shopping-cart.svg'

  export default {
    data() {
      return {
        showCartItems: false
      }
    },
    components: {
      Cart,
      CartSummary
    },
    methods: {
      toggleShowCartItems() {
        this.showCartItems = !this.showCartItems
      }
    },
  }
</script>

<style>
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100vw;
    height: 6rem;
    /* border-bottom: 3px solid #222; */
  }

  nav ul {
    display: flex;
    justify-content: space-around;
    /* width: 40%; */
    /* TODO: Gonna need to use media queries for this
    if I want to add the squares/circles inbetween the links */
    width: 14rem;
    padding: 0;
    list-style-type: none;
    font-size: 0.8rem;
    font-weight: 600;
  }

  #bike-link {
    position: relative;
  }

  #accessories-link {
    position: relative;
  }

  #bike-link::after {
    position: absolute;
    content: '';
    right: -0.9rem;
    top: 0.25rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #222;
  }

  #accessories-link::after {
    position: absolute;
    content: '';
    right: -0.9rem;
    top: 0.25rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #222;
  }

  @media only screen and (min-width: 375px) {
    nav ul {
      font-size: 1rem;
      width: 20rem;
    }

    #bike-link::after {
      right: -1.5rem;
      top: 0.5rem;
    }

    #accessories-link::after {
      right: -1.5rem;
      top: 0.5rem;
    }
  }

  a {
    color: #222;
    text-decoration: none;
    /* For tappability purposes */
    padding: 1.4rem 0;
  }

  /* TODO: Would like to have a red underline slide in. */
  a:hover {
      color:red; 
      text-decoration:none; 
      cursor:pointer;  
  }

  #cart-container {
    position: absolute;
    top: 40%;
    right: 5%;
  }

  nav::after {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 15%;
    width: 70%;
    height: 2.4px;
    background: #222;
  }

  nav::before {
    content: "";
    position: absolute;
    bottom: 15%;
    left: 5%;
    width: 90%;
    height: 2px;
    background: #222;
  }
</style>