<script setup>
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
</script>

<template>
	<div class="card p-fluid flex flex-col gap-5">
		<img src="https://www.buycar.hk/dist/static/contact-us-ads-desktop.df173b77.png" alt="" />

		<div class="p-fluid flex flex-wrap gap-3">
			<div class="flex-auto">
				<label for="ssn" class="font-bold block mb-2 text-left">稱呼</label>
				<InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="請輸入姓名" />
			</div>

			<div class="flex-auto">
				<label for="phone" class="font-bold block mb-2 text-left">WhatsApp 電話</label>
				<InputMask id="phone" v-model="value2" mask="9999-9999" placeholder="9999-9999" />
			</div>
		</div>

		<div class="p-fluid">
			<label for="content" class="font-bold block mb-2 text-left">留言</label>
			<Textarea id="content" v-model="value" rows="5" cols="30" />
		</div>

		<div class="p-fluid">
			<Button class="w-full">發送</Button>
		</div>
	</div>
</template>
