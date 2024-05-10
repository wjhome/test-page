<script setup>
import Divider from 'primevue/divider'
import RadioButton from 'primevue/radiobutton'
import Checkbox from 'primevue/checkbox'
import Dropdown from 'primevue/dropdown'
import Card from '../components/Card.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
const carBands = ref()
const cars = ref()
const getCarBand = async () => {
	const response = await axios.get('https://www.buycar.hk/car/api/capture_car/car_brand')
	carBands.value = response.data.results
	return
}

const getCars = async () => {
	const response = await axios.get('https://www.buycar.hk/car/api/searchcars/')
	cars.value = response.data.results
	return
}
const tabs = ref([
	{ title: '綜合排序', content: 'Tab 1 Content' },
	{ title: '價格最低', content: 'Tab 2 Content' },
	{ title: '價格最高', content: 'Tab 3 Content' },
])

const selectedCity = ref()

const cities = ref([
	{ name: 'New York', code: 'NY' },
	{ name: 'Rome', code: 'RM' },
	{ name: 'London', code: 'LDN' },
	{ name: 'Istanbul', code: 'IST' },
	{ name: 'Paris', code: 'PRS' },
])

const ingredient = ref(false)
const selectedCarBand = ref()
const pizza = ref(false)

onMounted(async () => {
	await getCarBand()
	await getCars()
})
</script>

<template>
	<div>
		<img src="https://www.buycar.hk/dist/static/newHomeBackground.7872755b.png" alt="" />
	</div>
	<div class="card">
		<Divider />
		<div class="flex flex-wrap gap-3">
			<h2>品牌:</h2>
			<div class="flex align-items-center" v-for="carBand in carBands" :key="carBand.id">
				<RadioButton v-model="selectedCarBand" :inputId="carBand.id" :name="carBand.car_brand" :value="carBand" />
				<label :for="carBand.id" class="ml-2">{{ carBand.car_brand }}</label>
			</div>
		</div>
		<Divider />
		<div class="flex flex-wrap gap-3">
			<h2>價格範圍:</h2>
			<div class="flex align-items-center">
				<RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
				<label for="ingredient1" class="ml-2">5萬內</label>
			</div>
			<div class="flex align-items-center">
				<RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
				<label for="ingredient2" class="ml-2">10萬內</label>
			</div>
			<div class="flex align-items-center">
				<RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
				<label for="ingredient3" class="ml-2">15萬內</label>
			</div>
			<div class="flex align-items-center">
				<RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
				<label for="ingredient4" class="ml-2">20萬內</label>
			</div>
		</div>
		<Divider />
		<div class="flex flex-wrap justify-content-center gap-3">
			<h2>動力系統:</h2>
			<div class="flex align-items-center">
				<Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
				<label for="ingredient1" class="ml-2"> 電動 </label>
			</div>
			<div class="flex align-items-center">
				<Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
				<label for="ingredient2" class="ml-2"> 汽油 </label>
			</div>
			<div class="flex align-items-center">
				<Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
				<label for="ingredient3" class="ml-2"> 柴油 </label>
			</div>
			<div class="flex align-items-center">
				<Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
				<label for="ingredient4" class="ml-2"> 混能 </label>
			</div>
		</div>
		<Divider />
		<div class="flex flex-wrap justify-content-center gap-3">
			<h2>其他：</h2>
			<div class="flex align-items-center">
				<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="類型" class="w-full md:w-14rem" />
			</div>
			<div class="flex align-items-center">
				<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="首數" class="w-full md:w-14rem" />
			</div>
			<div class="flex align-items-center">
				<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="公里數" class="w-full md:w-14rem" />
			</div>
			<div class="flex align-items-center">
				<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="傳動" class="w-full md:w-14rem" />
			</div>
		</div>
	</div>
	<div class="card">
		<TabView>
			<TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
				<div class="grid grid-cols-4 gap-1">
					<template v-for="car in cars" :key="car">
						<Card :data="car" @click="$router.push(`/carinfo/${car.id}`)"> </Card>
					</template>
				</div>
			</TabPanel>
		</TabView>
	</div>
</template>
