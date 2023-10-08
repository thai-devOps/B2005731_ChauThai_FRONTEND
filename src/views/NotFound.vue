<template>
  <div class="page">
    <p>
      Oops, không thể tìm thấy trang. Trở về
      <router-link to="/">trang chủ.</router-link>
    </p>
  </div>
</template>

<style scoped>
.page{
    height: 100%;
    display: grid;
    min-height: 100vh;
    place-items: center;
}
</style>