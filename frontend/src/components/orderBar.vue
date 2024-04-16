<template>
    <div v-if="packagex" class="mx-16 pl-12 3xl:-mx-4 flex justify-between pb-6">
        <div class="flex space-x-8 pt-2">
            <div class="bg-black flex">
                <div class=" bg-ocean border-2 relative -top-2 -left-2 border-black ">
                    <div class="py-6 px-10">
                        <div class="flex pt-2">
                            <div class="bg-black">
                                <button class="bg-sunny relative -left-3 -top-2 border-2 border-black">
                                    <img class="w-93 h-[400px]" :src="getFullImagePath(packagex.MainImg)" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="-mx-20">
                <div class="bg-black">
                    <div class=" bg-sunny relative -top-2 -left-2 border-2 border-black h-[480px] pt-2">
                        <div class="py-6 px-10">
                            <div class="pl-10 ">
                                <div class="-ml-10">
                                    <div class="pb-6">
                                        <div class="bg-black">
                                            <div class="w-93 py-1 bg-sunny relative -left-2 -top-2 border-2 border-black ">
                                                <div>
                                                    <h1
                                                        class="font-Karantina text-xl 3xl:text-3xl font-bold text-start pl-4 flex py-1">
                                                        STATUS : <span class="uppercase font-bold text-xl flex pl-1">
                                                            {{ packagex.status }}
                                                            <div class="pr-1 pl-2 pt-2 -mt-[7px]">
                                                                <h1
                                                                    class="bg-ocean border-2 border-black rounded-full w-6 h-6">
                                                                </h1>
                                                            </div>
                                                        </span>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex pb-6">
                                        <div class="bg-black ">
                                            <button
                                                class="w-93 py-1 bg-sunny relative -left-2 -top-1 border-2 border-black ">
                                                <h1
                                                    class="font-Karantina text-xl 3xl:text-3xl font-bold text-start pl-4 py-1">
                                                    PACKAGE : {{ packagex.package }}
                                                </h1>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex pb-6 3xl:pb-16">
                                        <div class="bg-black ">
                                            <button
                                                class="w-93 py-1 bg-sunny relative -left-2 -top-2 border-2 border-black ">
                                                <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold text-start pl-4">
                                                    TIME JOURNEY : 4 DAY / 3 NIGHT
                                                </h1>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex pb-6 3xl:pb-16">
                                        <div class="bg-black ">
                                            <button
                                                class="w-93 py-1 bg-sunny relative -left-2 -top-2 border-2 border-black ">
                                                <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold text-start pl-4">
                                                    PAX : <span class="text-2xl font-medium">{{ packagex.pax }}</span> -
                                                    PERSON
                                                </h1>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="flex pb-6">
                                        <div class="bg-black ">
                                            <button
                                                class="w-93 py-1 bg-sunny relative -left-2 -top-2 border-2 border-black ">
                                                <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold text-start pl-4">
                                                    PRICE : Rp. <span class="text-2xl font-medium">{{ packagex.price
                                                    }}</span>
                                                </h1>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex justify-end">
                                        <div
                                            class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                                            <div>
                                                <div class="mb-4">
                                                    <div>
                                                        <label for="firstName"
                                                            class="block text-sm font-medium text-gray-700">First
                                                            Name</label>
                                                        <input v-model="firstName" type="firstName" id="firstName"
                                                            name="firstName" autocomplete="firstName"
                                                            class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                                    </div>
                                                    <div>
                                                        <label for="email"
                                                            class="block text-sm font-medium text-gray-700">Last
                                                            Name</label>
                                                        <input v-model="lastName" type="lastName" id="lastName"
                                                            name="lastName" autocomplete="lastName"
                                                            class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                                    </div>
                                                    <div>
                                                        <label for="email"
                                                            class="block text-sm font-medium text-gray-700">Phone</label>
                                                        <input v-model="phone" type="phone" id="phone" name="phone"
                                                            autocomplete="phone"
                                                            class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                                    </div>
                                                    <div>
                                                        <label for="email"
                                                            class="block text-sm font-medium text-gray-700">Email
                                                            Address</label>
                                                        <input v-model="userEmail" type="email" id="email" name="email"
                                                            autocomplete="email"
                                                            class="mt-1 p-2 block w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                                    </div>
                                                </div>
                                                <button @click="pay"
                                                    class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    Pay
                                                </button>
                                                <div id="snap-container"></div>
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
    </div>
</template>

<script>
import Api from "@/services/api";
export default {
    data() {
        return {
            packagex: null,
            transactionToken: null,
            firstName: '',
            lastName: '',
            phone: '',
            userEmail: ''
        }
    },
    mounted() {
        this.packageData();
    },
    methods: {
        async packageData() {
            try {
                const idx = this.$route.params.idx;
                const response = await Api.get(`packages/${idx}/order/${idx}`);
                this.packagex = response.data.data;
                this.transactionToken = this.packagex.transactionToken;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async pay() {
            const CLIENT_KEY = 'SB-Mid-client-EPD0pIaB3Z8lR6MD';

            try {
                if (!this.userEmail) {
                    alert('Please enter your email address');
                    return;
                }

                const response = await Api.post('midtrans/createTransaction', { firstName: this.firstName, lastName: this.lastName, phone: this.phone, email: this.userEmail });

                if (response.data.token) {
                    const script = document.createElement('script');
                    script.src = 'https://app.stg.midtrans.com/snap/snap.js';
                    script.setAttribute('data-client-key', CLIENT_KEY);
                    document.head.appendChild(script);

                    script.onload = () => {
                        window.snap.embed(response.data.token, {
                            embedId: 'snap-container'
                        });
                    };
                } else {
                    console.error('Failed to retrieve transaction token:', response.data.error);
                }
            } catch (error) {
                console.error('Error creating transaction:', error);
            }
        },
        getFullImagePath(MainImg) {
            return `http://172.20.10.9:5000${MainImg}`;
        },
    }
}
</script>