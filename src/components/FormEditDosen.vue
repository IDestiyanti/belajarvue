<template>
	<div class="formeditdosen">
		<b-container>
			<h1 style="text-align:center;margin-top: 5%">{{ msg }}</h1>
			<div class="row" style="margin-top: 5%">
				<div class="col">
					<b-form @submit.stop.prevent>
				    	<label>NIP</label>
				    	<b-input type="text" id="nip"></b-input>
				    </b-form>
				    <b-form @submit.stop.prevent>
				    	<label>Nama</label>
				    	<b-input type="text" id="nama"></b-input>
				    </b-form>
				</div>
				<div class="col">
					<b-form @submit.stop.prevent>
				    	<label>Alamat</label>
				    	<b-input type="text" id="alamat"></b-input>
				    </b-form>
				    <b-form @submit.stop.prevent>
				    	<label>No Telepon</label>
				    	<b-input type="text" id="no_telp"></b-input>
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
			</div>
		</b-container>
	</div>
</template>
<script>
	export default {
		name : "FormEditDosen",
		props : {
			msg : String
		}
	};
</script>