<template>
    <div class="mx-4 sm:mx-14 lg:mx-10 xl:mx-16 2xl:mx-20">
        <nav
            class=" flex justify-between pr-16 3xl:pr-0 py-14 font-Karantina font-extrabold text-base md:text-xl xl:text-2xl">
            <router-link to="/">
                <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div class="border-2 border-black px-4 sm:px-6 py-2 bg-sunny relative -left-1 -top-1">
                        <h1>LOGOS</h1>
                    </div>
                </div>
            </router-link>

            <div class="flex -space-x-3 md:space-x-4 -mr-24 md:-mr-20 3xl:-mr-8">
                <router-link to="/services">
                    <div>
                        <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div
                                class="border-2 border-black px-2 sm:px-4 md:px-6 py-2 bg-sunny relative -left-1 -top-1">
                                <h1>OUR SERVICES</h1>
                            </div>
                        </div>
                    </div>
                </router-link>
                <div @click="toggleMenu" class="pr-2">
                    <div class="px-6">
                        <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div
                                class="border-2 border-black px-4 sm:px-6 md:px-12 py-2 bg-sunny relative -left-1 -top-1">
                                <h1>MENU</h1>
                            </div>
                        </div>
                        <div v-if="isMenuOpen" class="absolute z-50 w-[192px] text-2xl">
                            <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <router-link to="/">
                                    <div class="relative -top-1 -left-1 px-2 py-2 border-2 border-black bg-sunny text-center uppercase">Home</div>
                                </router-link>
                            </div>
                            <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <router-link to="/package">
                                    <div class="relative -top-1 -left-1 px-2 py-2 border-2 border-black bg-sunny text-center uppercase">Package</div>
                                </router-link>
                            </div>
                            <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <router-link to="/imgCollections">
                                    <div class="relative -top-1 -left-1 px-2 py-2 border-2 border-black bg-sunny text-center uppercase">Gallery</div>
                                </router-link>
                            </div>
                            <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <router-link to="/about">
                                    <div class="relative -top-1 -left-1 px-2 py-2 border-2 border-black bg-sunny text-center uppercase">About</div>
                                </router-link>
                            </div>
                            <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <router-link to="/contact">
                                    <div class="relative -top-1 -left-1 px-2 py-2 border-2 border-black bg-sunny text-center uppercase">Contact</div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavigationComp",
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>
