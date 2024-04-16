<template>
  <div class="px-1 sm:px-2 py-1 sm:py-2">
    <div class="bg-ocean border-4 border-black">
      <div>
        <navGate />
      </div>

      <div class="pt-10">
        <history />
      </div>

    </div>
    <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black">
      <fooTing />
    </div>
  </div>
</template>
  
<script>
import navGate from '@/components/navigationPage.vue';
import fooTing from '@/components/fooTing.vue';
import history from '@/components/orderHistory.vue';

export default {
  components: {
    navGate,
    fooTing,
    history
  },
}
</script>