<template>
    <div class="flex justify-center">
        <div class="bg-maryjane w-110">
            <div v-show="to" class="bg-black border-4 border-maryjane relative -top-3 -left-3 py-10 text-maryjane">
                <div class="bg-black border-b-4 border-maryjane -mt-10 py-4">
                    <div class="px-10">
                        <div class="flex justify-between">
                            <div class="flex space-x-4">
                                <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                                </div>
                                <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-8 h-9 stroke-[5px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-125">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-6 pb-6 pl-16 font-Karantina font-bold text-3xl">
                    <div>
                        <h1>DATAS : {</h1>
                        <div class="ml-6">
                            <h1>USERNAME : </h1>
                            <h1>PACKAGE : </h1>
                            <h1>PAX & PAY : </h1>
                            <h1>STATUS :</h1>
                            <h1>RECEPT : </h1>
                        </div>
                    </div>
                    <h1>}</h1>
                </div>
                <div>
                    <div class="flex justify-center">
                        <div class="bg-maryjane">
                            <div class="px-5 py-2 bg-black relative -left-2 -top-2 border-2 border-maryjane">
                                <div class="flex space-x-10 py-2">
                                    <div>
                                        <div>
                                            <h1 class="font-Karantina text-3xl font-bold">
                                                GET STARTED
                                            </h1>
                                        </div>
                                    </div>
                                    <div @click="show">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="w-8 h-9 stroke-[5px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-125">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                                <div v-show="open">
                                    <div
                                        class="border-4 bg-black border-maryjane -mx-5 text-start pl-5 transition-transform duration-300 ease-in-out transform hover:scale-125">
                                        <div class="flex space-x-6">
                                            <div class="py-2">
                                                <div class="bg-black rounded-full px-3 py-3 border-2 border-maryjane">
                                                </div>
                                            </div>
                                            <div class="py-2">
                                                <h1 class="font-Karantina text-3xl font-bold">
                                                    SUCCESS
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="border-4 bg-black border-maryjane -mx-5 text-start pl-5 transition-transform duration-300 ease-in-out transform hover:scale-125">
                                        <div class="flex space-x-6">
                                            <div class="py-2">
                                                <div class="bg-black rounded-full px-3 py-3 border-2 border-red-500">
                                                </div>
                                            </div>
                                            <div class="py-2">
                                                <h1 class="font-Karantina text-3xl font-bold">
                                                    FAILED
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center pt-10">
                        <div class="bg-maryjane transition-transform duration-300 ease-in-out transform hover:scale-90">
                            <button @click="submit"
                                class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-20 py-2 bg-black relative -left-2 -top-2 border-2 border-maryjane">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    SUBMIT
                                </h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center">
        <div class="bg-maryjane w-110">
            <div v-show="up" class="bg-black border-4 border-maryjane relative -top-3 -left-3 py-10 text-maryjane">
                <div class="bg-black border-b-4 border-maryjane -mt-10 py-4">
                    <div class="px-10">
                        <div class="flex justify-between">
                            <div class="flex space-x-4">
                                <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                                </div>
                                <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-8 h-9 stroke-[5px] stroke-maryjane transition-transform duration-300 ease-in-out transform hover:scale-125">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-6 pb-6 pl-16 font-Karantina font-bold text-3xl">
                    <div>
                        <h1>DATAS : {</h1>
                        <div class="ml-6">
                            <h1>USERNAME : {{ username }}</h1>
                            <h1>PACKAGE : {{ pack }}</h1>
                            <h1>PAX & PAY : {{ pax }}  & {{ totalCost }}</h1>
                            <h1>STATUS : {{ status }}</h1>
                            <h1>RECEPT : </h1>
                        </div>
                    </div>
                    <h1>}</h1>
                </div>
                <div>
                    <div class="flex justify-center pt-10">
                        <div class="bg-maryjane transition-transform duration-300 ease-in-out transform hover:scale-90">
                            <button @click="save"
                                class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-20 py-2 bg-black relative -left-2 -top-2 border-2 border-maryjane">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    SAVE
                                </h1>
                            </button>
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
            open: false,
            to: true,
            up: false,
        }
    },
    methods: {
        show() {
            this.open = true
        },
        submit() {
            this.to = false
            this.up = true
        },
        save() {
            this.to = false
            this.up = false
        }
    }
}
</script>