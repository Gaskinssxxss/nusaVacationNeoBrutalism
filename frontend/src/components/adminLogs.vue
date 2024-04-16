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
                        <h1>~/Transacstion-Logs</h1>
                    </div>
                </div>
                <div>
                    <div
                        class="bg-black h-100 px-5 relative -left-4 -top-4 border-b-4 border-r-4 border-l-4 border-maryjane text-maryjane py-10 space-y-14">
                        <div>
                            <h1 class="text-sunny">test</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="inventory">
            <div class="bg-black">
                <div class="bg-black px-5 py-3 mt-3 relative -left-4 -top-4 border-2 border-maryjane">
                    <div class="flex justify-start space-x-2 mt-4 pl-5">
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                    </div>
                    <div class="text-center -mt-10 font-Karantina text-3xl font-medium pb-4 text-maryjane">
                        <h1>~/Inverntory-Logs</h1>
                    </div>
                </div>
                <div>
                    <div
                        class="bg-black h-100 px-5 relative -left-4 -top-4 border-b-4 border-r-4 border-l-4 border-maryjane text-maryjane py-10 space-y-14">
                        <div>
                            <h1 class="text-sunny">test</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="attacking">
            <div class="bg-black">
                <div class="bg-black px-5 py-3 mt-3 relative -left-4 -top-4 border-2 border-maryjane">
                    <div class="flex justify-start space-x-2 mt-4 pl-5">
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                        <div class="bg-black rounded-full px-4 py-4 border-2 border-maryjane">
                        </div>
                    </div>
                    <div class="text-center -mt-10 font-Karantina text-3xl font-medium pb-4 text-maryjane">
                        <h1>~/Attacking-Logs</h1>
                    </div>
                </div>
                <div>
                    <div
                        class="bg-black h-100 px-5 relative -left-4 -top-4 border-b-4 border-r-4 border-l-4 border-maryjane text-maryjane py-10 space-y-14">
                        <div>
                            <h1 class="text-sunny">test</h1>
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
            inventory: false,
            attacking: false
        }
    }
}
</script>