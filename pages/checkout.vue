<template>
  <!-- <div class="checkout--container">
    <div v-if="!billingDetailsSubmitted || !cardDetailsSubmitted">
      <BillingDetailsForm v-bind:billingDetailsSubmitted="billingDetailsSubmitted" v-bind:toggleBillingDetailsSubmitted="toggleBillingDetailsSubmitted"/>
      <CardDetailsForm v-if="billingDetailsSubmitted && !cardDetailsSubmitted" v-bind:toggleCardDetailsSubmitted="toggleCardDetailsSubmitted"/>
    </div>
    <div v-else>
      <h1>Checkout Success!</h1>
    </div>
  </div> -->
  <div>
    <h1>The checkout page!</h1>
  </div>
</template>

<script>
  // import BillingDetailsForm from '@/components/billingDetailsForm'
  // import CardDetailsForm from '@/components/cardDetailsForm'

  export default {
    data() {
      return {
        billingDetailsSubmitted: false,
        cardDetailsSubmitted: false,
      }
    },
    // components: {
    //   BillingDetailsForm,
    //   CardDetailsForm
    // },
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