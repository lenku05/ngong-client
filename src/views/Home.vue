<template>
  <div class="home">
    <!-- header -->
    <section class="header">
      <div class="header-text">
        <span>
          welcome to <br />
          the
          <br />
          municipality of ngong</span
        >
        <!-- The municipality<br />of <span>ngong.</span> -->
      </div>
    </section>
    <!-- about section -->
    <section class="about">
      <!-- <h2 class="heading">ngong municipality</h2>
      <div class="subheading">our vission mission and what we offer</div>
      <hr class="container" /> -->

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h2 class="heading">about Us</h2>
            <p>
              The Municipality of Ngong borders Kiambu County to the North and
              Nairobi County to the North East. It straddles Kajiado North
              Sub-County and covers Ngong, Oloolua, Olkeri, Nkaimurunya and
              Ongata Rongai Wards. It also covers some part of Kajiado West
              Sub-County covering the southern regions of Ewuaso Oo Nkidong’i
              ward and a part of Keekonyokie Ward. Ngong Municipality has three
              major urban centres namely Ngong, Ongata Rongai and Kiserian.
              These towns are witnessing rapid urbanization indicating their
              potential for growth and development. The rising number of
              residents and urbanization is what befitted the area the status of
              a municipality. The Municipality of Ngong was created in 2018
              under the reign of His Excellency Joseph Jama ole Lenku.
            </p>
          </div>
          <div class="col-sm-12 col-md-9 col-lg-9">
            <div class="card1">
              <div class="card-title">SERVICES</div>
              <div class="card-body">
                <span>
                  a) Promotion, regulation and provision of refuse collection
                  and solid waste management services; </span
                ><br />
                <span>
                  b) Promotion and provision of water and sanitation services
                  and infrastructure (in areas within the Municipality not
                  served by the Water and Sanitation Provider); </span
                ><br />
                <span>
                  c) Construction and maintenance of urban roads and associated
                  infrastructure; </span
                ><br />
                <span>
                  d) Construction and maintenance of storm drainage and flood
                  controls; </span
                ><br />
                <span>
                  e) Construction and maintenance of walkways and other
                  non-motorized transport infrastructure;
                </span>
                <br />
                <span>
                  f) Construction and maintenance of recreational parks and
                  green spaces;
                </span>
                <br />
                <span>
                  g) Construction and maintenance of street lighting;
                </span>
                <br />
                <span>
                  h) Construction, maintenance and regulation of traffic
                  controls and parking facilities;
                </span>
                <br />
                <span>
                  i) Construction and maintenance of bus stands and taxi stands;
                </span>
                <b></b> <span> j)Regulation of outdoor advertising; </span>
                <br />
                <span>
                  k) Construction, maintenance and regulation of municipal
                  markets and abattoirs;
                </span>
                <br />
                <span>
                  l) Construction and maintenance of fire stations; provision of
                  fire-fighting services, emergency preparedness and disaster
                  management;
                </span>
                <b></b>
                <span>
                  m) Promotion, regulation and provision of municipal sports and
                  cultural activities;
                </span>
                <br />
                <span>
                  n) Promotion, regulation and provision of animal control and
                  welfare;
                </span>
                <br />
                <span>
                  o) Development and enforcement of municipal plans and
                  development controls; </span
                ><br />
                <span>
                  p) Municipal administration services (including construction
                  and maintenance of administrative offices);
                </span>
                <br />
                <span>
                  q) Promoting and undertaking infrastructural development and
                  services within municipality;
                </span>
                <br />
                <span>
                  r) Any other functions as may be delegated by the County
                  Executive Committee.
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- trending section -->
    <section class="main">
      <h2 class="heading">what's trending?</h2>
      <div class="subheading">hot stories on our headlines today</div>
      <hr class="container" />
      <div class="container trending">
        <div class="row">
          <div
            class="col-sm-12 col-md-4 col-lg-4 py"
            v-for="trend in trending"
            :key="trend.id"
            @click="view(trend.id)"
          >
            <div class="card">
              <img
                class="card-img-top rounded img-responsive img-height"
                :src="trend.image"
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="blog-label">
                  {{ trend.category }} -
                  <span>{{ new Date(trend.date).toDateString() }}</span>
                </div>
                <div class="blog-title">
                  {{ trend.title }}
                </div>

                <!-- <div class="icon"></div> -->
                <span class="blog-author"
                  >Written by: <b>{{ trend.author }}</b></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- more blogs -->
    <div class="center">
      <button @click="go" class="outline">See more blogs</button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    // methods
    const go = () => {
      router.push("/blogs");
    };
    // dispatching
    const view = (id) => {
      router.push("/blog/" + id);
    };
    const trending = computed(() => store.state.trending);
    // store.dispatch("loadTrending");

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        const trending = entries[0];
        if (trending.isIntersecting) {
          // Do something cool here
          // console.log("loading the trending posts");
        }
      });
      const trending = document.querySelector(".trending");
      observer.observe(trending);
    });
    return {
      go,
      view,
      trending,
    };
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  margin-top: 50px;
  margin-bottom: 55px;
}
.header {
  height: 100vh;
  background-image: url("../assets/vectors/background.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.img-height {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.header-text {
  padding-top: 120px;

  padding-left: 150px;
  font-size: 90px;
  text-transform: capitalize;
  font-weight: 600;
}
.header-text span {
  color: rgb(230, 5, 5);
  font-weight: 600;
  /* border-bottom: 8px dotted; */
}
.main {
  padding-top: 70px;
  padding-bottom: 50px;
}
.about {
  padding-top: 30px;
  height: 100%;
  /* padding-bottom: 10px; */
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
/* hr {
  padding-bottom: 50px;
} */
.rounded {
  border-radius: 5px;
}
.card {
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.card-title {
  padding-left: 20px;
  padding-top: 15px;
  font-size: 16px;
  font-weight: 700;
}
.card-body {
  padding: 10px;
  font-size: 16px;
}
span {
  text-decoration: none;
}
.blog-label {
  font-weight: 700;
  font-size: 12px;
  padding: 2px;
  color: black;
  text-transform: capitalize;
}
.blog-label span {
  font-weight: 400;
  font-size: 12px;
  padding: 2px;
  color: grey;
}
.blog-title {
  font-weight: 700;
  font-size: 20px;
  padding: 2px;
  color: black;
  text-transform: capitalize;
}
.blog-author {
  display: inline;
  font-size: 12px;
  text-transform: capitalize;
}
.icon {
  width: 10px;
  height: 10px;
  background-color: grey;
  border-radius: 50px;
  display: inline-block;
  padding-top: 3px;
}
.py {
  /* padding-top:20px; */
  margin-bottom: 25px;
}
p {
  font-size: 16px;
}
.center {
  text-align: center;
  display: flex;
  margin: auto;
  justify-content: center;
  /* margin-bottom: 45px; */
}
.outline {
  padding: 10px 20px;
  background-color: #000;
  color: white;
  border: none;
  /* box-shadow: 1px 2px 3px 2px black; */
}
@media only screen and (max-width: 576px) {
  .header-text {
    padding-top: 150px;
    padding-left: 25px;
    font-size: 44px;
    text-transform: capitalize;
    font-weight: 600;
  }
  .header-text span {
    color: rgb(230, 5, 5);
    font-weight: 600;
  }
  .heading {
    letter-spacing: 2px;
    text-transform: capitalize;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }

  .subheading {
    letter-spacing: 7px;
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
  }
}
</style>
