<template>
  <div class="row">
    <hr />
    <div class="col-lg-4 col-md-4 col-sm-4" v-for="item in items" :key="item.id">
        <a href="javascript:;" data-toggle="modal"
        data-target="#inspireModal"
        @click="setCurrentItem(item)">
      <div class="product-thumb">
        <img :src="item.thumb" :alt="item.alt" />
        <div class="product--caption">
          <h6 class="text-light text-center">{{ item.title }}</h6>
        </div>
      </div>
        </a>
    </div>
    <div class="modal fade" id="inspireModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                      <b-tab no-body title="first" class="text-dark">
                        <b-card-img top :src="currentItem.thumb"></b-card-img>
                      </b-tab>
                      <b-tab no-body title="second">
                        <b-card-img top src="https://picsum.photos/600/200/?image=25"></b-card-img>
                      </b-tab>
                      <b-tab no-body title="third">
                        <b-card-img top src="https://picsum.photos/600/200/?image=26"></b-card-img>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </div>
                <div class="col-lg-6">
                  <div class="detail-wrapper">
                    <h3 class="text-dark font-weight-bold">{{ currentItem.title }}</h3>
                    <hr>
                    <div class="price d-flex">
                      <p class="text-dark mr-3">Price</p>
                      <h3 class="text-dark font-weight-bold">{{currentItem.price}}</h3>
                    </div>
                    <div class="d-flex">
                      <p class="text-dark mr-3">Size</p>
                      <h3 class="text-dark font-weight-bold">{{currentItem.size}}</h3>
                    </div>
                    <div class="d-flex">
                      <p class="text-dark mr-3">Description</p>
                      <p class="text-dark font-weight-bold">{{currentItem.description}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ProductInspire",
  data() {
    return {
      items: [],
      currentItem: {},
    };
  },
  methods: {
    setCurrentItem: function(item) {
      this.currentItem = item;
    }
  },
  mounted() {
    axios
    .get('http://192.168.1.98:3000/products?categoryId=1&order=price')
    .then(res => {
      console.log(res.data.data);
         this.items = res.data.data.map(product => {
          return {
            id: product.id,
            title: product.name,
            thumb: product.imageUrl,
            alt: product.name,
            size: product.size,
            price: product.price,
            description: product.description
          }
         }
      )}
    )
    .catch(error => console.log("error"));
  }
};
</script>