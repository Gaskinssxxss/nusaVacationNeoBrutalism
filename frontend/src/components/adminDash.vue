<template>
    <div class="-mt-10">
        <router-link to="/">
            <div class="bg-black border-2 border-maryjane w-10 h-10 rounded-full hover:bg-maryjane ">
                
            </div>
        </router-link>
    </div>
    <div class="px-20">
        <div class="flex justify-center -mr-6">
            <div class="space-y-16 text-3xl">
                <router-link to="/adminTask">
                    <div class="flex">
                        <div
                            class="bg-maryjane hover:bg-black hover:border-maryjane hover:border-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div
                                class="transition-transform duration-300 ease-in-out transform hover:scale-100  w-48 h-24 bg-black text-maryjane hover:bg-maryjane hover:text-black relative -left-2 -top-2 border-2 border-maryjane">
                                <h1 class="font-Karantina font-bold text-center pt-4">
                                    TASK
                                </h1>
                            </div>
                        </div>
                    </div>
                </router-link>

                <div class="flex">
                    <div
                        class="bg-maryjane hover:bg-black hover:border-maryjane hover:border-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <div
                            class=" text-maryjane hover:bg-maryjane hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-100 w-48 h-24 bg-black relative -left-2 -top-2 border-2 border-maryjane">
                            <h1 class="font-Karantina font-bold text-center pt-4">
                                FILE MANAGER
                            </h1>
                        </div>
                    </div>
                </div>

                <router-link to="/adminLogs">
                    <div class="flex pt-10">
                        <div
                            class="bg-maryjane hover:bg-black hover:border-maryjane hover:border-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div
                                class=" text-maryjane hover:bg-maryjane hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-100 w-48 h-24 bg-black relative -left-2 -top-2 border-2 border-maryjane">
                                <h1 class="font-Karantina font-bold text-center pt-4">
                                    LOGS
                                </h1>
                            </div>
                        </div>
                    </div>
                </router-link>

                <div class="flex">
                    <div
                        class="hover:bg-black hover:border-maryjane hover:border-2 bg-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <div
                            class="text-maryjane hover:bg-maryjane hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-100  w-48 h-24 bg-black relative -left-2 -top-2 border-2 border-maryjane">
                            <h1 class="font-Karantina font-bold text-center pt-4">
                                PLAYGROUND
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="flex space-x-20 text-3xl pl-28">
                    <div>
                        <router-link to="/adminTransaction">
                            <div class="flex">
                                <div
                                    class="hover:bg-black hover:border-maryjane hover:border-2 bg-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                                    <div
                                        class="text-maryjane hover:bg-maryjane hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-100 w-92 h-32 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina font-bold text-center pt-10">
                                            TRANSACTION
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div>
                        <div class="flex">
                            <div @click="midtrans"
                                class="hover:bg-black hover:border-maryjane hover:border-2 bg-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <div
                                    class="text-maryjane hover:bg-maryjane hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-100 w-92 h-32 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                                    <h1 class="font-Karantina font-bold text-center pt-10">
                                        USER-ACTIVITY
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-16 pl-28">
                    <div class="flex">
                        <div
                            class="hover:bg-black hover:border-maryjane hover:border-2 bg-maryjane transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div
                                class="text-maryjane hover:bg-maryjane hover:text-black transition-transform duration-300 ease-in-out transform hover:scale-100 w-110 h-96 bg-black relative -left-3 -top-3 border-2 border-maryjane">
                                <h1 class="font-Karantina font-bold text-4xl text-center pt-44">
                                    VALUEABLE CHART
                                </h1>
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
    methods: {
        midtrans() {
            window.open('https://dashboard.sandbox.midtrans.com/beta/transactions', '_blank');
        }
    },
}
</script>