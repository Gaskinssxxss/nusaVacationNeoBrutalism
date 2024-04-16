<template>
    <div class="pt-10" v-show="shows">
        <div>
            <div class="flex justify-center pb-16 -ml-10 3xl:-ml-0 pl-14">
                <div class="bg-black">
                    <div>
                        <div>
                            <div
                                class="bg-ocean text-sunny border-t-4 border-r-4 border-l-4 h-12 relative -left-2 -top-2 border-black pt-2">
                                <div class="">
                                    <h1 class="font-Karantina text-2xl tracking-wider font-bold text-center">TIME REMAINING
                                        ORDER</h1>
                                </div>
                                <div class="flex justify-end pr-4 -mt-7">
                                    <svg @click="opens" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="px-10 3xl:px-52 py-10 3xl:py-20 bg-sunny relative -left-2 -top-2 border-4 text-center border-black text-2xl">
                                <h1 class="font-Karantina font-bold pb-2">
                                    PLEASE COMPLETE THE ORDER BEFORE REMAINING TIME
                                </h1>
                                <h1 class="font-Karantina font-bold pb-2">
                                    IS UP. FOR EVERY INFORMATION ABOUT THE PAYMENT.
                                </h1>
                                <h1 class="font-Karantina font-bold pb-5">
                                    PLEASE CHECK AT THE PAGE.
                                </h1>
                                <div>
                                    <div class="flex justify-end font-Karantina font-bold">
                                        {{ limitedProgressBarPercentage }}%
                                    </div>
                                    <div class="border-4 border-black">
                                        <div class="bg-sun" :style="{ width: limitedProgressBarPercentage + '%' }">&nbsp;
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

    <order v-show="hide" class="-mt-10" />
</template>

<script>
import order from "../components/orderBar.vue"

export default {
    components: {
        order
    },
    data() {
        return {
            totalTime: 3600 * 1000,
            elapsedTime: 0,
            shows: true,
            hide: false
        };
    },
    computed: {
        progressBarPercentage() {
            return Math.round((this.elapsedTime / this.totalTime) * 100);
        },
        limitedProgressBarPercentage() {
            return Math.min(this.progressBarPercentage, 100);
        }
    },

    mounted() {
        this.startTimer();
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.elapsedTime += 1000;
                if (this.elapsedTime >= this.totalTime) {
                    clearInterval(this.timer);
                }
            }, 1000);
        },
        opens() {
            this.shows = false;
            this.hide = true;
        }
    }
};
</script>