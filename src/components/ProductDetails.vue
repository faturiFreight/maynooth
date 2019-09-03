<template id="car-info">
  <div
    class="modal-mask"
    v-show="show"
    transition="modal"
    aria-hidden="true"
    role="dialog"
    aria-labelledby="modalTitle"
    aria-describedby="modalDescription"
    style="border: 2px solid black;"
  >
    <div class="modal-container">
      <h4>Detailed View1</h4>
      <div class="car-item" v-for="car in carlist" v-if="modalActiveContent($index)" :key="car.id">
        <h1>{{car.title}}</h1>
        <p>{{car.description}}</p>
        <button
          v-if="modalActiveContent($index)"
          class="modal-default-button"
          @click="setModalClose"
        >Close me please</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    active: "active",
    isActive: "isActive",
    carlist: "carlist",
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  },
  methods: {
    // check wich content index is active
    modalActiveContent: function(i) {
      return this.active === i;
    },
    // close modal
    setModalClose: function() {
      this.show = false;
      //if need set active content to zero object
      // this.active = 0;
    }
  }
};
</script>