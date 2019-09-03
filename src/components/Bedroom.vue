<template>
  <div class="container">
      <div class="banner--sub my-3">
          <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" class="img-fluid banner-page">
          <h6 class="text-light page-title">Bedroom</h6>
      </div>
      <div class="row my-4">
          <div class="col-lg-6 col-md-6 col-sm-6">
              <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" class="img-fluid">
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="h-100 d-flex align-items-center">
                  <div class="desc-wrapper">
                      <h2 class="text-dark font-weight-bold">Open Bedroom</h2>
              <h6 class="artist">By Quarentina</h6>
              <div class="desc-box">
                  <p class="text-dark">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis ligula nec quam egestas, id molestie leo dignissim. Nullam consequat iaculis purus ac ornare. Phasellus at feugiat orci. 
                  </p>
              </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <bedroom-prod/>
      </div>
  </div>
</template>

<script>
import BedroomProd from './BedroomProd'

export default {
    name:'Bedroom',
    components: {
        BedroomProd
    }
}
</script>

<style>

</style>