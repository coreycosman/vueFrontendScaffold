<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="onSignup">
      <input v-model="form.email" type="text" placeholder="email" />
    </form>
    <form @submit.prevent="onSignup">
      <input v-model="form.password" type="text" placeholder="password" />
    </form>
    <form @submit.prevent="onSignup">
      <input
        v-model="form.confirmation"
        type="text"
        placeholder="password confirmation"
      />
    </form>
    <button>submit</button>
  </div>
</template>

<script>
import Signup from "../services/signup";
export default {
  name: "signup",
  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmation: ""
      }
    };
  },
  methods: {
    async onSignup() {
      await Signup.signup(this.form);
    }
  }
};
</script>
