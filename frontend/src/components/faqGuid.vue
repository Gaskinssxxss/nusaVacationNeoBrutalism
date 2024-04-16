<template>
    <div>
        <div class="pl-6 sm:pl-26 pr-2 sm:pr-16 pb-20">
            <div class="bg-black">
                <div class="bg-ocean mt-3 relative -left-3 -top-3 border-2 border-black">
                    <div class="py-[0.5px]">
                        <div class="flex justify-start space-x-1 sm:space-x-2 mt-3 sm:mt-4 pl-2 sm:pl-12">
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                            <div class="bg-sunny rounded-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-black"></div>
                        </div>
                        <div
                            class="text-center text-sunny -mt-8 sm:-mt-10 font-Karantina text-3xl sm:text-4xl font-medium pb-4">
                            <h1>~Faq & Guides</h1>
                        </div>
                        <div>
                            <div class="bg-sunny border-t-2 border-black h-[400px] sm:h-[700px] pb-10"
                                style="overflow-y: auto;">
                                <div class=" flex justify-end font-Karantina text-lg sm:text-2xl font-bold space-x-6 py-5 pr-8 sm:pr-10">
                                    <div @click="payFull"
                                        class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                        <div
                                            class="relative -top-2 -left-2 bg-ocean text-sunny border-2 border-black px-4 py-2">
                                            <h1>Full Payment</h1>
                                        </div>
                                    </div>
                                    <div @click="payDp"
                                        class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                        <div
                                            class="relative -top-2 -left-2 bg-ocean text-sunny border-2 border-black px-4 py-2">
                                            <h1>Down Payment</h1>
                                        </div>
                                    </div>
                                </div>

                                <div v-show="full">
                                    <div class="pl-5 sm:pl-8 -mt-1 sm:-mt-16">
                                        <h1 class="uppercase font-Karantina text-red-700 font-bold text-4xl">full payment methods</h1>
                                    </div>
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[1px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/a.png" alt="">
                                        </div>
                                        <div>
                                            <h1>1. click the "Book a Package" button. And the booking form will open.</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[1px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/aax.png" alt="">
                                        </div>
                                        <div>
                                            <h1>2. select one of the payment types you want to use.</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/b.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>3. Click the down arrow button in the "Selected Package" section and a list
                                                of travel packages will appear</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[590px]"
                                                src="../../../public/img/c.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>4. Select a travel package by clicking on the package name.</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[640px]"
                                                src="../../../public/img/d.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>5. Set the total pax who will participate in the package with "+" or "-".
                                                then select the date of your trip and click the "next" button.</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/e.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>6. Personal data form will open, please fill in all the data listed on the
                                                form.</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/f.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>7. The following is an example of filling in the correct personal data form
                                                and click "Pay" button.</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/ccx.png" alt="">
                                        </div>
                                        <div>
                                            <h1>8. click the "link" button for direct you to the payment page.</h1>
                                        </div>
                                    </div>
    
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/ddx.png" alt="">
                                        </div>
                                        <div>
                                            <h1>9. The payment page opens and please select the payment method you wish to
                                                use.</h1>
                                        </div>
                                    </div>
                                </div>


                                <div v-show="dp">
                                    <div class="pl-5 sm:pl-8 -mt-1 sm:-mt-16">
                                        <h1 class="uppercase font-Karantina text-red-700 font-bold text-4xl">Down Payment Methods</h1>
                                    </div>
                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[1px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/a.png" alt="">
                                        </div>
                                        <div>
                                            <h1>1. click the "Book a Package" button. And the booking form will open.
                                            </h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[1px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/aax.png" alt="">
                                        </div>
                                        <div>
                                            <h1>2. select one of the payment types you want to use.</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/b.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>3. Click the down arrow button in the "Selected Package" section and a
                                                list
                                                of travel packages will appear</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[590px]"
                                                src="../../../public/img/c.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>4. Select a travel package by clicking on the package name.</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[640px]"
                                                src="../../../public/img/d.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>5. Set the total pax who will participate in the package with "+" or
                                                "-".
                                                then select the date of your trip and click the "next" button.</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[640px]"
                                                src="../../../public/img/bbx.png" alt="">
                                        </div>
                                        <div>
                                            <h1>6. set the amount of down payment you want to pay by sliding the green
                                                slider.</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/e.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>7. Personal data form will open, please fill in all the data listed on
                                                the
                                                form.</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/f.jpg" alt="">
                                        </div>
                                        <div>
                                            <h1>8. The following is an example of filling in the correct personal data
                                                form
                                                and click "Pay" button.</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/ccx.png" alt="">
                                        </div>
                                        <div>
                                            <h1>9. click the "link" button for direct you to the payment page.</h1>
                                        </div>
                                    </div>

                                    <div
                                        class="block sm:flex justify-start font-Karantina text-2xl px-5 sm:px-10 pt-10 space-x-0 sm:space-x-10 text-justify">
                                        <div class="bg-black">
                                            <img class="relative -top-2 -left-2 border-[2px] border-black h-40 sm:h-60 w-[2700px] sm:w-[600px]"
                                                src="../../../public/img/ddx.png" alt="">
                                        </div>
                                        <div>
                                            <h1>10. The payment page opens and please select the payment method you wish
                                                to
                                                use.</h1>
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
            full: true,
            dp: false
        }
    },
    methods: {
        payFull() {
            this.full = true;
            this.dp = false;
        },
        payDp() {
            this.full = false;
            this.dp = true;
        }
    }
}
</script>
