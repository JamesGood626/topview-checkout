<template>
  <div class="product-image--container">
    <Arrow id="left-slider-arrow" class="slider-arrow" @click="changeSlide('LEFT')"/>
    <img class="product-image" :src="image" />
    <Arrow id="right-slider-arrow" class="slider-arrow" @click="changeSlide('RIGHT')"/>
  </div>
</template>

<script>
  import Arrow from '@/assets/svg/dot-arrow.svg'
  export default {
    components: {
      Arrow,
    },
    props: {
      changeSlide: {
        type: Function,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .product-image--container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 90vw;
    max-width: 48rem;
    height: 40vw;
    max-height: 20rem;
    margin: 3rem 0;
  }

  /* Creates the red circle behind the product */
  .product-image--container::after {
    position: absolute;
    z-index: -12;
    content: '';
    top: -1rem;
    width: 12rem;
    height: 12rem;
    background: red;
    border-radius: 50%;
  }

  .product-image {
    width: 70%;
    max-width: 24rem;
  }

  .slider-arrow {
    width: 2rem;
    height: 2rem;
    margin-top: 1.8rem;
  }

#left-slider-arrow {
  transform: rotate(180deg);
}

svg:hover {
  cursor: pointer;
  fill: red;
}

@media only screen and (min-width: 375px) {
  .slider-arrow {
    margin-top: 0;
  }
}

@media only screen and (min-width: 425px) {
  .product-image--container::after {
    top: 0;
    width: 40vw;
    height: 40vw;
    max-width: 20rem;
    max-height: 20rem;
  }

  .product-image--container {
    margin: 1.4rem 0;
  }

  .slider-arrow {
    width: 3rem;
    height: 3rem;
  }
}
</style>