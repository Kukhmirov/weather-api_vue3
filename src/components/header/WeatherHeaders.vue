<template>
    <div
        class="widget-header"
    >
        <h2
            class="widget-header__title"
        >
            Weather widget
        </h2>
        <div class="widget-header__buttons">
            <font-awesome-icon
                class="widget-header__setting"
                v-if="isOpenSetting"
                :icon="['fas', 'xmark']"
                @click="toggleOpenSetting"
            />
            <font-awesome-icon
                v-if="!isOpenSetting"
                class="widget-header__setting"
                :icon="['fas', 'gear']"
                @click="toggleOpenSetting"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const emit = defineEmits(["update:isOpenSetting"]);

const isOpenSetting = ref<Boolean>(false);

const toggleOpenSetting = () => {
    isOpenSetting.value = !isOpenSetting.value;
    emit("update:isOpenSetting");
};

</script>

<style scoped lang="scss">
.widget-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: black;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    &__buttons {
        display: flex;
    }
    &__setting {
        cursor: pointer;
        width: 15px;
        height: 15px;
    }
}
</style>