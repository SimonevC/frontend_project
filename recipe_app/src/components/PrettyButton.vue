<script setup lang="ts">
defineProps({
	fab: {
		required: false,
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["clicked"]);

function buttonClick() {
	emit("clicked");
}
</script>

<template>
	<div
		:class="{
			fabClass: fab,
		}"
		class="button"
		@click="buttonClick"
	>
		<slot />
	</div>
</template>

<style scoped lang="css">
.button {
	border: 1px solid white;
	background-color: rgb(139, 247, 38);
	border-radius: 3px;
	color: rgb(255, 255, 255);
	cursor: pointer;
	padding: 1rem 4rem;
	display: inline-block;
}

.fabClass {
	border-radius: 50%;
	aspect-ratio: 1/1;
	background-color: rgb(255, 0, 0);
	color: white;
	cursor: pointer;
	font-size: 2rem;
	position: absolute;
	display: flex;
	bottom: 0;
	right: 0;
	align-items: center;
	margin: 1rem;
}
</style>