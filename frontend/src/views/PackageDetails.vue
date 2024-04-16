<template>
  <div class="px-1 sm:px-2 py-1 sm:py-2">
    <div class="bg-sunny border-4 border-black">
      <div class="-mt-9 sm:-mt-4 md:-mt-0">
        <navGateLogin />
      </div>

      <div class="-mt-4 sm:-mt-2 3xl:-mt-1">
        <detailJpg />
      </div>

    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-t-2 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>

<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import detailJpg from '@/components/detailJpg.vue';

export default {
  components: {
    navGateLogin,
    fooTing,
    detailJpg
  },
}
</script>