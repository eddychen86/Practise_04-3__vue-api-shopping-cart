<template>
  <div class="row">
    <template v-for="product in products" :key="product">
      <div class="product-box">
        <div class="image-box">
          <img :src="parseImgPath(product.img_path)">
        </div>
        <h4>{{ product.brand }}<small>{{ product.category }}</small></h4>
        <h3>{{ product.name }}</h3>
        <p>售價：{{ product.price }}</p>
      </div>
    </template>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: []
      }
    },
    mounted() {
      axios
        .get(`http://35.234.34.149/products?user_id=1`)
        .then(response => this.products = response.data)
    },
    methods: {
      parseImgPath: function(path) {
        return `http://35.234.34.149${path}`;
      }
    }
  }
</script>

<style scoped>
  * {
    font-family: '微軟正黑體';
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
  }
  .product-box {
    border: 1px solid;
    min-width: 350px;
    width: 24%;
    text-align: center;
    margin: 15px;
    cursor: pointer;
    display: block;
  }
  .image-box {
    width: 100%;
    height: 250px;
    margin: auto;
  }
  img {
    display: block;
    width: 50%;
    margin: auto;
  }
</style>