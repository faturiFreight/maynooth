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
          <ul class="d-flex my-3">
            <router-link class="nav-top mx-4" to="/sign-in" tag="li">
              <a class="text-light"><i class="fas fa-user-alt"></i></a>
            </router-link>
            <router-link to="/cart" tag="li" class="nav-top">
            <a class="text-light"><i class="fas fa-shopping-cart"></i></a></router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="bottom--nav">
      <div class="container">
        <ul class="d-flex">
          <router-link class="nav-item mx-3" tag="li" to="/living-room">
            <a class="nav-link">Living Room</a>
          </router-link>
          <router-link class="nav-item mx-3" tag="li" to="/bedroom">
            <a class="nav-link">Bedroom</a>
          </router-link>
          <router-link class="nav-item mx-3" tag="li" to="/kitchen">
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