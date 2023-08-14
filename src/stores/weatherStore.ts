import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { Weather } from "@/types/Interface";
import {setToLocalStorage, removeLocalStorageById} from "@/utils/localStorage";
import { API, LOCAL } from "@/constants/costants";


export const useWeatherStore = defineStore("weatherStore", () => {
    const weather = ref<Weather[]>([]);
    const loading = ref<Boolean>(false);
    const clearSearchInput = ref<Boolean>(true);

    const fetchWeatherByCity = async(city:string) => {
        try {
            const query = `?q=${city}&units=metric&appid=${API.WEATHER_API_KEY}`;
            clearSearchInput.value = false;
            loading.value = true;
            const response = await fetch(API.WEATER_API+query);
            const data = await response.json();
            loading.value = false;
            
            if (data.cod === '404') {
                console.error("Город не найден");
                
                return;
            }
            if (!weather.value.some(item => item.cityName === data.name)) {
                weather.value.push({
                    country: data.sys.country,
                    feelsLike: data.main.feels_like,
                    cityName: data.name,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    temp: data.main.temp,
                    windSpeed: data.wind.speed,
                    weatherIcon: data.weather[0].icon, 
                    clouds: data.weather[0].description,
                    visibility: data.visibility,
                });
                setToLocalStorage(LOCAL.WEATHER, weather.value);
                clearSearchInput.value = true;

                return;
            }
        } catch (error) {
            console.log('Ошибка:', error);
        }
    };

    const removeWeatherByCity = (cityName:string) => {
        const index = weather.value.findIndex(item => item.cityName === cityName);
        const test = weather.value.reduce((acc:Weather[], item) => {
            if(item.cityName !== cityName) {
                acc.push(item);
            }
            return acc;
        }, []);
        // weather.value = test;
        if (index !== -1) {
            weather.value.splice(index, 1);
            removeLocalStorageById(LOCAL.WEATHER, cityName);
        };
    };

    const setEditWeather = (data: Weather[]) => {
        weather.value = data;
        setToLocalStorage(LOCAL.WEATHER, weather.value);
    }
    
    const getCityName = computed(() => weather.value.map(data => data.cityName));

    const getLoading = computed(() => loading.value);

    const getWeather = computed(() => weather.value);

    const getClearSearchInput = computed(() => clearSearchInput.value);

    return {
        fetchWeatherByCity,
        removeWeatherByCity,
        setEditWeather,
        getCityName,
        getLoading,
        getWeather,
        getClearSearchInput,
    };
});