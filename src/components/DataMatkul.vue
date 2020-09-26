<template>
	<div class="datamatkul">
		<b-container>
			<h1 style="text-align:center;margin-top: 5%">{{ msg }}</h1>
			<div>
			  <b-button v-b-modal.modal-1 variant="info">
			  <b-icon icon="plus" aria-hidden="true"></b-icon>Tambah
			  </b-button>
			  <b-modal id="modal-1" title="Menambah Data Matkul">
			    <div>
				   <b-form @submit.stop.prevent>
				    <label>Matakuliah</label>
				    <b-input type="text" id="matkul"></b-input>
				   </b-form>
				   <b-form @submit.stop.prevent>
				    <label>SKS</label>
				    <b-input type="text" id="sks"></b-input>
				   </b-form>
				   <b-form @submit.stop.prevent>
				    <label>Dosen Pengampu</label>
				    <b-input type="text" id="dosen"></b-input>
				   </b-form>
				</div>
			  </b-modal>
			</div>
			<b-table hover :items="matkul" :fields="fields" style="margin-top: 10px" head-variant="light">
				<template v-slot:cell(Action)="row">
				<router-link style="color: white;text-decoration: none !important;" to="/editmatkul">
				    <b-button id="edit" @click="row.toggleDetails" size="sm" class="mr-2" variant="primary">
				    	<b-icon icon="pencil-square" class="mr-2" aria-hidden="true"></b-icon>
				    	 Edit
				    </b-button>
				</router-link>
				    <b-button id="hapus" @click="row.toggleDetails" size="sm" class="mr-2" variant="danger">
				    	<b-icon icon="trash" class="mr-2" aria-hidden="true"></b-icon>
				    	 Hapus
				    </b-button>
				    <b-tooltip target="edit" triggers="hover">
				      Edit
				    </b-tooltip>
				    <b-tooltip target="hapus" triggers="hover">
				      Hapus
				    </b-tooltip>
				</template>
			</b-table>
		</b-container>
	</div>
</template>

<!-- Isi Tabel -->
<script>
import axios from "axios";
  export default {
  name: "DataMatkul",
  props: {
    msg: String
  },
    data() {
      return {
      	fields: ['id', 'Matkul', 'sks', 'Dosen_pengampu', 'Action'],
        matkul: []
      }
    },
    mounted() {
    	axios.get('http://localhost:3000/matkul').then(response => {
        this.matkul = response.data }).catch(error => {
        console.log(error)
        this.errored = true
      }).finally(() => this.loading = false)
    }
  };
</script>
