<template>
	<div class="editmatkul">
		<FormEditMatkul msg="Edit Data Matakuliah" />
	</div>
</template>
<script>
	import FormEditMatkul from "@/components/FormEditMatkul.vue";

	export default {
		name : "EditMatkul",
		components :
		{
			FormEditMatkul
		},
	};
</script>