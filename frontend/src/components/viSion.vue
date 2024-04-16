<template>
    <div>
        <Vue3Marquee :clone="true">
            <div class="grid grid-cols-3 font-Karantina text-2xl md:text-3xl font-normal text-center">
                <div
                    class="border-l-4 border-r-2 border-b-4 border-black bg-ocean text-sunny px-32 py-1 md:py-[10px] 3xl:py-4">
                    <h1>5 YEARS OF EXPREINCE</h1>
                </div>
                <div
                    class="border-l-4 border-r-2 border-b-4 border-black bg-ocean text-sunny px-32 py-1 md:py-[10px] 3xl:py-4">
                    <h1>THOUSAND HAPPY CUSTOMER ++</h1>
                </div>
                <div
                    class="border-l-4 border-r-2 border-b-4 border-black bg-ocean text-sunny px-32 py-1 md:py-[10px] 3xl:py-4">
                    <h1>HUNDREDS OF SUCCESSFUL TRIPS ++</h1>
                </div>
            </div>
        </Vue3Marquee>
    </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
    components: {
        Vue3Marquee,
    },
}
</script>