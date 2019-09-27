<template>
  <div class="billing-details--container">
    <div v-if="!billingDetailsSubmitted">
      <div id="billing-details-form-header">
        <h3>Your Billing Details</h3>
      </div>
      <form id="billing-details-form">
        <div id="billing-details-inputs-container">
          <ValidatedInput type="text" fieldTitle="Your Full Name" fieldName="fullName" v-bind:inputValue="billingDetails.fullName" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.billingDetails.fullName" />
          <ValidatedInput type="text" fieldTitle="Street Address" fieldName="streetAddress" v-bind:inputValue="billingDetails.streetAddress" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.billingDetails.streetAddress" />
          <Input type="text" fieldTitle="Apartment Number/Suite Number" fieldName="apartmentOrSuiteNumber" v-bind:inputValue="billingDetails.apartmentOrSuiteNumber" />
          <ValidatedInput type="text" fieldTitle="City" fieldName="city" v-bind:inputValue="billingDetails.city" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.billingDetails.city" />
          <ValidatedInput type="text" fieldTitle="State" fieldName="state" v-bind:inputValue="billingDetails.state" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.billingDetails.state" />
          <ValidatedInput type="text" fieldTitle="Zip" fieldName="zip" v-bind:inputValue="billingDetails.zip" v-bind:setFieldValue="setFieldValue" v-bind:blurField="blurField" v-bind:vuelidateField="$v.billingDetails.zip" />
        </div>
        <button id="billing-details-btn" @click="e => toggleBillingDetailsSubmitted(e, $v.$invalid)">Submit</button>
      </form>
    </div>
    <div v-else >
      <div id="billing-details-form-header">
        <h3>Your Billing Details</h3>
      </div>
      <div id="billing-details-summary--container">
        <p>Your Full Name: {{ billingDetails.fullName }}</p>
        <p>Street Address: {{ billingDetails.streetAddress }}</p>
        <p>Apartment or Suite Number: {{ billingDetails.apartmentOrSuiteNumber }}</p>
        <p>City: {{ billingDetails.city }}</p>
        <p>State: {{ billingDetails.state }}</p>
        <p>Zip: {{ billingDetails.zip }}</p>
      </div>
    </div>
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
        billingDetails: {
          fullName: "sssssssss",
          streetAddress: "ssssssssssssssss",
          apartmentOrSuiteNumber: "",
          city: "ssssssss",
          state: "ssssssss",
          zip: "sssssss"
        },
      }
    },
    validations: {
      billingDetails: {
        fullName: {
        required,
        minLength: minLength(5)
        },
        streetAddress: {
          required,
          minLength: minLength(10)
        },
        city: {
          required,
          minLength: minLength(5)
        },
        state: {
          required,
          minLength: minLength(2)
        },
        zip: {
          required,
          minLength: minLength(5)
        },
      }
    },
    props: {
      billingDetailsSubmitted: {
        type: Boolean,
        required: true
      },
      toggleBillingDetailsSubmitted: {
        type: Function,
        required: true
      }
    },
    methods: {
      blurField(field) {
        this.$v.billingDetails[field].$touch()
      },
      setFieldValue(field, value) {
        this.billingDetails[field] = value
        this.$v.billingDetails[field].$touch()
      }
    },
    components: {
      Input,
      ValidatedInput
    }
  }
</script>

<style>
  .billing-details--container {
    width: 80vw;
    max-width: 28rem;
    border-radius: 5px;
    box-shadow: 2px 2px 14px 4px rgba(0, 0, 0, 20%);
    margin-bottom: 3rem;
  }

  #billing-details-summary--container {
    padding: 0 1.2rem 1.2rem 1.2rem;
    padding-top: 0rem;
  }

  #billing-details-summary--container p {
    padding: 0.4rem 0;
  }

  #billing-details-form-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    font-family: 'Arimo', sans-serif;
    font-size: 1.4rem;
    color: #222;
    border-radius: 5px 5px 0 0;
  }

  #billing-details-inputs-container {
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    width: 100%;
  }

  #billing-details-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  #billing-details-form label {
    font-size: 0.9rem;
  }

  #billing-details-form input {
    margin-top: 0.4rem;
    height: 2rem;
    border: 2px solid #222;
  }

  #billing-details-form span:last-child {
    margin-bottom: 0.8rem;
  }

  #billing-details-btn {
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

  #billing-details-btn:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px red;
  }

  @media only screen and (min-width: 425px) {
    #billing-details-btn {
      padding: 0.8rem 1.8rem;
      font-size: 1.2rem;
      transition: box-shadow 0.2s ease-in-out;
    }
  }

  @media only screen and (min-width: 700px) {
    #billing-details-summary--container {
      padding: 2.4rem;
      padding-top: 0;
    }

    #billing-details-inputs-container {
      padding: 2.4rem;
      padding-top: 0;
    }

    #billing-details-form span:last-child {
      margin-bottom: 0;
    }
  }
</style>