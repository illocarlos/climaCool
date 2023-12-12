<script setup>
import Form from './components/Form.vue';
import useClima from './composable/useClima'
import ShowClim from './components/ShowClim.vue';
import SpinnerVue from './components/Spinner.vue';
import Alert from './components/Alert.vue';
//importante --> los composables se llaman SIEMPRE desde appvue 
//y si quieres pasarle esa funcion o dato se manda por prop  o evento
//esta es la forma de llamar un composable y en form mandamos esa funcion
const{ obtenerClima, clima, monstrarClima, cargando, error } = useClima()

</script>

<template>

<h1 class="titulo">Pablo the weatherman</h1>
<div class="contenedor buscador-clima">

  <Form
  @obtener-Clima="obtenerClima"
  />

  <ShowClim
  v-if="monstrarClima"
  :clima="clima"
  />
  <SpinnerVue
  v-if="cargando"
  />
  <Alert v-if="error">{{ error }} </Alert>
</div>


</template>

