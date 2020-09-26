<template>
	<div class="matakuliah">
		<DataMatkul msg="Data Matakuliah" />
	</div>
</template>
<script>
	import DataMatkul from "@/components/DataMatkul.vue";

	export default {
		name : "Matakuliah",
		components : {
			DataMatkul
		}
	};
</script>