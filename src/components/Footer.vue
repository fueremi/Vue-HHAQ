<template>
  <section>
    <div class="bg-dark text-secondary px-4 py-3 text-center" id="hubungi-kami">
      <div class="py-5">
        <h2 class="text-white mb-5">Hubungi Kami</h2>
        <div class="col-lg-6 col-md-6 mx-auto mb-3">
          <p class="text-light">
            <b>Alamat</b>: Lorong Melati, Suka Bangun, Sukarami, Palembang City,
            South Sumatra 30961
          </p>
        </div>
        <div class="col-lg-6 col-md-6 mx-auto mb-5">
          <div id="map" class="map"></div>
        </div>
        <div class="col-lg-6 col-md-6 mx-auto">
          <p class="text-light"><b>Nomor HP</b>: +62 852 5771 8266</p>
        </div>
        <div class="col-lg-6 col-md-6 mx-auto">
          <p class="text-light"><b>Media Sosial Kami</b></p>
        </div>
        <div class="col-lg-6 col-md-6 mx-auto fs-1">
          <p>
            <i class="fab fa-whatsapp text-success mx-2"></i>
            <a href="https://instagram.com/fueremi" target="__blank"
              ><i class="fab fa-instagram text-danger mx-2"></i
            ></a>
            <a href="https://facebook.com/fueremi" target="__blank"
              ><i class="fab fa-facebook text-primary mx-2"></i
            ></a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "Footer",
  methods: {
    async loadMap() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZnVlcmVtaSIsImEiOiJja213enRyNG8wMXQ4MnJ0M3U2OHluNW95In0.zqjbe3Jt0vvb5vkbz-y8IA";
      const storeLocation = [104.73827996749125, -2.9361865328077195];

      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: storeLocation,
        zoom: 17,
        antialias: true,
      });

      var marker1 = new mapboxgl.Marker().setLngLat(storeLocation).addTo(map);
    },
  },
  async mounted() {
    await this.loadMap();
  },
};
</script>

<style scoped>
#map {
  height: 250px;
}
</style>
