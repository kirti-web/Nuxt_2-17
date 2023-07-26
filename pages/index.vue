<template>
  <div>
    <h1>Home</h1>
    <hr>
    <h3 v-if="!$auth.loggedIn">Welcome to Nuxt Js Demo</h3>
    <h3 v-if="$auth.loggedIn">
    <div class="row">
       <div class="col-md-6 mt-3 col-lg-4" v-for="mountain of mountains">
        <div class="card h-100">
          <img class="card-img-top" :src="mountain.image" alt="Card image cap" style="max-height:160px">
          <div class="card-body">
            <h5 class="card-title">{{mountain.title}}</h5>
            <h4 class="card-text">{{mountain.description}}</h4>
          </div>
        </div>
      </div>
    </div>
    </h3>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>