
<template>
  <div class="product-main--container">
    <div class="product--container">
      <ProductDetails v-bind:name="this.accessory.name" v-bind:price="this.accessory.price" v-bind:inStock="this.inStock" />
      <ProductSlider v-bind:changeSlide="changeSlide" v-bind:image="this.accessory.image"/>
      <button id="add-to-cart-button" @click="addProductToCart(accessory)">I Want This!</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProductSlider from '@/components/productSlider'
import ProductDetails from '@/components/productDetails'
import {TweenMax} from "gsap/TweenMax";

export default {
  components: {
    ProductSlider,
    ProductDetails
  },
  data() {
    console.dir(this.$route);
    return {
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    changeSlide(direction) {
      if (direction === "LEFT") {
        const lessOne = +this.id - 1;
        const { start, end } = this.listRange
        console.log(`The start: ${start} & The end: ${end}`)
        console.dir(start)
        const nextPage = lessOne >= start ? lessOne : end;
        this.$router.push(`/products/accessories/${nextPage}`)
      }
      if (direction === "RIGHT") {
        const plusOne = +this.id + 1;
        const { start, end } = this.listRange
        const nextPage = plusOne <= end ? plusOne : start
        this.$router.push(`/products/accessories/${nextPage }`)
      }
    }
  },
  computed: {
    inStock() {
      return this.accessory.inventory > 0
    },
    listRange() {
      const { accessoryList } = this
      return {start: accessoryList[0].id, end: accessoryList[accessoryList.length - 1].id}
    },
    accessoryList() {
      return this.$store.getters["products/accessoryList"];
    },
    accessory() {
      return this.accessoryList.find(accessory => accessory.id === +this.id);
    },
  },
  // https://nuxtjs.org/api/pages-transition#the-transition-property
  transition: {
   mode: 'out-in',
   css: false,
   //  TODO: Refactor these out as helper functions since they'll be used in three places.
   //  This will be handled as one of the last things to do. Not top priority
   enter: function (el, done) {
      const imageContainer = el.querySelector(".product-image")
      if(imageContainer) {
        TweenMax.fromTo(imageContainer, 0.3, {x: '-300px', opacity: 0}, {x: '0px', opacity: 1, onComplete: done});
      } else {
        done()
      }
   },
   leave: function (el, done) {
      const imageContainerTwo = el.querySelector(".product-image")
      if(imageContainerTwo) {
        TweenMax.fromTo(imageContainerTwo, 0.3, {x: '0px', opacity: 1}, {x: '300px', opacity: 0, onComplete: done});
      } else {
        done()
      }
   },
}
};
</script>

<style>
.product-main--container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background: lime; */
}

.product--container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

#add-to-cart-button {
  position: relative;
  margin-top: 2rem;
  padding: 0.6rem 1.4rem;
  box-shadow: 12px 12px 0px 0px red;
  border: 3px solid #222;
  background: #fff;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
  transition: box-shadow 0.2s ease-in-out;
}

#add-to-cart-button:hover {
  cursor: pointer;
  box-shadow: 0px 0px 0px 0px red;
}

@media only screen and (min-width: 375px) {
  .product--container {
    padding-top: 4rem;
    padding-bottom: 4rem;
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

  #add-to-cart-button {
    margin-top: 1.4rem;
    padding: 0.8rem 1.8rem;
    font-size: 1.2rem;
    transition: box-shadow 0.2s ease-in-out;
  }
}
</style>

