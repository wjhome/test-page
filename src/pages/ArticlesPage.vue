<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Article from '../components/Article.vue'

const router = useRouter()

const relatedCars = ref()
const tabs = ref([
	{ title: '排行榜系列', content: 'Tab 1 Content' },
	{ title: '最強整合', content: 'Tab 2 Content' },
	{ title: '牌費須知', content: 'Tab 3 Content' },
])
const articles = ref()

const carInfo = async id => {
	await getArticles(id)
	router.push(`/carinfo/${id}`)
	return
}

const getArticles = async value => {
	const response = await axios.get(`https://www.buycar.hk/car/api/articles/1`)
	relatedCars.value = response.data.results
	articles.value = response.data.results
	return
}

onMounted(async () => {
	await getArticles()
})
</script>

<template>
	<div class="card">
		<TabView>
			<TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
				<div class="grid grid-cols-3 gap-1">
					<template v-for="article in articles" :key="car">
						<Article :data="article" @click="$router.push(`/article/${article.id}`)"></Article>
						<!-- <Card :data="car" @click="$router.push(`/carinfo/${car.id}`)"> </Card> -->
					</template>
				</div>
			</TabPanel>
		</TabView>
	</div>
</template>
