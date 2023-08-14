<template>
    <div class="settings-add">
        <input
            v-model="city"
            type="text"
            :class="{'input-invalid': !store.getClearSearchInput}"
        >
        <font-awesome-icon
            class="settings-add__button"
            :icon="['fas', 'plus']"
            @click="handleSetCity"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWeatherStore } from "@/stores/weatherStore";

const store = useWeatherStore();

const city = ref<string>("");

const handleSetCity = async() => {
    city.value = city.value.trim();
    console.log(city.value);
    
    if(city.value.trim() !== "") {
        await store.fetchWeatherByCity(city.value);
    }
    if (store.getClearSearchInput) {
        city.value = "";
    }
};

</script>

<style scoped lang="scss">
.settings-add {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    input {
        font-size: 12px;
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
        border: 1px solid black;
        color: black;
        border-radius: 10px;
        font-size: 16px;
    }
    &__button {
        cursor: pointer;
        margin-left: 5px;
    }
    .input-invalid {
        border: 1px solid red;
    }
}


</style>@/stores/weatherStore