<template>
  <div class="container py-5 my-3">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <h4 class="text-dark font-weight-bold">Create New Account</h4>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-3" label="Password" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.password"
              required
              placeholder="Enter password"
              type="password"
              minlength="6"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-4" label="Confirm Password" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.confirmPassword"
              required
              placeholder="Reenter Password"
              type="password"
              minlength="6"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Food:" label-for="input-5">
            <b-form-select id="input-5" v-model="form.food" :options="foods" required></b-form-select>
          </b-form-group>

          <b-form-group label="Individual radios" class="d-flex">
            <b-form-radio v-model="form.gender" name="some-radios" value="Male">Male</b-form-radio>
            <b-form-radio v-model="form.gender" name="some-radios" value="Female">Female</b-form-radio>
          </b-form-group>

          <b-button type="submit" variant="primary" class="mx-3 w-100 btn-submit">Sign Up</b-button>
        </b-form>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <h4 class="text-dark font-weight-bold">Sign In</h4>
        <b-form @submit="login" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="login-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="login-1"
              v-model="signIn.username"
              type="name"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password" label-for="login-2">
            <b-form-input
              id="login-2"
              v-model="signIn.password"
              required
              placeholder="Enter password"
              type="password"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="mx-3 w-100 btn-submit" @click="login">Sign In</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
import axios from "axios"

export default {
  name: "SignIn",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        gender: "",
        password: "",
        confirmPassword: ""
      },
      signIn: {
        username: "",
        password: ""
      },
      foods: [
        { text: "Select One", value: null },
        "Jakarta",
        "Bandung",
        "Surabaya",
        "Bali"
      ],
      show: true,
      profile: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onLogin(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.signIn.email));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      this.form.password = "";
      this.form.confirmPassword = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    login() {
      this.$store.dispatch("LOGIN", {
        username: this.signIn.username,
        password: this.signIn.password
      })
      .then(success => {
        this.$router.push("/loggedin")
      })
      .catch(error => alert("error!"));
      }
    }
}
</script>

<style scoped>
.form-control {
  border: 2px solid #14436b !important;
  border-radius: 10px !important;
}
</style>