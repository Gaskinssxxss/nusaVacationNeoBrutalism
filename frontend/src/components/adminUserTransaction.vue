<template>
    <div>
        <div class="flex justify-end pb-4">
            <div class="w-40 h-20">
                <div class="bg-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <RouterLink to="/admin">
                        <div
                            class="relative -top-2 -left-2 bg-black border-2 border-maryjane font-Karantina text-3xl text-maryjane">
                            <h1 class="py-2 text-center">
                                Dashboard
                            </h1>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class=" bg-maryjane ">
            <div class="py-3 bg-black text-maryjane relative -left-4 -top-4 border-2 border-maryjane tracking-wider">
                <div class=" mt-3 relative -left-4 -top-4 pt-1">
                    <div class="flex justify-start space-x-2 mt-2 pl-10">
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                    </div>
                    <div class="text-center -mt-10 font-Karantina text-3xl font-medium pb-4 text-maryjane">
                        <h1>~Transaction</h1>
                    </div>
                </div>
                <div class="border-t-2 border-maryjane pt-10 pb-5 px-10">
                    <div>
                        <div class="flex justify-between space-x-4 font-Karantina font-bold text-2xl text-center">
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center w-20 h-14">
                                    <div>
                                        <h1 class="pt-2">NO</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center w-60 h-14">
                                    <div>
                                        <h1 class="pt-2">USERNAME</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="  text-center">
                                <div class="border-2 border-maryjane text-center w-92 h-14">
                                    <div>
                                        <h1 class="pt-2">PACKAGE NAME</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center w-20 h-14">
                                    <div>
                                        <h1 class="pt-2">PAX</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="  text-center">
                                <div class="border-2 border-maryjane text-center w-40 h-14">
                                    <div>
                                        <h1 class="pt-2">TOTAL COST</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="  text-center">
                                <div class="border-2 border-maryjane text-center w-40 h-14">
                                    <div>
                                        <h1 class="pt-2">STATUS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-6">
                        <div class="flex justify-between space-x-4 font-Karantina font-bold text-xl text-center">
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center w-20 h-14">
                                    <div>
                                        <h1 class="pt-2">1</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="  text-center">
                                <div class="border-2 border-maryjane text-center w-60 h-14">
                                    <div>
                                        <h1 class="pt-2">El-Hasbi</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="  text-center">
                                <div class="border-2 border-maryjane text-center w-92 h-14">
                                    <div>
                                        <h1 class="pt-2">Tambora Via Pancasila</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center w-20 h-14">
                                    <div>
                                        <h1 class="pt-2"><span class="text-2xl">4</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div class="  text-center">
                                <div class="border-2 border-maryjane text-center w-40 h-14">
                                    <div>
                                        <h1 class="pt-2"><span class="text-2xl">Rp.1.000k</span></h1>
                                    </div>
                                </div>
                            </div>
                            <div class="  text-center">
                                <div class="border-2 border-maryjane text-center w-40 h-14">
                                    <div class=" pt-2 pl-2 flex justify-center space-x-4">
                                        <div class="bg-black w-8 h-8 rounded-full border-2 border-maryjane">

                                        </div>
                                        <div>
                                            <h1 class="font-Karantina text-2xl text-maryjane">Pending</h1>
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

    <div v-show="open" class="relative -top-72">
        <note />
    </div>
</template>

<script>
import note from "../components/transactionNote.vue"

export default {
    components: {
        note
    },
    data() {
        return {
            open: false,
            no: 1,
            username: "admin",
            pack: "tambora",
            pax: 1,
            totalCost: 666.666,
            status: "pending"
        }
    },
    methods: {
        note() {
            this.open = true
        }
    }
}
</script>