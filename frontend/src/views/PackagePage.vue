<template>
  <div class="px-1 sm:px-2 py-1 sm:py-2">
    <div class="bg-sunny border-4 border-black">
      <div class="-mt-6 sm:-mt-4 md:-mt-0">
        <navGateLogin />
      </div>

      <div class="pb-10 px-2 sm:px-12 3xl:px-12 pt-6 sm:pt-12 3xl:pt-14">
        <packGrid :showArrows="false" :showHiddenPackages="true" :topBar="true" />
      </div>

    </div>

    <div>
      <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black">
        <fooTing />
      </div>
    </div>
  </div>
</template>

<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import packGrid from '@/components/packPack.vue';

export default {
  components: {
    navGateLogin,
    fooTing,
    packGrid,
  },
}
</script>