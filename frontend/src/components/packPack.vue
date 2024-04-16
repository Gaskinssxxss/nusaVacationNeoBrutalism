<template>
    <div v-show="topBar" class="bg-sunny -mt-10 sm:-mt-20">
        <div class="flex justify-start pl-4 sm:pl-9 text-sunny">
            <div>
                <div class="flex mt-2">
                    <div class="bg-black">
                        <div
                            class="flex space-x-6 sm:space-x-24 pl-2 sm:pl-4 py-1 sm:py-3 bg-ocean relative -left-2 -top-2 border-2 border-black">
                            <div>
                                <h1 class="font-Karantina text-lg sm:text-2xl font-bold">
                                    CATEGORIES
                                </h1>
                            </div>
                            <div v-show="down" @click="show" class="pr-2 sm:pr-10 mt-1 md:mt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-5 md:w-8 h-5 md:h-8 mx-auto stroke-2 stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div v-show="up" @click="showi" class="pr-2 sm:pr-10 mt-1 md:mt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor"
                                    class="w-5 md:w-8 h-5 md:h-8 mx-auto stroke-2 stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="shot">
                    <div @click="ally" class="bg-black">
                        <div
                            class="flex space-x-28 pl-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div>
                                <h1
                                    class="font-Karantina text-lg sm:text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110">
                                    All Packages
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div @click="tambora" class="bg-black">
                        <div
                            class="flex space-x-28 pl-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div>
                                <h1
                                    class="font-Karantina text-lg sm:text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110">
                                    Tambora
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div @click="whale" class="bg-black">
                        <div
                            class="flex space-x-28 pl-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div>
                                <h1
                                    class="font-Karantina text-lg sm:text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110">
                                    Whale Shark
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div @click="sumba" class="bg-black">
                        <div
                            class="flex space-x-28 pl-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div>
                                <h1
                                    class="font-Karantina text-lg sm:text-2xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110">
                                    Sumba
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="px-2 md:px-10 pl-4 md:pl-10 pt-6 sm:pt-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 md:gap-10 xl:gap-16">
            <div v-for="packagex in filteredPackageList" :key="packagex.idx" class="w-auto bg-black">
                <div class="bg-maryjane relative -left-2 md:-left-3 -top-2 md:-top-3">
                    <div class="bg-maryjane px-2 md:px-5 py-2 md:py-3 border-2 border-black">
                        <div class="flex justify-start space-x-2">
                            <div class="bg-sunny rounded-full px-2 md:px-3 py-2 md:py-3 border-2 border-black"></div>
                            <div class="bg-sunny rounded-full px-2 md:px-3 py-2 md:py-3 border-2 border-black"></div>
                        </div>
                    </div>
                    <div class="bg-maryjane border-2 border-black">
                        <div class="px-2 md:px-4 3xl:px-8 py-3 md:py-5">
                            <div class="bg-sunny border-2 border-black">
                                <img :src="getFullImagePath(packagex.MainImg)" alt="">
                            </div>
                        </div>
                        <div @click="details(packagex.idx)"
                            class="flex justify-end py-2 3xl:py-5 pr-2 md:pr-7 3xl:pr-10 -mt-8 md:-mt-10 3xl:-mt-16 pb-4">
                            <div
                                class=" flex bg-black transition-transform duration-300 ease-in-out transform hover:scale-110 text-3xl font-bold">
                                <button
                                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-2 md:px-7 py-1 md:py-2 3xl:py-2 bg-red-700 relative -left-[6px] md:-left-1 -top-[6px] md:-top-1 border-2 border-black">
                                    <h1 class="font-Karantina text-lg md:text-xl 3xl:text-2xl text-sunny">
                                        DETAILS
                                    </h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showArrows">
        <div @click="upper" v-show="shw" class="pt-10 md:pt-5 3xl:pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="bg-black px-3 py-3 rounded-full w-10 md:w-16 3xl:h-14 3xl:w-14 h-10 md:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-125 sm:hover:scale-110">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
            </svg>
        </div>
        <div @click="downer" v-show="shww" class="pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="bg-black px-3 py-3 rounded-full w-10 md:w-16 3xl:h-14 3xl:w-14 h-10 md:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-125 sm:hover:scale-110">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";
export default {
    props: {
        showArrows: {
            type: Boolean,
            default: true
        },
        showHiddenPackages: {
            type: Boolean,
            default: false
        },
        topBar : {
            type : Boolean,
            default: false
        }
    },
    data() {
        return {
        originalPackageList: [], 
        packageList: [],
        showPackageFourFive: false,
        shw: true,
        shww: false,
        shot: false,
        down: true,
        up: false,
    }
    },
    mounted() {
        this.packageData();
    },
    methods: {
        async ally() {
        this.showPackageFourFive = true;
        this.packageList = this.originalPackageList;
    },
        async tambora() {
        this.showPackageFourFive = false;
        this.packageList = this.originalPackageList.filter(packagex => 
            packagex.name === 'Tambora Via Pancasila' || packagex.name === 'Tambora Via Doro Ncanga');
    },
    async whale() {
        this.showPackageFourFive = false;
        this.packageList = this.originalPackageList.filter(packagex => 
            packagex.name === 'Whale Shark Diving Trip' || packagex.name === 'Whale Shark Snorkeling Trip');
    },
    async sumba() {
        this.showPackageFourFive = false;
        this.packageList = this.originalPackageList.filter(packagex => packagex.name === 'Sumba');
    },
        show() {
            this.shot = true
            this.down = false
            this.up = true
        },
        showi() {
            this.shot = false
            this.down = true
            this.up = false
        },
        async packageData() {
        try {
            const response = await Api.get('packages');
            this.originalPackageList = response.data.data.map(packages => ({ ...packages }));
            this.packageList = this.originalPackageList; 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
        getFullImagePath(MainImg) {
            return `http://172.20.10.9:5000${MainImg}`;
        },
        upper() {
            this.showPackageFourFive = !this.showPackageFourFive;
            this.shw = false;
            this.shww = true;
        },
        downer() {
            this.showPackageFourFive = !this.showPackageFourFive;
            this.shw = true;
            this.shww = false;
        },
        async details(idx) {
            console.log("idx:", idx);
            await this.$router.push({ name: 'detail', params: { idx } });
        }
    },
    computed: {
        filteredPackageList() {
            if (this.showPackageFourFive) {
                return this.packageList;
            } else if (this.showHiddenPackages) {
                return this.packageList;
            } else {
                return this.packageList.filter(packagex => packagex.idx !== 4 && packagex.idx !== 5);
            }
        }
    }
}

</script>
