<template>
  <main>
    <Landing />
    <Tentang-Kami />
    <Produk />
    <Testimoni :data="this.$store.state.testimoni" />
  </main>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing";
import TentangKami from "@/components/Tentang-Kami";
import Produk from "@/components/Produk";
import Testimoni from "@/components/Testimoni";

export default {
  name: "Home",
  components: {
    "Tentang-Kami": TentangKami,
    Landing,
    Produk,
    Testimoni,
  },
  created(){
    this.$store.dispatch('fetchTestimoni')
  }
};
</script>
