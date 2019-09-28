<template>
  <div class="checkout--container">
    <div v-if="!billingDetailsSubmitted || !cardDetailsSubmitted">
      <BillingDetailsForm v-bind:billingDetailsSubmitted="billingDetailsSubmitted" v-bind:toggleBillingDetailsSubmitted="toggleBillingDetailsSubmitted"/>
      <CardDetailsForm v-if="billingDetailsSubmitted && !cardDetailsSubmitted" v-bind:toggleCardDetailsSubmitted="toggleCardDetailsSubmitted"/>
    </div>
    <div v-else>
      <h1>Checkout Success!</h1>
    </div>
  </div>
</template>

<script>
  import BillingDetailsForm from '@/components/billingDetailsForm'
  import CardDetailsForm from '@/components/cardDetailsForm'

  export default {
    data() {
      return {
        billingDetailsSubmitted: false,
        cardDetailsSubmitted: false,
      }
    },
    components: {
      BillingDetailsForm,
      CardDetailsForm
    },
    methods: {
      toggleBillingDetailsSubmitted(e, invalid) {
        e.preventDefault()
        if(invalid) return
        this.billingDetailsSubmitted = !this.billingDetailsSubmitted
      },
      toggleCardDetailsSubmitted(e, invalid) {
        e.preventDefault()
        if(invalid) return
        this.cardDetailsSubmitted = !this.cardDetailsSubmitted
      }
    },
    transition: {
      mode: 'out-in',
      css: false,
      //  TODO: Refactor these out as helper functions since they'll be used in three places.
      //  This will be handled as one of the last things to do. Not top priority
      enter: function (el, done) {
        console.log("checkout enter transition firing: ")
        done()
      },
      leave: function (el, done) {
        console.log("checkout leave transition firing: ")
        done()
      },
    }
  }
</script>

<style>
  .checkout--container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
  }
</style>