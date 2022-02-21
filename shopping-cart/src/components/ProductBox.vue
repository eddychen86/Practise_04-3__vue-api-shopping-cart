<template>
  <div class="product-box">
        <div class="image-box">
            <img :src="parseImgPath(img_path)">
        </div>
        <h4>{{brand}} <small>{{category}}</small></h4>
        <h3>{{name}}</h3>
        <p>售價: {{ price }}</p>
    </div>
</template>>

<script>
  export default {
    data() {
      return {
        serverPath: this.$store.state.serverPath
      }
    },
    props: {
      'img_path': String,
      'brand': String,
      'category': String,
      'name': String,
      'price': Number
    },
    methods: {
      parseImgPath: function(path) {
        return this.serverPath + path;
      }
    }
  }
</script>

<style scoped>
  .product-box {
    /* border: 1px solid; */
    box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    width: 350px;
    text-align: center;
    margin: 20px;
    cursor: pointer;
    display: block;
  }
  .image-box {
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 250px;
    display: flex;
  }
  img {
    display: block;
    height: 80%;
    margin: auto;
  }
</style>