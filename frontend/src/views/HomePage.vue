<template>
  <div class="px-1 sm:px-2 py-1 sm:py-2">
    <div class="bg-sunny border-t-4 border-l-4 border-r-4 border-black">
      <div class="-mt-9 sm:-mt-4 md:-mt-0">
        <navGateLogin />
      </div>
      <div class="bg-sunny pt-20 sm:pt-[20px] md:pt-[110px] pb-44">
        <secBar />
      </div>
    </div>
    <div class="mt-0 sm:-mt-16 md:-mt-16 3xl:-mt-10 border-l-4 border-black border-r-4 bg-sunny">
      <bottomGate></bottomGate>
    </div>
    <div
      class="bg-sunny pt-4 sm:pt-10 md:pt-8 px-2 sm:px-4 md:px-10 pb-16 border-l-4 border-r-4 border-black pl-3 sm:pl-0">
      <packPack />
    </div>
    <div class="-mt-6 md:mt-0 bg-sunny border-r-4 border-l-4 border-black">
      <viSion class="mx-2 sm:mx-5 border-t-4 border-black border-l-4 border-r-4" />
    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black pt-5">
      <reView />
    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-t-2 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>
  
<script>
import navGateLogin from "@/components/navigationPage.vue";
import secBar from "../components/secBar.vue";
import bottomGate from '../components/bottomGate.vue';
import packPack from "../components/packPack.vue";
import viSion from "@/components/viSion.vue";
import reView from "@/components/reView.vue";
import fooTing from "@/components/fooTing.vue";

export default {
  components: {
    navGateLogin,
    secBar,
    bottomGate,
    packPack,
    viSion,
    reView,
    fooTing
  }
}
</script>