        <script setup>
import { reactive, ref } from "vue"
import Alert from './Alert.vue'


// aqui recogemos con emit la funcion del composable que la llamamos en appvue siempre para centralizarla
// y aqui la manejamos donde queramos
        const emit = defineEmits(['obtener-clima'])


        const busquedad = reactive({
                    ciudad:"",
                    pais: ""
    
})
const error=ref("")
        const paises = [
            { codigo: 'US', nombre: 'Estados Unidos' },
            { codigo: 'MX', nombre: 'México' },
            { codigo: 'AR', nombre: 'Argentina' },
            { codigo: 'CO', nombre: 'Colombia' },
            { codigo: 'CR', nombre: 'Costa Rica' },
            { codigo: 'ES', nombre: 'España' },
            { codigo: 'PE', nombre: 'Perú' }
        ]


//mandamos el composable a esta funcion ya que tiene que pasar unos filtros que son los dos if 
//y si los pasa realizamos la funcion del composable y le mandamos la informacion del reactive 
        const validate = () => {
                    if (busquedad.ciudad==="") {
                               return error.value = "ciudad requerida"
                            
                            } else if (busquedad.pais === "") {
                              return  error.value = "pais requerido"
                             
                            }
                    error.value = ""
       emit('obtener-clima', busquedad)

            
        }
        </script>
<template>

<form class="formulario"
@submit.prevent="validate"
>
<Alert
v-if="error"
><p>{{ error }}</p>
</Alert>

<div class="campo">
    <label for="ciudad">city</label>
    <input type="text"
    id="ciudad"
    placeholder="write the name of the city"
    v-model="busquedad.ciudad">
</div>
    <div class="campo">
        <label for="pais">country</label>
      <select id="pais"
      v-model="busquedad.pais">
        <option value="">-- select country here --</option>
        <option
         v-for="country in paises" 
         :key="country.codigo"
        :value="country.codigo">{{ country.nombre }}</option>
      </select>
    </div>
    <button
    type="submit">send</button>
</form>
</template>

