<template>
  <!-- ? Testimoni Section -->
  <section id="testimoni">
    <div class="showcase">
      <h2>Kata Pelanggan</h2>
      <p class="lead">
        Ayo dengarkan kata pelanggan sebelumnya. Mana tau bisa nambah
        kepercayaan kamu untuk beli kambing disini?
        <i class="fas fa-smile"></i>
      </p>
      <div
        id="testimoni-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(d, index) in data" :key="d.id" :class="{ 'active': index === 0 }">
            <div class="card">
              <!-- TODO Change image -->
              <img :src="`data:image/png;base64,${d.image}`" />
              <div class="card-body">
                <p class="testimoni-title text-capitalize">{{ d.name }}</p>
                <p class="testimoni-text">"{{ d.desc }}"</p>
                <div class="rating text-warning">
                  <i class="fas fa-star fa-2x" v-for="(n,i) in d.rating" :key="i"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#testimoni-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#testimoni-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
  <!-- ? End Testimoni Section -->
</template>

<script>
export default {
  name: "Testimoni",
  props: ["data"],
};
</script>

<style></style>
