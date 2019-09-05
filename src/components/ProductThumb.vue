<template>
  <div class="row">
    <hr />
    <div class="col-lg-4 col-md-4 col-sm-4" v-for="item in items" :key="item.id">
      <a
        href="javascript:;"
        data-toggle="modal"
        data-target="#exampleModal"
        @click="setCurrentItem(item)"
      >
        <div class="product-thumb">
          <img :src="item.thumb" :alt="item.title" />
          <div class="product--caption">
            <h6 class="text-light text-center">{{ item.title }}</h6>
          </div>
        </div>
      </a>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog m-5" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-light" id="exampleModalLabel">{{ currentItem.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-light">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <b-card no-body>
                    <b-tabs card>
                      <b-tab
                        no-body
                        title="first"
                        class="text-dark"
                        v-for="image in currentItem.images"
                      >
                        <b-card-img top :src="image"></b-card-img>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                  <div class="d-flex mt-4" v-if="showLists">
                      <div class="vary mr-5">
                        <p class="text-dark mb-1">Variant:</p>
                        <h6 class="text-dark mr-5">{{ form.vary }}</h6>
                      </div>
                      <div class="quantity ml-5">
                        <p class="text-dark mb-1">Quantity:</p>
                        <h6 class="text-dark mr-5">{{ counter }}</h6>
                      </div>
                    </div>
                </div>
                <div class="col-lg-6">
                  <div class="detail-wrapper">
                    <h3 class="text-dark font-weight-bold">{{ currentItem.title }}</h3>
                    <hr />
                    <div class="price d-flex">
                      <p class="text-dark mr-3">Price</p>
                      <h3 class="text-dark font-weight-bold" v-model="form.price">{{currentItem.price}}</h3>
                    </div>
                    <div class="d-flex">
                      <p class="text-dark mr-3">Size</p>
                      <h3 class="text-dark font-weight-bold" v-model="form.size">{{currentItem.size}}</h3>
                    </div>
                    <div class="d-flex">
                      <p class="text-dark mr-3">Description</p>
                      <p class="text-dark font-weight-bold">{{currentItem.description}}</p>
                    </div>
                    <div class="qty">
                      <p class="text-dark">Select Quantity</p>
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <button class="btn btn-primary" type="button" @click="counter++">+</button>
                        </div>
                        <div class="input-group-append">
                          <input type="text" class="form-control" placeholder="0" :value='counter'/>
                          <button
                            class="btn btn-primary"
                            type="button"
                            @click="counter--"
                            v-if="counter > 0"
                          >-</button>
                        </div>
                      </div>
                      <p class="text-dark">Select Variant</p>
                      <b-form-select class="mb-3" v-model="form.vary">
                        <option :value="null" class="text-dark">Select</option>
                        <option v-for="vary in currentItem.variants" :value="vary.name" :key="vary.id">{{vary.name}}</option>
                      </b-form-select>
                      <p class="text-dark">Select City</p>
                      <b-form-select class="mb-3" v-model="form.city">
                        <option :value="null">Select</option>
                        <option v-for="city in cities" :value="city.name" :key="city.id" >{{city.name}}</option>
                      </b-form-select>

                      <button
                        class="btn btn-sm btn-add bg-secondary text-light"
                        type="button"
                        @click="addToList()"
                        v-if="counter > 0"
                      >Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addToCart()">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductDetails from "./ProductDetails";

export default {
  name: "NewProductThumb",
  components: {
    ProductDetails
  },
  methods: {
    setCurrentItem: function(item) {
      this.currentItem = item;
    },
    addToList: function(summary) {
      this.showLists = true;
      this.summary = item;
    },
    addToCart: function() {
      let currentObj = this;
      axios
      .post('http://192.168.1.98:3000/carts/add', {
        address : this.cities.name
      }).then(res => {
        currentObj.output = res.data;
      }).catch(err => {
        currentObj.output = err;
      });
    }
  },
  mounted() {
    axios
      .get("http://192.168.1.98:3000/products?categoryId=1&order=createdAt")
      .then(res => {
        console.log(res.data.data);
        this.items = res.data.data.map(product => {
          return {
            id: product.id,
            title: product.name,
            thumb: product.imageUrl,
            images: product.images,
            size: product.size,
            price: product.price,
            description: product.description,
            variants: product.variants
          };
        });
      })
      .catch(error => console.log("error"));
      axios
      .get("http://192.168.1.98:3000/cities")
      .then(r => {
        console.log(r.data.data);
        this.cities = r.data.data.map(loc => {
          return {
            id: loc.id,
            name: loc.name
          }
        })
      })
      .catch(error => console.log("error fetching location"))
  },
  data() {
    return {
      items: [{
        variants:[],
    }],
      currentItem: {},
      added: {},
      cities:[],
      counter: 0,
      price: 0,
      quanity: 0,
      output:'',
      form: {
        price:null,
        qty:null,
        city:'',
        size:'',
        vary:'',
        counter:0,
      },
      summary:{},
      showLists: false
    }
  }
};
</script>

<style scoped>
.form-control {
  border-radius: 0 !important;
}
</style>