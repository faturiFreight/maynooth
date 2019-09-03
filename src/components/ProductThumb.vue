<template>
  <div class="row">
      <hr>
      <div  class="col-lg-4 col-md-4 col-sm-4" v-for="item in items" :key="item.id">
          <div class="product-thumb">
              <img :src="item.img" :alt="item.alt">
              <div class="product--caption">
                  <h6 class="text-light text-center"> {{ item.caption }} </h6>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ProductDetails from './ProductDetails'

export default {
    name:'NewProductThumb',
    components: {
        ProductDetails
    },
    data() {
        return {
            items: [
                {   id:'1',
                    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    caption: 'En Rose Collection',
                    alt: 'En Rose Collection'
                },
                {   id:'2',
                    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    caption: 'En Rose Collection',
                    alt: 'En Rose Collection'
                },
                {   id:'3',
                    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    caption: 'En Rose Collection',
                    alt: 'En Rose Collection'
                }
            ],
            showModal: false
        }
    },
    methods: {
     openModal() { this.$refs.modal.show() }
    }
}
</script>