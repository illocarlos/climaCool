        <script setup>
        import{ formateClim }from'../helper/index'

        


        const prop = defineProps({
                    clima: {
                        type: Object,
                        required: true
        
    }
})


        </script>
<template>
   <div class="resultado">
    <h2>Place: {{ clima.name }}</h2>
    <p class="actual">{{ formateClim(clima.main.temp)}}&deg;C</p>
    <div class="temperaturas">
        <p>Weather: <span>{{clima.weather[0].main}}</span></p>
        <p>Winds: <span>{{ clima.wind.speed }}km/h</span></p>
        <p>Min: {{ formateClim(clima.main.temp_min) }}<span>&deg;C</span></p>
        <p>Max: {{ formateClim(clima.main.temp_max) }}<span>&deg;C</span></p>
    </div>
   </div>
</template>


