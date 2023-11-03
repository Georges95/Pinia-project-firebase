<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  },
})
</script>

<template>
     <div class="col-auto">
        <button class="btn btn-primary mb-3">{{ props.buttonText }}</button>
      </div>
</template>

<style>

</style>