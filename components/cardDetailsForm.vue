<template>
  <div class="card-details--container">
      <div id="card-details-form-header">
        <h3>Your Card Details</h3>
      </div>
      <form id="card-details-form">
        <div id="card-details-inputs-container">
          <ValidatedInput type="number" fieldTitle="Card Number" fieldName="cardNumber" v-bind:inputValue="cardDetails.cardNumber" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.cardDetails.cardNumber" />
          <ValidatedInput type="number" fieldTitle="Expiration Year" fieldName="cardExpirationYear" v-bind:inputValue="cardDetails.cardExpirationYear" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.cardDetails.cardExpirationYear" />
          <ValidatedInput type="number" fieldTitle="Expiration Month" fieldName="cardExpirationMonth" v-bind:inputValue="cardDetails.cardExpirationMonth" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.cardDetails.cardExpirationMonth" />
          <ValidatedInput type="number" fieldTitle="CVC" fieldName="cvcCode" v-bind:inputValue="cardDetails.cvcCode" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.cardDetails.cvcCode" />
        </div>
        <button id="card-details-btn" @click="e => toggleCardDetailsSubmitted(e, $v.$invalid)">Submit</button>
      </form>
  </div>
</template>
        
<script>
  import { required, minLength } from 'vuelidate/lib/validators'
  import {TweenMax} from "gsap/TweenMax";
  import Input from '@/components/formComponents/Input'
  import ValidatedInput from '@/components/formComponents/validatedInput'

  export default {
    data() {
      return {
        cardDetails: {
          cardNumber: "222222222222222",
          cardExpirationYear: "22",
          cardExpirationMonth: "22",
          cvcCode: "222"
        }
      }
    },
    validations: {
      cardDetails: {
        cardNumber: {
          required,
          minLength: minLength(16)
        },
        cardExpirationYear: {
          required,
          minLength: minLength(2)
        },
        cardExpirationMonth: {
          required,
          minLength: minLength(2)
        },
        cvcCode: {
          required,
          minLength: minLength(3)
        }
      }
    },
    props: {
      cardDetailsSubmitted: {
        type: Boolean,
        required: true
      },
      toggleCardDetailsSubmitted: {
        type: Function,
        required: true
      }
    },
    methods: {
      blurField(field) {
        this.$v.cardDetails[field].$touch()
      },
      setFieldValue(field, value) {
        this.cardDetails[field] = value
        this.$v.cardDetails[field].$touch()
      }
    },
    components: {
      Input,
      ValidatedInput
    }
  }
</script>

<style>
  .card-details--container {
    width: 80vw;
    max-width: 28rem;
    border-radius: 5px;
    box-shadow: 2px 2px 14px 4px rgba(0, 0, 0, 20%);
    margin-bottom: 3rem;
  }

  #card-details-form-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    font-family: 'Arimo', sans-serif;
    font-size: 1.4rem;
    color: #222;
    border-radius: 5px 5px 0 0;
  }

  #card-details-inputs-container {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    padding-top: 0;
    width: 100%;
  }

  #card-details-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  #card-details-form label {
    font-size: 0.9rem;
  }

  #card-details-form input {
    margin-top: 0.4rem;
    height: 2rem;
    border: 2px solid #222;
  }

  #card-details-form span:last-child {
    margin-bottom: 0.8rem;
  }

  #card-details-btn {
    padding: 0.6rem 1.4rem;
    margin-bottom: 2rem;
    box-shadow: 12px 12px 0px 0px red;
    border: 3px solid #222;
    background: #fff;
    font-size: 1rem;
    font-weight: 600;
    color: #222;
    transition: box-shadow 0.2s ease-in-out;
  }

  #card-details-btn:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px red;
  }

  @media only screen and (min-width: 425px) {
    #card-details-btn {
      padding: 0.8rem 1.8rem;
      font-size: 1.2rem;
      transition: box-shadow 0.2s ease-in-out;
    }
  }

  @media only screen and (min-width: 700px) {
    #card-details-inputs-container {
      padding: 2.4rem;
      padding-top: 0;
    }

    #card-details-form span:last-child {
      margin-bottom: 0;
    }
  }
</style>