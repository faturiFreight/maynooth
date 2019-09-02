<template>
  <div class="row">
      <hr>
      <div  class="col-lg-4 col-md-4 col-sm-4" v-for="item in items" :key="item.id">
          <div class="product-thumb">
              <img :src="item.img" :alt="item.alt">
              <span class="discount-tag"> {{ item.tag }} OFF! </span>
          </div>
           <div class="product-details mt-2">
                  <h6 class="text-dark text-center"> {{ item.title }} </h6>
                  <p class="text-dark text-center"> {{ item.desc }} </p>
                  <p class="text-center price"><strike class="mr-2">{{item.exprice}}</strike> {{ item.discprice }} </p>
              </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'ClearanceProduct',
    data() {
        return {
            items: [
                {   id:'1',
                    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    title: 'En Rose Collection',
                    desc:'One of our most prominent catalog of amazing furnitures',
                    alt: 'En Rose Collection',
                    tag:'30%',
                    discprice:'70.00',
                    exprice: '100.00'
                },
                {   id:'2',
                    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    title: 'En Rose Collection',
                    desc:'One of our most prominent catalog of amazing furnitures',
                    alt: 'En Rose Collection',
                    tag:'30%',
                    discprice:'70.00',
                    exprice: '100.00'
                },
                {   id:'3',
                    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    title: 'En Rose Collection',
                    desc:'One of our most prominent catalog of amazing furnitures',
                    alt: 'En Rose Collection',
                    tag:'30%',
                    discprice:'70.00',
                    exprice: '100.00'
                }
            ]
        }
    }
}
</script>

<style>

</style>