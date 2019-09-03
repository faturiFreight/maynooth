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
          <h6 class="text-light text-center">{{ item.caption }}</h6>
        </div>
      </div>
        </a>
    </div>
    <div class="modal fade" id="inspireModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-light" id="exampleModalLabel">
            {{ currentItem.title }}
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {{ currentItem.body }}
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
export default {
  name: "ProductInspire",
  data() {
    return {
      items: [
        {
          id: "1",
          thumb:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          caption: "En Rose Collection",
          alt: "En Rose Collection",
          title:'Morbi',
          body:'orbi nec dictum justo. Proin vel ligula pharetra eros vulputate placerat nec sed nisi. Donec consequat quam non tellus porta dapibus.'
        },
        {
          id: "2",
          thumb:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          caption: "En Rose Collection",
          alt: "En Rose Collection",
          title:'Serd',
          body:'orbi nec dictum justo. Proin vel ligula pharetra eros vulputate placerat nec sed nisi. Donec consequat quam non tellus porta dapibus.'
        },
        {
          id: "3",
          thumb:
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          caption: "En Rose Collection",
          alt: "En Rose Collection",
          title:'this wild life',
          body:'orbi nec dictum justo. Proin vel ligula pharetra eros vulputate placerat nec sed nisi. Donec consequat quam non tellus porta dapibus.'
        }
      ],
      currentItem: {},
    };
  },
  methods: {
    setCurrentItem: function(item) {
      this.currentItem = item;
    }
  }
};
</script>