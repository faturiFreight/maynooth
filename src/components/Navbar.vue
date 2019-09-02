<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <div class="logo-container">
          <router-link to="/">
            <a class="navbar-brand">
              <img src="../assets/logomaynooth.png" alt="Logo Maynooth" class="img-fluid" />
            </a>
          </router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="input-group mb-3 w-25">
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="bottom--nav">
      <div class="container">
        <ul class="d-flex">
          <router-link class="nav-item mx-3" tag="li" to="/living-room">
            <a class="nav-link">Living Room</a>
          </router-link>
          <router-link class="nav-item mx-3" tag="li" to="/living-room">
            <a class="nav-link">Bedroom</a>
          </router-link>
          <router-link class="nav-item mx-3" tag="li" to="/living-room">
            <a class="nav-link">Kitchen & Dining</a>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>