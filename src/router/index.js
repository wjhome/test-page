import { createRouter, createWebHistory } from 'vue-router'
console.log('router')
const routes = [
	{
		path: '/test-page',
		redirect: '/',
	},
	{
		path: '/',
		component: () => import('../layouts/baseLayout.vue'),
		children: [
			{
				path: '',
				component: () => import('../pages/HomePage.vue'),
			},
			{
				path: 'carinfo/:id',
				name: 'Carinfo',
				component: () => import('../pages/CarInfoPage.vue'),
				props: { data: {} },
			},
			{
				path: 'articles',
				component: () => import('../pages/ArticlesPage.vue'),
				props: { data: {} },
			},
			{
				path: 'article/:id',
				component: () => import('../pages/ArticlePage.vue'),
				props: { data: {} },
			},
			{
				path: 'contact',
				component: () => import('../pages/ContactPage.vue'),
			},
		],
	},

	{
		path: '/home',
		component: () => import('../pages/HomePage.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})
console.log(router)
export default router
