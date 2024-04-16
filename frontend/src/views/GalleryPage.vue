<template>
  <div class="px-1 sm:px-2 py-1 sm:py-2">
    <div class="bg-sunny border-4 border-black">
      <div class="-mt-6 sm:-mt-4 md:-mt-0">
        <navGateLogin />
      </div>

      <div class="-mt-3 sm:mt-0 px-2 pb-4 sm:pb-10 ml-0 sm:-ml-4">
        <jpg />
      </div>

    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>
  
<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import jpg from '@/components/imgCollect.vue';

export default {
  components: {
    navGateLogin,
    fooTing,
    jpg
  },
}
</script>