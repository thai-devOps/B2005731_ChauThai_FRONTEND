<script lang="ts">
export default {
  name: 'AppHeader'
}
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Ứng dụng quản lý danh bạ</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/"
            ><span>Danh bạ</span> <i class="fa-solid fa-address-book"></i
          ></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
