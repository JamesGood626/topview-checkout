<template>
  <span class="input-span">
    <label v-bind:for="fieldName">{{fieldTitle}}</label>
    <input v-bind:id="fieldName" v-bind:type="type" :value="updatedValue">
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    fieldTitle: {
      type: String,
      required: true
    },
    fieldName: {
      type: String,
      required: true
    },
    inputValue: {
      type: String,
      required: true
    }
  },
  // NOTE: Got an error message that warned
  // to use a computed property as opposed to v-model for
  // binding the input value from the parent component to this component.
  computed: {
    updatedValue() {
      return this.inputValue
    }
  }
}
</script>

<style>
  .input-span {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 2rem;
  }
</style>