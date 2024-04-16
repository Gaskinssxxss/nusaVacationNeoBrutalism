<template>
    <div class="bg-black h-full">
        <div>
            <div class="flex justify-end pr-4">
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

        <div>
            <div class="bg-black">
                <div class="bg-black px-5 py-3 mt-3 relative -left-4 -top-4 border-2 border-maryjane">
                    <div class="flex justify-start space-x-2 mt-4 pl-5">
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                    </div>
                    <div class="text-center -mt-10 font-Karantina text-3xl font-medium pb-4 text-maryjane">
                        <h1>~/www/root</h1>
                    </div>
                </div>
                <div>
                    <div
                        class="bg-black px-5 relative -left-4 -top-4 border-b-4 border-r-4 border-l-4 border-maryjane text-maryjane py-10 space-y-14">
                        <div class="flex">
                            <div class="flex justify-start pl-10">
                                <div class="bg-maryjane flex w-105 h-24">
                                    <div class="bg-black w-105 h-24 relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina text-4xl font-bold text-center pt-6">
                                            AUTOMATION TRANSACTION CHECKING
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <active @active="handleActive" @deactive="handleDeactive" />
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex justify-start pl-10">
                                <div class="bg-maryjane flex w-105 h-24">
                                    <div class="bg-black w-105 h-24 relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina text-4xl font-bold text-center pt-6">
                                            AUTOMATION INVENTORY CHECKING
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <active @active="handleActive" @deactive="handleDeactive" />
                            </div>
                        </div>

                        <div class="flex">
                            <div class="flex justify-start pl-10">
                                <div class="bg-maryjane flex w-105 h-24">
                                    <div class="bg-black w-105 h-24 relative -left-3 -top-3 border-2 border-maryjane">
                                        <h1 class="font-Karantina text-4xl font-bold text-center pt-6">
                                            AUTOMATION ATTACKING CHECKING
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <active @active="handleActive" @deactive="handleDeactive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";
import active from "../components/activeDeactive.vue"
export default {
    components: {
        active
    },
    data() {
        return {
            fols: true,
            tru: false
        }
    },
    methods: {
        handleActive() {
            console.log("active");
            this.fols = false;
            this.tru = true;
            this.runPythonScript();
            setInterval(() => {
                this.runPythonScript();
            }, 30 * 60 * 1000);
        },
        runPythonScript() {
            Api.post('runPythonScript')
                .then(response => response.json())
                .then(data => {
                    console.log(data.message);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        },
        handleDeactive() {
            console.log("deactive");
            this.fols = true;
            this.tru = false;
        }
    }
}
</script>

<style>
.text-stroke-3 {
    -webkit-text-stroke: 2px #AAE73D;
}
</style>