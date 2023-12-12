import axios from "axios"
import { computed, ref } from "vue"

export default function useClima() {

    const clima = ref({})
    const cargando = ref(false)
    const error = ref("")


    const obtenerClima = async (busquedad) => {
        // damos la api key un valor para usarlo mas facilmente esa api key esta en .env
        //y se llama import.meta.env
        clima.value = {}
        error.value = ""
        const key = import.meta.env.VITE_API_KEY
        cargando.value = true

        try {
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${busquedad.ciudad},${busquedad.pais}&limit=1&appid=${key}`
            const { data } = await axios(url)
            const { lon, lat } = data[0]

            const urlCord = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const { data: dataClim } = await axios(urlCord)
            clima.value = dataClim
            console.log(clima)
        } catch {
            error.value = " Pablo tu meteorologo de confianza no encontro la ciudad "

        } finally {

            cargando.value = false
        }
    }

    //los computed no se pueden pasar parametros
    const monstrarClima = computed(() => {
        return Object.values(clima.value).length > 0

    })



    return {
        obtenerClima,
        clima,
        monstrarClima,
        cargando,
        error
    }
}