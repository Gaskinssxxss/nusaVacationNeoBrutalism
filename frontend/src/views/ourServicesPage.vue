<template>
    <div class="px-1 sm:px-2 py-1 sm:py-2">
        <div class="bg-sunny border-4 border-black">
            <div class="-mt-9 sm:-mt-4 md:-mt-0">
                <navGateLogin />
            </div>

            <div class="pt-2">
                <service />
            </div>

        </div>
        <div class="bg-sunny h-auto border-l-4 border-r-4 border-b-4 border-black pt-10">
            <fooTing />
        </div>
    </div>
</template>
    
<script>
import navGateLogin from "@/components/navigationPage.vue";
import fooTing from '@/components/fooTing.vue';
import service from '@/components/ourService.vue';

export default {
    components: {
        navGateLogin,
        fooTing,
        service
    },
}
</script>