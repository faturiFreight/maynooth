<template>
  <div>
      <BannerCarousel/>
      <div class="container">
          <h3 class="font-weight-bold mt-5">New In Store</h3>
              <p class="text-dark">Explore our wide range of selection from our newest furniture collection</p>
              <hr>
              <ProductThumb/>
            <h3 class="font-weight-bold mt-5">Inspiration or Ideas</h3>
              <p class="text-dark">Explore our wide range of selection from our newest furniture collection</p>
              <hr>
              <ProductThumb/>
        <h3 class="font-weight-bold mt-5">Clearance Sale</h3>
              <p class="text-dark">Explore our wide range of selection from our newest furniture collection</p>
              <hr>
              <clearance-product/>
      </div>
  </div>
</template>

<script>
import BannerCarousel from './BannerCarousel'
import ProductThumb from './ProductThumb'
import ClearanceProduct from './ClearanceProducts'

export default {
    name: 'Home',
    components: {
        BannerCarousel,
        ProductThumb,
        ClearanceProduct
    }
}
</script>

<style>

</style>