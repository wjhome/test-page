<script setup>
import Card from 'primevue/card'
const props = defineProps({
	data: {},
})
</script>

<template>
	<Card style="overflow: hidden">
		<template #header>
			<img class="h-56 w-full" alt="user header" :src="data.car_cover_photo.original_photo_path" />
		</template>
		<template #title>
			<div class="text-left">
				{{ data.car_brand.car_brand }}
			</div>
		</template>
		<template #subtitle>
			<div class="text-left">
				{{ data.car_model }}
			</div>
		</template>
		<template #content>
			<div class="text-left text-2xl text-red-600">${{ data.original_price }}</div>
			<Divider />
			<div class="flex items-center justify-center">
				<p>{{ data.state }}首</p>

				<Divider layout="vertical" />

				<p>{{ data.engine_size }}cc</p>

				<Divider layout="vertical" />
				<p>{{ data.power_train.power_train }}</p>
			</div>
		</template>
	</Card>
</template>
