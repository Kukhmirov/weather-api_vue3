<template>
    <div class="weather-board">
        <div v-for="item in weatherStore.getWeather" :key="item.cityName" class="weather-board__card">
            <div class="weather-board__location-title">
				<p>{{ item.cityName }}</p>
				<img
					:src="`https://flagcdn.com/20x15/${item.country.toLowerCase()}.png`"
					:alt="item.country"
				/>
			</div>
            <div class="weather-board__main-temperature">
				<img :src="`https://openweathermap.org/img/wn/${item.weatherIcon}@2x.png`" alt="weather" />
				<p>{{ Math.round(item.temp) }}°C</p>
			</div>
            <div class="weather-board__marque">
                <p>
                    Feels like - {{ Math.round(item.feelsLike) }}°C.
                    {{ item.clouds }}
                </p>
            </div>
            <hr class="weather-board__divider" />
            <div class="weather-board__other">
                <div>
                    <font-awesome-icon :icon="['fas', 'wind']" />
                    {{ Math.round(item.windSpeed) }} m/s
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'arrow-down-short-wide']" />
                    {{ Math.round(item.pressure) }} hPa
                </div>
            </div>
            <div class="weather-board__other">
                <div>
                    <font-awesome-icon :icon="['fas', 'droplet']" /> 
                    {{ item.humidity }} %
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'eye']" />
                    {{ item.visibility / 1000 }} km
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from "@/stores/weatherStore";

const weatherStore = useWeatherStore();
</script>


<style scoped lang="scss">
.weather-board {
    &__card {
        background-color: aquamarine;
        border-radius: 8px;
        margin: 10px 0;
        padding: 5px;
    }
    &__location-title {
        display: flex;
        align-items: center;
        img {
            height: 15px;
            margin-left: 10px;
        }
    }
    &__main-temperature {
        display: flex;
        align-items: center;
        img {
            height: 50px;
        }
    }
    &__marque {
        overflow: hidden;
        position: relative;
        white-space: nowrap;
        p {
            display: inline-block;
            animation: marquee 15s linear infinite;
        }
    }
    &__divider {
        width: 100%;
        height: 1px;
        background: white;
        opacity: 0.2;
        border-radius: 1px;
        border: none;
        margin-top: 20px;
    }
    &__other {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px 0;
    }
    @keyframes marquee {
        0% {
            transform: translateX(50%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
}
</style>