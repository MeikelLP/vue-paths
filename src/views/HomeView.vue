<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">
      Test App
    </h1>
    <div class="col-lg-6 mx-auto">
      {{ data }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const data = ref('test')
</script>
