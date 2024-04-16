<template>
    <div @click="handleActive" v-show="fols" class="flex justify-start space-x-2 pl-20">
        <div class="bg-maryjane w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
            <div
                class="transition-transform duration-300 ease-in-out transform hover:scale-100 w-64 h-24 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                <h1 class="font-Karantina text-4xl font-bold text-black text-stroke-3 text-center pt-6">
                    DEACTIVE
                </h1>
            </div>
        </div>
    </div>
    <div @click="handleDeactive" v-show="tru" class="flex justify-start space-x-2 pl-16">
        <div class="bg-maryjane w-full transition-transform duration-300 ease-in-out transform hover:scale-110">
            <div
                class="transition-transform duration-300 ease-in-out transform hover:scale-100 w-64 h-24 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                <h1 class="font-Karantina text-4xl font-bold text-maryjane text-center pt-6">
                    ACTIVE
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fols: true,
            tru: false
        }
    },
    methods: {
        active() {
            this.fols = false
            this.tru = true
        },
        deactive() {
            this.fols = true
            this.tru = false
        },
        handleActive() {
            this.$emit('active'); 
            this.fols = false
            this.tru = true
        },
        handleDeactive() {
            this.$emit('deactive');
            this.fols = true
            this.tru = false
        }
        
    }
}
</script>

<style>
.text-stroke-3 {
    -webkit-text-stroke: 2px #AAE73D;
}
</style>