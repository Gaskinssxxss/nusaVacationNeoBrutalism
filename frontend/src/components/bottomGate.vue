<template>
    <div>
        <div class="flex justify-center tracking-wide text-base sm:text-lg md:text-2xl font-semibold font-Karantina">
            <div
                class="border-t-4 border-b-4 border-l-4 border-r-4 border-black px-[12px] sm:px-7 md:px-26 py-2 bg-maryjane text-black transition-transform duration-300 ease-in-out transform hover:scale-105">
                <h1 class="transition-transform duration-300 ease-in-out transform hover:scale-150">
                    HOME
                </h1>
            </div>
            <router-link to="/package">
                <div
                    class="border-t-4 border-b-4 border-black px-[12px] sm:px-6 md:px-26 py-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h1 class="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        PACKAGE
                    </h1>
                </div>
            </router-link>
            <router-link to="/imgCollections">
                <div
                    class="border-t-4 border-b-4 border-l-2 border-r-4 border-black px-[12px] sm:px-7 md:px-26 py-2 bg-maryjane text-black transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h1 class="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        GALLERY
                    </h1>
                </div>
            </router-link>
            <router-link to="/about">
                <div
                    class="border-t-4 border-b-4 border-r-2 border-black px-[12px] sm:px-7 md:px-26 py-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h1 class="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        ABOUT
                    </h1>
                </div>
            </router-link>
            <router-link to="/contact">
                <div
                    class="border-t-4 border-b-4 border-l-2 border-r-4 border-black px-[12px] sm:px-7 md:px-26 py-2 bg-maryjane text-black transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h1 class="transition-transform duration-300 ease-in-out transform hover:scale-150">
                        CONTACT
                    </h1>
                </div>
            </router-link>
        </div>
    </div>
</template>