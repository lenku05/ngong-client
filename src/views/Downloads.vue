<template>
  <div class="downloads">
    <div class="container">
      <h2 class="heading">Downloads</h2>
      <div class="subheading">get all of our documents</div>
      <div class="mt-3"></div>
      <div class="card" v-for="file in files" :key="file.id">
        <div class="row">
          <div class="col-sm-6 col-md-9 col-lg-9">
            <div class="card-body">
              {{ file.title }}
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <a class="btn btn-success" :href="file.file"> Download </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    //    uploading method

    store.dispatch("loadFiles");

    const files = computed(() => {
      return store.state.files;
    });

    return {
      files,
    };
  },
};
</script>

<style scoped>
.downloads {
  min-height: 100vh;
  margin-top: 55px;
  margin-bottom: 55px;
}
.heading {
  letter-spacing: 2px;
  text-transform: capitalize;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
}
.subheading {
  letter-spacing: 7px;
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
}

.card {
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}
.float-right {
  float: right;
}
.card .btn {
  margin: 2px;
  float: right;
}
.num {
  font-size: 16px;
  padding: 5px;
}
.card-body {
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
}
</style>
