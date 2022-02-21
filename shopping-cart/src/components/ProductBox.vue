<template>
  <div :class="[{border: has_border}, 'product-box']" @click="redirectProduct(id)">
        <div class="image-box">
            <img :src="parseImgPath(img_path)">
        </div>
        <h4>{{brand}} <small>{{category}}</small></h4>
        <h3>{{name}}</h3>
        <p>售價: {{ price }}</p>
        <slot></slot>
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
      'id': Number,
      'img_path': String,
      'brand': String,
      'category': String,
      'name': String,
      'price': Number,
      'has_border': {
        type: Boolean,
        default: false
      }
    },
    methods: {
      parseImgPath: function(path) {
        return this.serverPath + path;
      },
      redirectProduct: function(id) {
        this.$router.push(`/products/${id}`)
      }
    }
  }
</script>

<style scoped>
  .border {
    border: 1px solid #888;
    margin: auto;
  }
  .product-box {
    /* border: 1px solid; */
    box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    width: 350px;
    text-align: center;
    margin: 20px;
    cursor: pointer;
    display: block;
    padding: 20px auto;
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