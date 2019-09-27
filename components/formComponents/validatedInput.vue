<template>
  <div class="input--container">
    <span class="input-span">
      <label v-bind:for="fieldName">{{fieldTitle}}</label>
      <input v-bind:id="fieldName" v-bind:type="type" :value="inputValue" @change="setFieldValue(fieldName, $event.target.value)" @blur="blurField(fieldName)">
    </span>
    <span class="error-span">
      <p class="error" v-if="checkField(vuelidateField, '$dirty') && !checkField(vuelidateField, 'required')">this field is required</p>
      <p class="error" v-if="!checkField(vuelidateField, 'minLength')">{{ fieldTitle }} must have at least {{ vuelidateField.$params.minLength.min }} characters.</p>
    </span>
  </div>
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
    },
    vuelidateField: {
      required: true
    },
    setFieldValue: {
      type: Function,
      required: true
    },
    blurField: {
      type: Function
    }
  },
  methods: {
    checkField(inputField, key) {
      return inputField[key]
    }
  }
}
</script>

<style>
  .input--container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0.4rem;
  }

  .input-span {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    margin-bottom: 1rem;
  }

  .error-span {
    margin-top: -0.4rem;
  }

  .error {
    color: red;
  }
</style>