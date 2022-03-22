<template>
  <nav class="navbar navbar-fixed-top container-fluid bg-white">
    <div class="">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <img
          @click="() => $router.push('/')"
          src="@/assets/vectors/logo1.jpg"
          style="float: left"
          width="50"
          alt=""
        />
        <router-link class="navbar-brand" to="/"
          >The Municipality of Ngong</router-link
        >
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link class="item" to="/">Home</router-link></li>
          <li><router-link class="item" to="/about">About</router-link></li>
          <li>
            <router-link class="item" to="/admin">Administration</router-link>
          </li>
          <li><router-link class="item" to="/blogs">Blogs</router-link></li>
          <li>
            <router-link class="item" to="/contact">Contact Us</router-link>
          </li>
          <li>
            <router-link class="item" to="/downloads">Downloads</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #fff;
  color: black !important;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
li .item {
  color: black !important;
}
.navbar-brand {
  color: black !important;
}
</style>
