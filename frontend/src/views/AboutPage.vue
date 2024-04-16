<template>
    <div class="px-1 sm:px-2 py-1 sm:py-2">
        <div class="bg-sunny border-t-4 border-l-4 border-r-4 border-black">
            <div class="-mt-6 sm:-mt-4 md:-mt-0">
                <navGateLogin />
            </div>
        </div>
        <div class="bg-sunny border-l-4 border-r-4 border-black -mt-6 sm:-mt-0 pt-2">
            <about />
        </div>
        <div class="bg-sunny h-auto border-l-4 border-r-4 border-t-4 border-b-4 border-black pt-10">
            <fooTing />
        </div>
    </div>
</template>
  
<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import about from '@/components/aboutX.vue';

export default {
    components: {
        navGateLogin,
        fooTing,
        about
    },
}
</script>