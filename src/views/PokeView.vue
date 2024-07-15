<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '../composables/getData.js'

const route = useRoute();
const router = useRouter();

const back = ()=> {
    router.push('/pokemons');
}

const { data, getData, loading } = useGetData();
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>    
    <div v-if="data">
    <img :src="data?.sprites?.front_default" alt="">
    <h1>{{ data.id }} - {{ data.name }}</h1>
    <button class="btn btn-primary" @click="back">Volver</button>
    </div>
    <h1 v-else>Not found</h1>
</template>