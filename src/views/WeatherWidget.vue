<template>
    <div
        class="widget"
    >
        <weather-header
            @update:isOpenSetting="isOpenSetting = !isOpenSetting"    
        />
        <weather-settings v-if="isOpenSetting" />
        <board v-else />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import WeatherHeader from "@/components/header/WeatherHeaders.vue";
import Loader from "@/components/Loader/Loader.vue";
import WeatherSettings from "@/components/settings/WeatherSettings.vue";
import Board from "@/components/board/Board.vue";

const isOpenSetting = ref<Boolean>(false);

</script>

<style scoped lang="scss">
@import '../assets/styles/styles.scss';

.widget {
    width: 180px;
    height: 100%;
    max-height: 300px;
    padding: 5px;
    overflow-y: auto;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #0a0a0a;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
}
</style>
