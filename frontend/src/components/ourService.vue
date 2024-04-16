<template>
    <div>
        <div class="pl-7 md:pl-26 pr-1 md:pr-16 pb-20">
            <div class="bg-black">
                <div class="bg-ocean mt-3 relative -left-3 -top-3 border-2 border-black">
                    <div class="py-[0.5px]">
                        <div class="flex justify-start space-x-1 sm:space-x-2 mt-3 sm:mt-4 pl-1 sm:pl-12">
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                        </div>
                        <div class="text-center text-sunny -mt-10 font-Karantina text-4xl font-medium pb-4">
                            <h1>~ourServices</h1>
                        </div>

                        <div>
                            <div class="bg-sunny border-t-2 border-black h-[600px]" style="overflow-y: auto;">
                                <div
                                    class="-ml-1 sm: inline-block sm:flex justify-around items-center pb-10 pt-8 sm:pt-16 px-8 sm:px-10 font-Karantina text-4xl sm:text-5xl tracking-wide font-bold">
                                    <div>
                                        <div class="bg-black">
                                            <div class="relative -top-2 -left-2 bg-ocean border-2 border-black py-4">

                                            </div>
                                        </div>
                                        <div class="bg-black">
                                            <div
                                                class="relative -top-2 -left-2 bg-sunny text-black border-2 border-black w-[280px] sm:w-95 h-44 sm:h-64 text-center items-center">
                                                <h1 class="pt-6 sm:pt-14">Tour & Travels</h1>
                                                <div class="flex justify-center pt-6 sm:pt-14">
                                                    <div
                                                        class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                                        <div @click="tnt"
                                                            class="relative -top-2 -left-2 bg-maryjane text-black border-2 border-black w-24 h-12 text-center items-center text-2xl pt-1">
                                                            Details
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pt-10 sm:pt-0 pb-0 sm:pb-0">
                                        <div class="bg-black">
                                            <div class="relative -top-2 -left-2 bg-ocean border-2 border-black py-4 ">
                                                <div class="flex justify-start space-x-2 pl-4">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-black">
                                            <div
                                                class="relative -top-2 -left-2 bg-sunny text-black border-2 border-black w-[280px] sm:w-95 h-44 sm:h-64 text-center items-center">
                                                <h1 class="pt-6 sm:pt-14">Ticketing</h1>
                                                <div class="flex justify-center pt-6 sm:pt-14">
                                                    <div @click="ticked"
                                                        class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                                        <div
                                                            class="relative -top-2 -left-2 bg-maryjane text-black border-2 border-black w-24 h-12 text-center items-center text-2xl pt-1">
                                                            Details
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
            </div>

            <div v-show="tour" class="relative -top-[560px] sm:-top-[560px] -mb-40">
                <div class="flex justify-center">
                    <div class="flex pb-16 w-[310px] sm:w-105 h-40 pt-10 3xl:pt-4">
                        <div>
                            <div>
                                <div
                                    class="bg-ocean text-sunny border-t-4 border-r-4 border-l-4 h-12 relative -left-2 -top-2 border-black pt-2">
                                    <div class="">
                                        <h1 class="font-Karantina text-2xl tracking-wider font-bold text-center">
                                            INFO?
                                        </h1>
                                    </div>
                                    <div @click="close" class="flex justify-end pr-4 -mt-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="px-2 sm:px-10 3xl:px-12 py-10 3xl:py-8 bg-sunny relative -left-2 -top-2 border-4 text-center border-black text-xl sm:text-2xl">
                                        <h1 class="font-Karantina font-bold pb-2">
                                            Nusa Vacations from its basic roots is a tour and travel agency. provides many tour packages in the Bima, Sumbawa, and Sumba areas. To see the packages you can click the button!
                                        </h1>
                                        <div class="flex justify-center pt-6 3xl:pt-10">
                                            <div
                                                class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                                <div class="">
                                                    <button @click="packages"
                                                        class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-[38px] 3xl:px-20 py-1 bg-maryjane relative -left-1 -top-1 border-2 border-black">
                                                        <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold">
                                                            See Packages!
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

            <div v-show="tick" class="relative -top-[560px] sm:-top-[560px] -mb-40">
                <div class="flex justify-center">
                    <div class="flex pb-16 w-[310px] sm:w-105 h-40 pt-10 3xl:pt-4">
                        <div>
                            <div>
                                <div
                                    class="bg-ocean text-sunny border-t-4 border-r-4 border-l-4 h-12 relative -left-2 -top-2 border-black pt-2">
                                    <div class="">
                                        <h1 class="font-Karantina text-2xl tracking-wider font-bold text-center">
                                            INFO?
                                        </h1>
                                    </div>
                                    <div @click="closed" class="flex justify-end pr-4 -mt-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="px-2 sm:px-10 3xl:px-12 py-10 3xl:py-8 bg-sunny relative -left-2 -top-2 border-4 text-center border-black text-xl sm:text-2xl">
                                        <h1 class="font-Karantina font-bold pb-2">
                                            Besides being a tour and travel agent, Nusa Vacation also provides a platform for clients to book bus tickets online. 
There are many bus agents who work with us to become a platform for bus agents to sell their bus tickets online. to see the platform you can click this button!
                                        </h1>
                                        <div class="flex justify-center pt-6 3xl:pt-10">
                                            <div
                                                class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                                <div class="">
                                                    <button
                                                        class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-[38px] 3xl:px-20 py-1 bg-maryjane relative -left-1 -top-1 border-2 border-black">
                                                        <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold">
                                                            Book Tickets!
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            tour: false,
            tick: false,
        }
    },
    methods: {
        tnt() {
            this.tour = true;
        },
        close() {
            this.tour = false;
        },
        ticked() {
            this.tick = true;
        },
        closed() {
            this.tick = false;
        },
        packages() {
            this.$router.push('/package')
        }
    }
}
</script>