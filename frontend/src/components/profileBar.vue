<template>
    <div class="flex justify-center space-x-60 pr-28 py-20">
        <div>
            <div class="flex mt-5">
                <div class="bg-black">
                    <div class="px-60 py-12 bg-sunny relative -left-2 -top-2 border-2 border-black">
                        <h1 class="font-Karantina text-6xl font-bold">
                            Mr. xyz
                        </h1>
                    </div>
                </div>
            </div>

            <div class="flex mt-10">
                <div class="bg-black">
                    <div class="px-44 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                        <h1 class="font-Karantina text-3xl font-bold">
                            TRANSACTION HISTORY
                        </h1>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="flex">
                <div class="bg-black rounded-full transition-transform duration-300 ease-in-out transform hover:scale-90">
                    <button
                        class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-16 py-16 bg-sunny rounded-full relative -left-2 -top-2 border-2 border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="w-32 h-32 mx-auto stroke-2 stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="pl-56 pr-85 pb-20">
        <div>
            <div class="bg-sunny px-5 py-3 mt-3 border-2 border-black">
                <div class="flex justify-start space-x-2 mt-4">
                    <div class="bg-sunny rounded-full px-5 py-5 border-2 border-black">
                    </div>
                    <div class="bg-sunny rounded-full px-5 py-5 border-2 border-black">
                    </div>
                </div>
                <div class="text-center -mt-10 font-Karantina text-3xl font-medium pb-4">
                    <h1>~editProfile</h1>
                </div>
            </div>
            <div class="bg-sunny border-2 border-black pt-20 pb-20 px-24">

                <div class="flex justify-around">
                    <div class="pr-10">
                        <div class="flex">
                            <div class="bg-black">
                                <div class="px-20 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                    <h1 class="font-Karantina text-3xl font-bold">
                                        USERNAME
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex pr-10 pl-2">
                            <div class="w-full pt-1 bg-black">
                                <input
                                    class="px-96 py-4 bg-sunny relative -left-3 -top-3 border-2 border-black pl-4 font-medium text-3xl font-Karantina"
                                    type="name" id="name" required>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-around py-10">
                    <div class="pr-10">
                        <div class="flex">
                            <div class="bg-black">
                                <div class="px-24 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                    <h1 class="font-Karantina text-3xl font-bold">
                                        EMAIL
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex pr-10 pl-2">
                            <div class="w-full pt-1 bg-black">
                                <input
                                    class="px-96 py-4 bg-sunny relative -left-3 -top-3 border-2 border-black pl-4 font-medium text-3xl font-Karantina"
                                    type="name" id="name" required>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-around pb-10">
                    <div class="pr-10">
                        <div class="flex">
                            <div class="bg-black">
                                <div class="px-20 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                    <h1 class="font-Karantina text-3xl font-bold ">
                                        PASSWORD
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex pr-10 pl-2">
                            <div class="w-full pt-1 bg-black">
                                <input
                                    class="px-96 py-4 bg-sunny relative -left-3 -top-3 border-2 border-black pl-4 font-medium text-3xl font-Karantina"
                                    type="name" id="name" required>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-around -ml-6">
                    <div class="pr-5">
                        <div class="flex">
                            <div class="bg-black">
                                <div class=" px-10 py-4 bg-sunny relative -left-2 -top-2 border-2 border-black">
                                    <h1 class="font-Karantina text-3xl font-bold">
                                        CONFIRM PASSWORD
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="-mr-6">
                        <div class="flex pr-10 pl-4">
                            <div class="w-full pt-1 bg-black">
                                <input
                                    class="px-96 py-4 bg-sunny relative -left-3 -top-3 border-2 border-black pl-4 font-medium text-3xl font-Karantina"
                                    type="name" id="name" required>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pt-16 pr-10">
                    <div class="flex justify-end">
                        <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-90">
                            <button
                                class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-10 py-4 bg-ocean text-white tracking-wide relative -left-2 -top-2 border-2 border-black">
                                <h1 class="font-Karantina text-3xl font-bold">
                                    GET STARTED
                                </h1>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>