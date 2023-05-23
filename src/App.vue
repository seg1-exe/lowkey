<template>
  <div id="app">
    <header>
      <div class="nav-left">
        <h1>Lowkey</h1>
      </div>
      <div class="nav-mid">
        <img src="/images/lowkey3pts.jpeg" alt="logo">
      </div>
      <div class="nav-right">
        <router-link to="/">Home</router-link>
        <router-link to="/articles">Articles</router-link>
        <router-link to="/">Contact</router-link>
      </div>
    </header>
    <router-view></router-view>

  </div>
</template>

<script setup>
</script>

<style>
</style>
