<template>
	<div className="loader">
		<div></div>
	</div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/styles.scss";
.loader {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	padding: 20px 0;

    div {
        width: 20px;
        height: 20px;
        border: 2px solid $error-color;
        border-top: 2px solid $item-color;
        border-radius: 50%;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
    }
}

@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

</style>
