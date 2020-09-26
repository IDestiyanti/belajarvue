<template>
	<div class="formeditmatkul">
		<b-container>
			<h1 style="text-align:center;margin-top: 5%">{{ msg }}</h1>
			<div class="row" style="margin-top: 5%">
				<div class="col">
					<b-form @submit.stop.prevent>
				    	<label>Matakuliah</label>
				    	<b-input type="text" id="matkul"></b-input>
				    </b-form>
				</div>
				<div class="col">
					<b-form @submit.stop.prevent>
				    	<label>SKS</label>
				    	<b-input type="text" id="sks"></b-input>
				    </b-form>
				</div>
				<div class="col">
					<b-form @submit.stop.prevent>
				    	<label>Dosen Pengampu</label>
				    	<b-input type="text" id="dosen"></b-input>
				    </b-form>
				</div>		   
			</div>
			<br>
			<div class="row">
				<div class="col">
					<b-button block variant="primary">Simpan</b-button>
				</div>
				<div class="col">
					<b-button block>Batal</b-button>
				</div>
				<div class="col"></div>
			</div>
		</b-container>
	</div>
</template>
<script>
	export default {
		name : "FormEditMatkul",
		props : {
			msg : String
		}
	};
</script>