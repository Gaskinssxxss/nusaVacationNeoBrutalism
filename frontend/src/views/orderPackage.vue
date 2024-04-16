<template>
  <div class="px-1 sm:px-2 py-1 sm:py-2">
    <div class="bg-sunny border-t-4 border-r-4 border-l-4 border-b-2 border-black">
      <div class="ml-6 3xl:-ml-0 px-6">
        <navGateLogin />
      </div>

      <div class="mt-5 pb-5 3xl:pb-20">
        <order />
      </div>

    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-t-2 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>

<script>
import order from '../components/orderNote.vue';
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';

export default {
  components: {
    order,
    navGateLogin,
    fooTing,
  }
}
</script>