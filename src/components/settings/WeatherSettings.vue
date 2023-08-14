<template>
	<div class="settings">
		<loader v-if="weatherStore.getLoading"/>
		<draggable v-model="weatherData" tag="div" :item-key="(key: any) => key">
			<template #item="{ element: cityName }">
				<locations-list
					:citysName="cityName.cityName"
					:draggable="true"
				/>
			</template>
		</draggable>
		<add-location />
	</div>
</template>

<script setup lang="ts">
import { useWeatherStore } from "@/stores/weatherStore";
import draggable from 'vuedraggable'

import LocationsList from "@/components/settings/LocationsList/LocationsList.vue";
import AddLocation from "@/components/settings/AddLocation/AddLocation.vue";
import Loader from "@/components/Loader/Loader.vue";
import { computed, ref, watch } from "vue";


const weatherStore = useWeatherStore();
const weatherData = ref(weatherStore.getWeather);
const editWeather = computed(() => {
  	weatherStore.setEditWeather(weatherData.value);
});

watch(weatherData, () => {
  editWeather.value;
});

</script>

<style scoped lang="scss">
.settings {
	min-height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: end;
}
</style>