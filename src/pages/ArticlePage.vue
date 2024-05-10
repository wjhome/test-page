<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from 'primevue/breadcrumb'
const router = useRouter()
const route = useRoute()
const article = ref({})
const title = ref('')
const articleInfo = async id => {
	await getArticle(id)
	router.push(`/article/${id}`)
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth', // 使用平滑的滾動效果
	})
	return
}

const getArticle = async value => {
	const response = await axios.get(`https://www.buycar.hk/car/api/article/${value}`)
	article.value = response.data
	title.value = response.data.title
	return
}

const home = ref({
	icon: 'pi pi-book',
	route: '/articles',
})

let items = ref([{ label: '熱門文章' }, { label: '排行榜系列' }, { label: title }])

onMounted(async () => {
	await getArticle(route.params.id)
})
</script>

<template>
	<div class="card flex justify-content-center">
		<Breadcrumb :home="home" :model="items">
			<template #item="{ item, props }">
				<router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
					<a :href="href" v-bind="props.action" @click="navigate">
						<span :class="[item.icon, 'text-color']" />
						<span class="text-primary font-semibold">{{ item.label }}</span>
					</a>
				</router-link>
				<a v-else :href="item.url" :target="item.target" v-bind="props.action">
					<span class="text-color">{{ item.label }}</span>
				</a>
			</template>
		</Breadcrumb>
	</div>
	<div class="card">
		<h1>{{ article?.title }}</h1>

		<div class="card" v-html="article?.content"></div>

		<!-- <Carousel :value="article?.car_photo" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions">
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
			<h1>{{ article?.car_brand.car_brand }}</h1>
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
		</div> -->
	</div>
	<div class="card">
		<p class="text-2xl">熱門文章</p>
		<divider></divider>
		<div class="grid grid-cols-3 gap-1">
			<template v-for="article in article?.hit_articles" :key="article">
				<Article :data="article" @click="articleInfo(article.id)"> </Article>
			</template>
		</div>
	</div>
</template>
