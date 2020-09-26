<template>
	<div class="editdosen">
		<FormEditDosen msg="Edit Data Dosen" />
	</div>
</template>
<script>
	import FormEditDosen from "@/components/FormEditDosen.vue";

	export default {
		name : "EditDosen",
		components :
		{
			FormEditDosen
		},
	};
</script>