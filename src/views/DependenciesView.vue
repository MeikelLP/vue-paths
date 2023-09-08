<template>
  <div class="container">
    <h2>{{ 'layout.dependencies' }}</h2>
    <pre>{{ dependenciesText }}</pre>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const dependenciesText = ref('Some dependencies. TODO')
</script>
