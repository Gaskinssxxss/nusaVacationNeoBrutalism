<template>
    <div v-if="packageDetail" class="pt-10">
        <div>
            <div class="flex justify-center pb-16 -ml-10 3xl:-ml-0 pl-14">
                <div class="bg-black">
                    <div>
                        <div>
                            <div
                                class="bg-ocean text-sunny border-t-4 border-r-4 border-l-4 h-12 relative -left-2 -top-2 border-black pt-2">
                                <div class="">
                                    <h1 class="font-Karantina text-2xl tracking-wider font-bold text-center">VALIDATE?</h1>
                                </div>
                                <div class="flex justify-end pr-4 -mt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div
                                    class="px-10 3xl:px-52 py-10 3xl:py-20 bg-sunny relative -left-2 -top-2 border-4 text-center border-black text-2xl">
                                    <h1 class="font-Karantina font-bold pb-2">
                                        ARE U SURE FOR ORDER THIS PACKAGE?
                                    </h1>
                                    <h1 class="font-Karantina font-bold pb-2">
                                        IF YES, PLEASE CLICK NEXT FOR PAYMENT METHODS!
                                    </h1>
                                    <h1 class="font-Karantina font-bold pb-5">
                                        OR CLICK THE PREV FOR SEE DEATILS PACKAGE!
                                    </h1>
                                    <div class="flex justify-center space-x-20">
                                        <div
                                            class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                            <div class="">
                                                <button @click="prev"
                                                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-[38px] 3xl:px-20 py-1 bg-maryjane relative -left-1 -top-1 border-2 border-black">
                                                    <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold">
                                                        PREV
                                                    </h1>
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                            <div class="">
                                                <button @click="details(packageDetail.idx)"
                                                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-[38px] 3xl:px-20 py-1 bg-maryjane relative -left-1 -top-1 border-2 border-black">
                                                    <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold">
                                                        NEXT
                                                    </h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";
export default {
    data() {
        return {
            packageDetail: null,
        }
    },
    mounted() {
        this.packageData();
    },
    methods: {
        async packageData() {
            try {
                const idx = this.$route.params.idx;
                const response = await Api.get(`packages/${idx}`);
                this.packageDetail = response.data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async details(idx) {
            console.log("idx:", idx);
            await this.$router.push({ name: 'Order', params: { idx } });
        },
        prev() {
            this.$router.go(-0.5);
        },
    },
}
</script>