<template>
  <div class="container">
      <div class="banner--sub my-3">
          <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="" class="img-fluid banner-page">
          <h6 class="text-light page-title">Living Room</h6>
      </div>
      <div class="simple-wrapper">
          <div class="yellow-img">
              <img :src="content[0].imageUrl" :alt="content[0].name" class="banner-page img-fluid">
              <div class="s-right">
                  <h6 class="text-light font-weight-bold">{{ content[0].name }}</h6>
                  <p class="text-light">{{ content[0].description }}</p>
                  <button class="btn btn-md w-100">Learn More</button>
              </div>
          </div> 
      </div>
      <div class="simple-wrapper">
          <div class="yellow-img">
              <img :src="content[1].imageUrl" :alt="content[1].name" class="banner-page img-fluid">
              <div class="s-left">
                  <h6 class="text-light font-weight-bold">{{ content[1].name }}</h6>
                  <p class="text-light">
                      {{ content[1].description }}
                  </p>
                  <button class="btn btn-md w-100">Learn More</button>
              </div>
          </div>  
      </div>
      <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="explore-wrapper-big">
                  <div class="explore-big-img">
                      <img :src="content[2].imageUrl" :alt="content[2].name" class="img-fluid">
                      <div class="explore-caption">
                          <h5 class="text-dark font-weight-bold">{{content[2].name}}</h5>
                          <h4 class="text-warning font-weight-bold">by {{content[2].company}}</h4>
                          <p class="text-dark">{{ content[2].description }}</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="img-strip my-4" v-for="src in srcs" :key="src.id">
                <img :src="src.img" class="img-fluid">
                <h6 class="text-danger">{{ src.title }}</h6>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'LivingRoom',
    data() {
        return {
            content: [],
            srcs: [
                {
                    id:'1',
                    img:'http://lorempixel.com/500/500/people/3',
                    title:'Lounge'
                },
                {
                    id:'2',
                    img:'http://lorempixel.com/500/500/people/3',
                    title:'Meeting Rooms'
                },
                {
                    id:'3',
                    img:'http://lorempixel.com/500/500/people/3',
                    title:'Furnished House'
                }
            ]
        }
    },
    mounted() {
        axios
        .get('http://192.168.1.95:3000/categories/1')
        .then(res => { this.content = res.data.data.details })
        .catch(error => (console.log("error"))
        )
    }
}
</script>

<style>

</style>