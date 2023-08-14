<template>
	<div
		class="settings-content" @dragover.prevent
	>
		<font-awesome-icon
			:icon="['fas', 'fingerprint']"
		/>
		{{ citysName }}
		<font-awesome-icon
			class="settings-content__remove"
			:icon="['fas', 'trash']"
			@click="weatherStore.removeWeatherByCity(citysName)"
		/>
	</div>
</template>

<script setup lang="ts">
import { useWeatherStore } from "@/stores/weatherStore";

interface Props {
	citysName: string;
}

const weatherStore = useWeatherStore();

defineProps<Props>();

</script>

<style scoped lang="scss">
.settings-content {
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 5px 0;
	padding: 5px;
	background-color: bisque;
	&__remove {
		cursor: pointer;
	}
}
</style>