<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Carousel from 'primevue/carousel'
import Tag from 'primevue/tag'

const router = useRouter()
const route = useRoute()

const carBands = ref()
const relatedCars = ref()
const car = ref()

const carInfo = async id => {
	await getCar(id)
	router.push(`/carinfo/${id}`)
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth', // 使用平滑的滾動效果
	})
	return
}
const getCarBand = async () => {
	const response = await axios.get('https://www.buycar.hk/car/api/capture_car/car_brand')
	carBands.value = response.data.results
	return
}
const getCar = async value => {
	const response = await axios.get(`https://www.buycar.hk/car/api/searchcars/?id=${value}`)
	console.log(response)
	relatedCars.value = response.data.results
	car.value = response.data.results.find(result => result.id == value)
	return
}

onMounted(async () => {
	await getCarBand()
	await getCar(route.params.id)
})
</script>

<template>
	<div class="card">
		<Carousel :value="car?.car_photo" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions">
			<template #item="slotProps">
				<div class="border-1 surface-border border-round m-2 p-3">
					<div class="mb-3">
						<div class="relative mx-auto">
							<img :src="slotProps.data.path" class="w-full border-round" />
							<Tag :value="slotProps.data.car" class="absolute" style="left: 5px; top: 5px" />
						</div>
					</div>
				</div>
			</template>
		</Carousel>
		<div class="flex justify-between items-center">
			<h1>{{ car?.car_brand.car_brand }}</h1>
			<div>
				<Button class="mr-2">免費咨詢</Button>
				<Button>聯絡車主</Button>
			</div>
		</div>

		<Divider />
		<div class="text-left text-2xl text-red-600">$ {{ car?.original_price }} 獨家優惠價格</div>
		<Divider />

		<div class="flex justify-content-between align-items-center">
			<div class="mt-0 font-semibold text-xl">{{ car?.review }}</div>
		</div>
	</div>
	<div class="grid grid-cols-4 gap-1">
		<template v-for="car in relatedCars" :key="car">
			<Card :data="car" @click="carInfo(car.id)"> </Card>
		</template>
	</div>
</template>
