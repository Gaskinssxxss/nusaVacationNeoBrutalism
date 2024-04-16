<template>
    <div>
        <div class="pl-4 md:pl-26 pr-1 md:pr-16 pb-20">
            <div class="bg-black">
                <div class="bg-ocean px-2 sm:px-5 mt-3 relative -left-3 -top-3 border-2 border-black">
                    <div class="py-[0.5px]">
                        <div class="flex justify-start space-x-1 sm:space-x-2 mt-3 sm:mt-4 pl-1 sm:pl-12">
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                        </div>
                        <div
                            class="pl-2 sm:pl-0 text-center text-sunny -mt-7 sm:-mt-10 font-Karantina text-2xl sm:text-4xl font-medium pb-4">
                            <h1>~imgCollections</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="bg-black">
                    <div class="bg-sunny px-2 sm:px-20 py-8 sm:py-14 relative -left-3 -top-3 border-2 border-black">
                        <div class="block md:flex justify-between space-x-1 sm:space-x-4">
                            <div class="flex pl-6 sm:pl-0">
                                <div class=" bg-black">
                                    <div class="bg-sunny border-2 border-black relative -top-3 -left-3 ">
                                        <img class="w-[900px] sm:w-[1500px] 3xl:w-[2000px] h-48 sm:h-110" :src="getImageSrc" alt="">
                                    </div>
                                </div>
                                <div class="flex items-center -ml-8 " @click="toggleImg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="bg-black px-2 sm:px-3 py-2 sm:py-3 rounded-full w-10 sm:w-16 3xl:w-14 3xl:h-14 h-10 sm:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-125 sm:hover:scale-110">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                            <div class="pl-4 sm:pl-4 mt-2 sm:-mt-4 pr-0 sm:pr-5 w-[1100px]">
                                <h1 class="font-Karantina text-4xl sm:text-6xl 3xl:text-5xl font-bold">{{
                                    currentData.name
                                }}</h1>
                                <p class="pt-4 text-sm xl:text-sm">{{ currentData.Details }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div @click="toggleData" class="-mt-7 sm:-mt-[395px] 3xl:-mt-[465px] mr-32 sm:-mr-6 3xl:-mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="bg-black px-2 sm:px-3 py-2 sm:py-3 rounded-full w-10 sm:w-16 3xl:w-14 3xl:h-14 h-10 sm:h-16 mx-auto stroke-[3px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-125 sm:hover:scale-110">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
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
            tambora: {
                name: 'Gunung Tambora',
                Details: 'Gunung Tambora (atau Tomboro) adalah gunung dengan stratovolcano aktif yang terletak di pulau Sumbawa, Indonesia. Gunung ini terletak di dua kabupaten, yaitu Kabupaten Dompu (sebagian kaki sisi selatan sampai barat laut), dan Kabupaten Bima (bagian lereng sisi selatan hingga barat laut, dan kaki hingga puncak sisi timur hingga utara), Provinsi Nusa Tenggara Barat Gunung Tambora memiliki ketinggian 2.850 Meter Di atas Permukaan Laut (MDPL). Sedikit bercerita tentang sejarah Gunung Tambora. Tambora terbentuk oleh zona subduksi di bawahnya. Hal ini meningkatkan ketinggian Tambora hingga mencapai 4.300 MDPL yang membuat gunung ini pernah menjadi salah satu puncak tertinggi di Indonesia dan mengeringkan dapur magma besar di dalam gunung ini. Perlu waktu kurang lebih satu abad untuk mengisi kembali dapur magma tersebut.',
                img: ['bima10.webp', 'bima11.webp', 'bima12.webp', 'bima14.webp', 'bima15.jpg'],
                currentImgIndex: 0
            },
            whaleShark: {
                name: 'Whale Shark',
                Details: 'Wisata Bahari Whale shark teluk saleh disebuh juga aquarium alam karena salah satu menjadi tempat tinggal hiu paus (Rhincodon  typus) karena anda bisa menyaksikan whale shark dan Destinasi ini menawarkan sekilas kehidupan laut yang menakjubkan ',
                img: ['sea1.webp', 'sea2.webp', 'sea3.webp', 'sea4.jpg', 'sea5.jpg', 'sea6.webp', 'sea7.webp'],
                currentImgIndex: 0
            },
            sumba: {
                name: 'Sumba',
                Details: 'Pulau Sumba adalah salah satu gugusan pulau di Provinsi Nusa Tenggara Timur, berada pada busur luar kepulauan Nusa Tenggara, antara Pulau Sumbawa dan Pulau Timor. Meskipun termasuk daerah yang kering, Sumba memiliki budaya yang kaya (Festival Pasola), gaya hidup tradisional (Kampung Adat Tarung), alam yang masih murni, pemandangan dan pantai yang masih indah, misalnya pantai Nihiwatu, dan lain-lain. Untuk wisata kuliner, di sini akan susah mendapatkan jajanan yang enak, akan tetapi dapat ditemui warung atau rumah makan uang menjual makanan khas Nusa Tenggara Timur dengan tipikal menu sederhana seperti tumis bunga pepaya, ikan asin, atau ikan bakar. Cara khas lainnya adalah membeli ikan segar dan membakarnya sendiri di tepi pantai.',
                img: ['sumba2.jpg', 'sumba3.jpg', 'sumba4.jpg', 'sumba5.webp', 'sumba6.jpg'],
                currentImgIndex: 0
            },
            currentData: {}
        }
    },
    methods: {
        toggleData() {
            if (this.currentData === this.tambora) {
                this.currentData = this.whaleShark;
            } else if (this.currentData === this.whaleShark) {
                this.currentData = this.sumba;
            } else {
                this.currentData = this.tambora;
            }
        },
        toggleImg() {
            this.currentData.currentImgIndex = (this.currentData.currentImgIndex + 1) % this.currentData.img.length;
        },
    },
    computed: {
        getImageSrc() {
            return require(`../../../public/img/${this.currentData.img[this.currentData.currentImgIndex]}`);
        }
    },
    created() {
        this.currentData = this.tambora;
    }
}
</script>
