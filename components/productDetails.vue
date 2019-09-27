<template>
  <div class="product-details--container">
    <h3 id="product-name">{{name}}</h3>
    <div class="product-price-stock--container">
      <span class="product-price-stock--span">
        <p>${{ price }}</p>
      </span>
      <span class="product-price-stock--span">
        <p v-if="inStock">In Stock</p>
        <p v-else>Sold Out</p>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      inStock: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style>
.product-details--container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.4rem;
}

.product-price-stock--container {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 8rem;
  margin: 0.8rem 0; 
  /* background: orange; */
}

.product-price-stock--container::before {
  position: absolute;
  left: 3.4rem;
  bottom: 0.3rem;
  content: '';
  width: 1.4rem;
  height: 2px;
  background: #222;
  transform: rotate(90deg);
}

.product-price-stock--container::after {
  position: absolute;
  left: 0rem;
  bottom: -0.4rem;
  content: '';
  width: 8rem;
  height: 2px;
  background: #222;
}

#product-name {
  font-size: 1.4rem;
  font-family: 'Arimo', sans-serif;
  /* background: lime; */
}

.product-price-stock--span {
  width: 4rem;
  font-size: 0.8rem;
}
</style>