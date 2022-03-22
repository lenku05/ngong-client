<template>
  <div class="contact">
    <div class="container">
      <h2 class="heading">send us an email</h2>
      <div class="subheading">
        talk to us and follow through our social media
      </div>
      <hr class="container" />
      <div class="row">
        <div class="col-sm-8 col-md-8 col-lg-8">
          <form>
            <input
              required
              type="text"
              class="form-control"
              placeholder="name"
              aria-describedby="basic-addon1"
            />

            <br />

            <input
              required
              type="email"
              class="form-control"
              placeholder="email"
              aria-describedby="basic-addon1"
            />

            <br />

            <input
              required
              type="text"
              class="form-control"
              placeholder="subject"
              aria-describedby="basic-addon1"
            />

            <br />

            <textarea
              required
              type="text"
              style="resize: none"
              class="form-control"
              placeholder="message"
              aria-describedby="basic-addon1"
              rows="8"
            />

            <br />

            <button required class="btn btn-primary" type="submit">
              submit
            </button>
          </form>
        </div>
        <div class="col-sm-4 col-md-4 col-lg-4 mt-4">
          <ul class="list-group">
            <li class="list-group-item">
              <a href="tel:+254712492960"
                ><i class="material-icons">phone</i>Call</a
              >
            </li>
            <li class="list-group-item">
              <a
                href="https://web.facebook.com/NgongMunicipality2020/?_rdc=1&_rdr"
                ><i class="material-icons">facebook</i>Facebook</a
              >
            </li>
            <li class="list-group-item">
              <a href="mailto:ngongmunicipality@gmail.com"
                ><i class="material-icons">email</i>Gmail</a
              >
            </li>
            <li class="list-group-item">
              <a href="tel:+254712492960"
                ><i class="material-icons">phone</i>Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.material-icons {
  font-size: 16px;
  padding-right: 10px;
}
a {
  text-decoration: none;
  font-size: 16px;
}
.mt-4 {
  margin-top: 15px;
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
hr {
  padding-bottom: 20px;
}
.contact {
  min-height: 100vh;
  margin-top: 55px;
  margin-bottom: 55px;
}
</style>
