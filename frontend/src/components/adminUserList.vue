<template>
    <div class="flex">
        <div class="w-full bg-maryjane ">
            <div class="py-5 bg-black text-maryjane relative -left-4 -top-4 border-2 border-maryjane tracking-wider">
                <div class="pb-10">
                    <h1 class="font-Karantina font-bold text-center text-6xl">
                        ~/USER DRAF-T
                    </h1>
                </div>
                <div class="border-t-2 border-maryjane pt-10 pb-5 px-10">
                    <div>
                        <div class="flex justify-between space-x-10 font-Karantina font-bold text-3xl">
                            <div class="text-center">
                                <div class="border-2 border-maryjane text-center py-4 px-10 ">
                                    <div>
                                        <h1>NO</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>USERNAME</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>EMAIL</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>PASSWORD</h1>
                                    </div>
                                </div>
                            </div>
                            <div class=" w-full text-center">
                                <div class="border-2 border-maryjane text-center py-4">
                                    <div>
                                        <h1>DATA REGIST</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div v-for="user in userList" :key="user._id">
                                <div class="flex justify-between space-x-10 font-Karantina font-bold text-2xl pt-6">
                                    <div class="text-center">
                                        <div class="border-2 border-maryjane text-center py-4 px-12 ">
                                            <div>
                                                <h1>1</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" w-full text-center">
                                        <div class="border-2 border-maryjane text-center py-4">
                                            <div>
                                                <h1>{{ user.username }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" w-full text-center">
                                        <div class="border-2 border-maryjane text-center py-4">
                                            <div>
                                                <h1>{{ user.email }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" w-full text-center">
                                        <div class="border-2 border-maryjane text-center py-4">
                                            <div>
                                                <h1>{{ user.password }}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" w-full text-center">
                                        <div class="border-2 border-maryjane text-center py-4">
                                            <div>
                                                <h1>{{ user.date }}</h1>
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
            userList: []
        };
    },
    mounted() {
        this.fetchUserData();
    },
    methods: {
        fetchUserData() {
            Api.get('/userList')
                .then(response => {
                    if (response.data.message === "success") {
                        this.userList = response.data.data;
                    } else {
                        console.error('Error fetching user data:', response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        },
        formatDate(dateString) {
            // Format date as desired, you can use libraries like moment.js for more complex formatting
            return new Date(dateString).toLocaleDateString();
        }
    }
};
</script>