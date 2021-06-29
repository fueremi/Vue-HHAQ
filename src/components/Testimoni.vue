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
          <!-- <div class="carousel-item active">
            <div class="card">
              <img src="../assets/messy.jpeg" alt="..." />
              <div class="card-body">
                <p class="testimoni-title">Messy Triandani</p>
                <p class="testimoni-text">
                  "Assalammualaikum, terima kasih mas Hendra kambingnya sudah
                  saya terima dalam keadaan sehat dan bagus. Harganya juga
                  terjangkau. "
                </p>
                <div class="rating text-warning">
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img src="../assets/junia.jpeg" alt="..." />
              <div class="card-body">
                <p class="testimoni-title">Junia Erlina</p>
                <p class="testimoni-text">
                  "Jazakallahu Khairan Mas Hendra, Kambing yang dipesan untuk
                  acara aqiqah kemarin kualitasnya sangat bagus."
                </p>
                <div class="rating text-warning">
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img src="../assets/satria.jpeg" alt="..." />
              <div class="card-body">
                <p class="testimoni-title">Satria Budi Apriansyah</p>
                <p class="testimoni-text">
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  laborum odio deleniti, in sit ab recusandae quae eos ipsam
                  fugit."
                </p>
                <div class="rating text-warning">
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <img src="../assets/allyka.jpeg" alt="..." />
              <div class="card-body">
                <p class="testimoni-title">Alyka Mellyana Akhmad</p>
                <p class="testimoni-text">
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  laborum odio deleniti, in sit ab recusandae quae eos ipsam
                  fugit."
                </p>
                <div class="rating text-warning">
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                  <i class="fas fa-star fa-2x"></i>
                </div>
              </div>
            </div>
          </div> -->
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
