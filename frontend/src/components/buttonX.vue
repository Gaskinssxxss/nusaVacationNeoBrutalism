<template>
    <div class="pr-10">
        <book ref="bookForm" v-show="shw"></book>
    </div>
    <div>
        <div class="flex space-x-4 md:space-x-10">
            <div class="bg-black transition-transform duration-300 Sease-in-out transform hover:scale-110">
                <div>
                    <button @click="opens"
                        class=" px-2 sm:px-5 py-2 bg-maryjane relative -left-2 -top-2 border-2 border-black">
                        <h1 class="font-Karantina text-base sm:text-xl md:text-3xl font-bold uppercase">
                            Book a Package
                        </h1>
                    </button>
                </div>
            </div>
            <RouterLink to="/f&q">
                <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <button class=" px-2 sm:px-7 py-2 bg-ocean relative -left-2 -top-2 border-2 border-black">
                        <h1 class="font-Karantina text-base sm:text-xl md:text-3xl font-bold text-sunny">
                            FAQ & GUIDES
                        </h1>
                    </button>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import book from "./overBookPack.vue"
export default {
    components: {
        book
    },
    data() {
        return {
            shw: false
        }
    },
    methods: {
        opens() {
            this.shw = true;
            this.$refs.bookForm.typePay = true;
        }
    }
}
</script>
