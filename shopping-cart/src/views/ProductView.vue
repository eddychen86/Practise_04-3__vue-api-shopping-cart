<template>
  
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
  component: {
    ProductBox
  },
  data() {
    return {
      path: '/products',
      name: '/products',
      component: ProductView
    }
  }
}
</script>