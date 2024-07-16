<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="">
      <img src="@/assets/logo.svg"
      alt=""
      width="30"
      height="24"
      class="d-inline-block align-text-top"
      />
      PokeApi
    </router-link>
    <div>
      <router-link class="btn btn-outline-primary" to="/">Home</router-link>
      <router-link class="btn btn-outline-primary" to="/Pokemons">Pokemons</router-link>
      <router-link class="btn btn-outline-primary" to="/Favoritos">Favoritos</router-link>
    </div>    
  </div>
</nav>  
<div class="container">
  <RouterView />
</div>
</template>
