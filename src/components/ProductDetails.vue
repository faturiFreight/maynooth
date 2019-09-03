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
      <div class="car-item">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
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
    },
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    }
  }
};
</script>