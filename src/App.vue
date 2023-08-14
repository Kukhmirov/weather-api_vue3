<template>
    <weather-widget />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import WeatherWidget from '@/views/WeatherWidget.vue';
import { useWeatherStore } from "@/stores/weatherStore";
import { getFromLocalStorage } from "@/utils/localStorage";
import { LOCAL } from './constants/costants';

const store = useWeatherStore();

onMounted(() => {
  if(store.getWeather.length === 0) {
    const weatherLocal = getFromLocalStorage(LOCAL.WEATHER);
    
    if (weatherLocal !== null) {
      weatherLocal.forEach(async(element: any) => {
        await store.fetchWeatherByCity(element.cityName);
      });
    }
  };
});
</script>

<style lang="scss">
  button,
  input {
    font-family: inherit;
  }
</style>
