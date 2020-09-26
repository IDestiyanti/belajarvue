<template>
  <div id="app"> 
    <div>
    <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <router-link style="color: white;text-decoration: none !important;" to="/">TU Universitas Ahmad Dahlan</router-link></b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
           <b-nav-item><router-link style="color: white;text-decoration: none !important;" to="/">Home</router-link></b-nav-item>
           <b-nav-item><router-link style="color: white;text-decoration: none !important;" to="/matakuliah">Matakuliah</router-link></b-nav-item>
           <b-nav-item><router-link style="color: white;text-decoration: none !important;" to="/dosen">Dosen</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <router-view></router-view>

  <div>
    <b-navbar toggleable="sm" type="dark" variant="info">
      <b-navbar-toggle target="nav-text-collapse" ></b-navbar-toggle>
    </b-navbar>
  </div>
  </div>
</template>

