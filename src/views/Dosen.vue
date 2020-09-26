<template>
	<div class="dosen">
		<DataDosen msg="Data Dosen" />
	</div>
</template>
<script>
	import DataDosen from "@/components/DataDosen.vue";

	export default {
		name : "Dosen",
		components :
		{
			DataDosen
		},
	};
</script>