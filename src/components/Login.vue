<script setup>
import { inject } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
const dialogRef = inject('dialogRef')
const closeDialog = () => {
	dialogRef.value.close()
}
</script>

<template>
	<div class="flex flex-col px-5 py-5 gap-4" style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))">
		<div class="inline-flex flex-column gap-2">
			<label for="username" class="text-primary-50 font-semibold">賬號</label>
			<InputText id="username" class="bg-white-alpha-20 border-none p-3 text-primary-50 w-20rem"></InputText>
		</div>
		<div class="inline-flex flex-column gap-2">
			<label for="password" class="text-primary-50 font-semibold">密碼</label>
			<InputText id="password" class="bg-white-alpha-20 border-none p-3 text-primary-50 w-20rem" type="password"></InputText>
		</div>
		<div class="flex align-items-center gap-3">
			<Button label="取消" @click="closeCallback" text class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
			<Button label="登入" @click="closeCallback" text class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
		</div>
	</div>
</template>
