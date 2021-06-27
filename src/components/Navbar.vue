<template>
  <!-- ? Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <ul class="navbar-nav ml-5 mb-2 mb-lg-0 justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/ ">Beranda</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tentang-kami">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#produk">Produk</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#testimoni">Testimoni</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#hubungi-kami">Hubungi Kami</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- ? End Navbar -->
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style></style>
