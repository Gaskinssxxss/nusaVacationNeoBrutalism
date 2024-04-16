<template>
    <div class="font-Karantina text-black text-3xl md:text-5xl font-bold pl-6 md:pl-10 pt-4 md:pt-10">
        <h1>SATISFIED CUSTOMER</h1>
    </div>
    <div class="hidden xl:block">
        <div class="flex items-center pl-6 3xl:pl-8">
            <div v-show="opens" id="1" class="grid grid-cols-4 w-auto pb-10">
                <div>
                    <div class="flex py-10 px-5 3xl:px-4">
                        <div class="bg-black">
                            <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    Mr. Riandy
                                </h1>
                                <rate :length="5" :value="4" class="viaSlot" id="icon" />
                                <div class="font-Karantina text-black text-xl 3xl:text-xl font-bold pl-5 3xl:pl-4">
                                    <h1>Beatiful experience, Thank u Nusa.</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex py-10 px-5 3xl:px-4">
                        <div class="bg-black">
                            <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    Mr. joe
                                </h1>
                                <rate :length="5" :value="5" class="viaSlot" id="icon" />
                                <div class="font-Karantina text-black text-xl 3xl:text-xl font-bold pl-5 3xl:pl-4">
                                    <h1>Gokil, keren banget capek tapi asik.</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex py-10 px-5 3xl:px-4">
                        <div class="bg-black">
                            <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    Mrs. Putri
                                </h1>
                                <rate :length="5" :value="5" class="viaSlot" id="icon" />
                                <div class="font-Karantina text-black text-xl 3xl:text-xl font-bold pl-5 3xl:pl-4">
                                    <h1>treatment nya ok banget, keren deh.</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex py-10 px-5 3xl:px-4">
                        <div class="bg-black">
                            <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    Mr. Fuad
                                </h1>
                                <rate :length="5" :value="4" class="viaSlot" id="icon" />
                                <div class="font-Karantina text-black text-xl 3xl:text-xl font-bold pl-5 3xl:pl-4">
                                    <h1>Tambora mantap keren, full exprience.</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div v-show="openMinded" id="2" class="grid grid-cols-4 w-auto pb-10">
                <div>
                    <div class="flex py-10 px-5 3xl:px-4">
                        <div class="bg-black">
                            <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    Mrs. yuki
                                </h1>
                                <rate :length="5" :value="5" class="viaSlot" id="icon" />
                                <div class="font-Karantina text-black text-xl 3xl:text-xl font-bold pl-5 3xl:pl-4">
                                    <h1>Hiu paus nya kyutii bangetttt.</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex py-10 px-5 3xl:px-4">
                        <div class="bg-black">
                            <button class="px-2 py-10 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    Mrs. zen
                                </h1>
                                <rate :length="5" :value="5" class="viaSlot" id="icon" />
                                <div class="font-Karantina text-black text-xl 3xl:text-xl font-bold pl-5 3xl:pl-4">
                                    <h1>sumba sekeren itu ternyata.</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="-mt-8">
                <div v-show="ops" @click="openWar" class="pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="bg-black px-3 py-3 rounded-full w-16 3xl:h-14 3xl:w-14 h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

                <div v-show="cls" @click="closedWar" class="pr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor"
                        class="bg-black px-3 py-3 rounded-full w-16 3xl:h-14 3xl:w-14 h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    </div>


    <div class="flex md:hidden">
        <div v-show="openss" class="flex space-x-4 py-10 px-5 3xl:px-4 pl-6 sm:pl-7 md:pl-0">
            <div class="bg-black w-[140px]">
                <button class="w-[140px] px-2 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                    <h1 class="font-Karantina text-xl md:text-3xl font-bold">
                        MR. SATAN
                    </h1>
                    <rate :length="5" :value="5" class="viaSlot" id="icon" />
                </button>
            </div>
            <div class="bg-black w-[140px]">
                <button class="w-[140px] px-2 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                    <h1 class="font-Karantina text-xl md:text-3xl font-bold">
                        MR. SATAN
                    </h1>
                    <rate :length="5" :value="4" class="viaSlot" id="icon" />
                </button>
            </div>
        </div>

        <div v-show="opensss" class="flex space-x-4 py-10 px-5 3xl:px-4 pl-7 md:pl-0">
            <div class="bg-black w-[140px]">
                <button class="w-[140px] px-2 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                    <h1 class="font-Karantina text-xl md:text-3xl font-bold">
                        MR. SATAN
                    </h1>
                    <rate :length="5" :value="5" class="viaSlot" id="icon" />
                </button>
            </div>
            <div class="bg-black w-[140px]">
                <button class="w-[140px] px-2 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                    <h1 class="font-Karantina text-xl md:text-3xl font-bold">
                        MR. SATAN
                    </h1>
                    <rate :length="5" :value="5" class="viaSlot" id="icon" />
                </button>
            </div>
        </div>

        <div class="mt-24 -ml-10">
            <div v-show="opsy" @click="openWars" class="pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="bg-black px-3 py-3 rounded-full w-10 md:w-16 3xl:h-14 3xl:w-14 h-10 md:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </div>

            <div v-show="clsy" @click="closedWars" class="pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="bg-black px-3 py-3 rounded-full w-10 md:w-16 3xl:h-14 3xl:w-14 h-10 md:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openMinded: false,
            opens: true,
            ops: true,
            cls: false,
            opensss: false,
            openss: true,
            opsy: true,
            clsy: false
        }
    },
    methods: {
        openWar() {
            this.openMinded = !this.openMinded
            this.opens = false
            this.ops = false
            this.cls = true
        },
        closedWar() {
            this.openMinded = !this.openMinded
            this.opens = true
            this.ops = true
            this.cls = false
        },
        openWars() {
            this.opensss = !this.opensss
            this.openss = false
            this.opsy = false
            this.clsy = true
        },
        closedWars() {
            this.opensss = !this.opensss
            this.openss = true
            this.opsy = true
            this.clsy = false
        }
    }
}
</script>

<style>
.RateCustom.viaSlot #icon {
    width: 1000px;
    height: 1000px;
}

.Rate.viaSlot .Rate__star.filled {
    color: #813d1a;
}

.Rate.viaSlot .Rate__star.hover {
    color: #E67136;
}
</style>