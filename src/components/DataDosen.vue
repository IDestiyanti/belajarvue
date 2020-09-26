<template>
	<div class="datadosen">
		<b-container>
			<b-form @submit.prevent="save" @reset="onReset">
				<div class="row bg-info rounded" style="height: 50px;margin-top: 3%;margin-bottom: 2%">
					<div class="col">
						<h5 style="text-align: center;padding: 10px;color: white;font-weight: bold">TAMBAH DATA DOSEN</h5>
					</div>
				</div>
			    <div class="row">
			    	<div class="col">
					    <label>NIP</label>
					    <b-input type="text" id="nip" v-model="form.NIP"></b-input>
					  
			    	</div>
			    	<div class="col">
					    <label>Nama</label>
					    <b-input type="text" id="nama" v-model="form.Nama"></b-input>
			    		
			    	</div>
			    	<div class="col">
					    <label>Kota Tinggal</label>
					    <b-input type="text" id="alamat" v-model="form.Alamat"></b-input>
			    	</div>
			    	<div class="col">
					  
					    <label>No Telepon</label>
					    <b-input type="text" id="no_telp" v-model="form.No_Telp"></b-input>	    		
			    		
			    	</div>
				</div>
				<div class="row" style="margin-top: 3%">
					<div class="col">
				   		<b-button type="submit" style="" variant="primary" @click="alert">Simpan</b-button>		
				   		<b-button variant="primary" @click="load" style="margin-left: 2%">load</b-button>		
				    	<b-button type="reset" variant="danger" style="margin-left: 2%">Batal</b-button>	
					</div>
				</div>
			</b-form>

			<div class="row bg-info rounded" style="height: 50px;margin-top: 5%;margin-bottom: 2%">
					<div class="col">
						<h5 style="text-align: center;padding: 10px;color: white;font-weight: bold">DAFTAR DATA DOSEN</h5>
					</div>
			</div>
			<b-table hover :items="dosen" :fields="fields" style="margin-top: 10px" head-variant="light">
			<template v-slot:cell(Action)="row">
				<center>
				<router-link style="color: white;text-decoration: none !important;" to="/editdosen">
				    <b-button id="edit" @click="row.toggleDetails" size="sm" class="mr-2" variant="primary">
				    	<b-icon icon="pencil-square" class="mr-2" aria-hidden="true"></b-icon>
				         Edit
				    </b-button>
				</router-link>
				    <b-button size="sm" class="mr-2" variant="danger">
				    	<b-icon icon="trash" class="mr-2" aria-hidden="true"></b-icon>
				         Hapus
				    </b-button>	
				</center>
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
  name: "DataDosen",
  props: {
    msg: String
  },
    data() {
      return {
      	form: {
      		id : '',
      		NIP: '',
      		Nama: '',
      		Alamat: '',
      		No_Telp: ''
      	},
      	fields: ['id', 'NIP', 'Nama', 'Alamat', 'No_Telp', 'Action'],
        dosen: []
      }
    },
    async mounted() {
    	this.load()
    },

    methods: {
    	async load(){
    		const response = await axios.get('http://localhost:3000/Dosen')

    		this.dosen = response.data
    			
    	},
	    async save() {
	  
	    	const response = await axios.post('http://localhost:3000/Dosen', this.form)
	    		
	    		this.dosen = response.data

		    	this.form.NIP = ''
		    	this.form.Nama = ''
		    	this.form.Alamat = ''
		    	this.form.No_Telp = ''
	   
	 		
	    },
	    alert(){
	    	alert("Berhasil Simpan !!");
	    },
	    onReset(evt) {
		    evt.preventDefault()
		        // Reset our form values
		      	this.form.NIP = ''
		    	this.form.Nama = ''
		    	this.form.Alamat = ''
		    	this.form.No_Telp = ''
		        // Trick to reset/clear native browser form validation state
		        this.show = false
		        this.$nextTick(() => {
		          this.show = true
		        })
      }/*,
      async delete(user) {

      		const response = await axios.delete('http://localhost:3000/Dosen/' + user.id)

      			this.dosen = response.data
      			let index = this.dosen.indexOf(form.NIP)
      			let index = this.dosen.indexOf(form.Nama)
      			let index = this.dosen.indexOf(form.Alamat)
      			let index = this.dosen.indexOf(form.No)
      			this.dosen.splice(index,1)
      }*/
    }
  };
</script>