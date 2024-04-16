<template>
  <div v-if="packageDetail">
    <div v-show="shows">
      <div>
        <div class="flex justify-start">
          <div class="bg-sunny">
            <div class="flex justify-start pl-6 md:pl-[100px] 3xl:pl-[120px] text-sunny">
              <div>
                <div class="flex mt-2">
                  <div class="bg-black">
                    <div class="flex space-x-24 px-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black">
                      <div>
                        <h1 class="font-Karantina text-xl sm:text-2xl font-bold">
                          {{ packageDetail.name }}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-sunny hidden sm:block">
            <div class="flex justify-end pl-8 text-sunny">
              <div>
                <div class="flex mt-2">
                  <div class="bg-black">
                    <div class="flex space-x-24 px-4 py-3 bg-ocean relative -left-2 -top-2 border-2 border-black">
                      <div>
                        <h1 class="font-Karantina text-2xl font-bold">
                          {{ packageDetail.timeTrav }}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="-mt-10 3xl:-mt-2">
        <div class="inline-block sm:flex justify-center space-x-2 pb-10">
          <div class="pt-14">
            <div class="flex sm:block ml-2 sm:ml-10 3xl:-ml-12">
              <div v-for="(imgItem, index) in packageDetail.img" :key="imgItem.idx"
                class="flex pt-[10px] 3xl:pt-0 pb-5 3xl:pb-8 pl-4 sm:pl-14">
                <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="change(index)"
                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 bg-sunny relative -left-[8px] -top-[3px] border-2 border-black">
                    <img class="w-[60px] sm:w-[130px] h-[50px] sm:h-[90px] 3xl:h-[100px]" :src="getFullimgPath(imgItem)" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-2 sm:pt-16">
            <div class="flex pb-0 sm:pb-10 pl-5 sm:pl-12 3xl:pl-14 pr-6 3xl:pr-0 -mr-0 3xl:-mr-20">
              <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-100">
                <button
                  class="transition-transform duration-300 ease-in-out transform hover:scale-100 bg-sunny relative -left-2 3xl:-left-3 -top-2 3xl:-top-3 border-[3px] border-black">
                  <img class="w-[300px] sm:w-full h-48 sm:h-102 3xl:h-[550px]" :src="getFullImagePath(packageDetail.MainImg)"
                    alt="">
                </button>
              </div>
            </div>
          </div>

          <div class="pl-0 3xl:pl-20">
            <div class="pt-6 sm:pt-14 3xl:pt-12 w-[410px] sm:w-95">
              <div class="pt-2 pb-5 pl-6 3xl:pl-14 pr-20 3xl:pr-0">
                <div class="bg-black">
                  <div
                    class="relative -top-2 -left-2 transition-transform duration-300 ease-in-out transform hover:scale-100 px-2 sm:px-6 3xl:px-4 h-[270px] sm:h-72 3xl:h-64 bg-sunny border-[3px] border-black">
                    <h1 class="font-saira text-[10px]/[20px] lg:text-[18px]/[25px] font-medium pt-2 sm:pt-8 3xl:pt-2">
                      {{ packageDetail.details }}
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex space-x-5 3xl:space-x-10 pl-6 sm:pl-5 3xl:pl-16 pt-2">
                <div class="bg-black">
                  <div class="px-4 3xl:px-4 py-2 3xl:py-1 bg-maryjane relative -left-2 -top-2 border-2 border-black">
                    <div class="flex">
                      <h1 class="font-Karantina text-xl 3xl:text-xl font-bold pr-2">PAX : </h1>
                      <vue-number-input v-model="pax" :min="1" :max="50" :model-value="0" size="small" inline controls
                        class="text-center w-24 font-sans text-ocean"></vue-number-input>
                    </div>
                  </div>
                </div>
                <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button
                    class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-10 sm:px-[42px] 3xl:px-12 py-2 3xl:py-1 bg-maryjane relative -left-2 -top-2 border-2 border-black">
                    <h1 class="hidden sm:block font-Karantina text-xl 3xl:text-xl font-bold">
                      ADD TO WISH
                    </h1>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="text-black hover:text-red-700 block sm:hidden w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                      </svg>

                    </div>
                  </button>
                </div>
              </div>

            </div>

            <div class="-ml-[140px] 3xl:ml-0 pt-2">
              <div class="flex justify-center pt-5 pl-20 sm:pl-16">
                <div>
                  <div class="bg-black transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <button @click="orderPackage"
                      class="transition-transform duration-300 ease-in-out transform hover:scale-100 px-[120px] sm:px-[160px] 3xl:px-36 py-2 3xl:py-1 bg-red-700 relative -left-2 -top-2 border-2 border-black">
                      <h1 class="font-Karantina text-xl 3xl:text-3xl font-bold text-sunny">
                        ORDER NOW
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="tru" class=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div class="h-40 relative">
        <div v-show="typePay"
          class=" text-black capitalize block sm:flex justify-center space-x-0 sm:space-x-10 -mt-40 sm:-mt-20 font-Karantina text-xl sm:text-4xl font-bold">
          <div>
            <div>
              <div class="bg-ocean border-t-4 border-l-4 border-r-4 border-black h-12">
                <div class="flex justify-start space-x-2 mt-2 pl-4">
                  <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                  <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                </div>
              </div>
              <div class="bg-sunny border-4 border-black h-40 sm:h-52 flex items-center">
                <div>
                  <div class="px-16 sm:px-20 text-center">
                    <h1 class="text-ocean">pay full the</h1>
                    <h1>package price</h1>
                  </div>
                  <div
                    class="flex justify-center pt-6 transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div class="bg-black">
                      <button @click="fullCash"
                        class="px-4 sm:px-6 relative -top-2 -left-2 bg-maryjane border-[3px] border-black h-10">
                        <h1 class="font-Karantina text-2xl font-bold">Next!</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-10 sm:pt-0">
            <div>
              <div class="bg-ocean border-t-4 border-l-4 border-r-4 border-black h-12">
                <div class="flex justify-start space-x-2 mt-2 pl-4">
                  <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                  <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                </div>
              </div>
              <div class="bg-sunny border-4 border-black h-40 sm:h-52 flex items-center">
                <div>
                  <div class="px-12 sm:px-14 text-center">
                    <h1 class="text-ocean">pay down payment</h1>
                    <h1>package price</h1>
                  </div>
                  <div
                    class="flex justify-center pt-6 transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <div class="bg-black">
                      <button @click="dp"
                        class="px-4 sm:px-6 relative -top-2 -left-2 bg-maryjane border-[3px] border-black h-10">
                        <h1 class="font-Karantina text-2xl font-bold">Next!</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="form" class="bg-black -mt-48 pl-3 sm:pl-0">
          <div class="flex justify-between px-10 py-2 bg-ocean border-[3px] border-black relative -top-2 -left-2">
            <div class=" text-sunny font-Karantina text-3xl">
              <h1>Booking Form!</h1>
            </div>
            <div @click="fals" class="pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div v-show="packageDatas"
            class="py-4 px-4 sm:px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
            <div>
              <div class="pt-4 pb-1">
                <label class="block text-black text-xl font-Karantina" for="">Package
                  Selected</label>
                <div>
                  <div>
                    <div>
                      <div class="bg-sunny border-2 border-black pl-2 py-2 flex justify-between">
                        <h1 class="font-Karantina text-2xl">{{ packageDetail.name }}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="pb-4 pt-1">
                <label class="block text-black text-xl font-Karantina" for="">Pax</label>
                <div class="w-28">
                  <div class="bg-sunny border-2 border-black">
                    <div class="flex">
                      <h1 class="font-Karantina text-2xl pl-2">{{ pax }} Person</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-black text-xl font-Karantina" for="">Price</label>
                <div>
                  <h1
                    class=" bg-sunny w-[300px] sm:w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                    Rp. {{ packageDetail.price }}
                  </h1>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-black text-xl font-Karantina">Total Price</label>
                <div>
                  <h1
                    class=" bg-sunny w-[300px] sm:w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                    Rp. {{ pax * packageDetail.price }}
                  </h1>
                </div>
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Date of Travel</label>
                <input type="date" v-model="dateTraveling"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="my-4 pt-4 flex justify-end">
                <div class="bg-black w-[150px] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="chenzz" class="relative -top-2 -left-2 w-full bg-sunny h-10 border-2 border-black">
                    <h1 class="font-Karantina font-bold text-2xl">Next!</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-show="userDatas">
            <div class="py-4 px-4 sm:px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
              <div class="mb-3 sm:mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">First Name</label>
                <input type="text" v-model="firstName"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-3 sm:mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Last Name</label>
                <input type="text" v-model="lastName"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-3 sm:mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Email</label>
                <input type="text" v-model="email"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-3 sm:mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Phone</label>
                <input type="text" v-model="phone"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[300px] sm:w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="flex justify-around space-x-8 pb-4">
                <div class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="prev" class="border-2 border-black w-[150px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                    <h1 class="font-Karantina">
                      Prev
                    </h1>
                  </button>
                </div>
                <div class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div @click="postDatas" class="border-2 border-black w-[120px] sm:w-[250px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                    <button>
                      <h1 class="font-Karantina">Pay</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="urls" class="flex justify-center items-center -mt-20">
          <div>
            <div class="bg-ocean border-t-4 border-l-4 border-r-4 border-black h-12">
              <div class="flex justify-start space-x-2 mt-2 pl-4">
                <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
              </div>
            </div>
            <div class="bg-sunny border-4 border-black h-52 flex items-center">
              <div>
                <div class="px-20 text-center">
                  <h1 class="text-ocean">Please click the button</h1>
                  <h1>for get the Payment Link!</h1>
                </div>
                <div
                  class="flex justify-center pt-6 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div class="bg-black">
                    <button @click="pay" class="px-6 relative -top-2 -left-2 bg-maryjane border-[3px] border-black h-10">
                      <h1 class="font-Karantina text-2xl font-bold">LINK</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="urlss" class="flex justify-center items-center -mt-20">
          <div>
            <div class="bg-ocean border-t-4 border-l-4 border-r-4 border-black h-12">
              <div class="flex justify-start space-x-2 mt-2 pl-4">
                <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
                <div class="bg-sunny rounded-full px-3 py-3 border-2 border-black"></div>
              </div>
            </div>
            <div class="bg-sunny border-4 border-black h-52 flex items-center">
              <div>
                <div class="px-20 text-center">
                  <h1 class="text-ocean">Please click the button</h1>
                  <h1>for get the Payment Link!</h1>
                </div>
                <div
                  class="flex justify-center pt-6 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <div class="bg-black">
                    <button @click="dpy" class="px-6 relative -top-2 -left-2 bg-maryjane border-[3px] border-black h-10">
                      <h1 class="font-Karantina text-2xl font-bold">LINK</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="formDp" class="bg-black -mt-48">
          <div class="flex justify-between px-10 py-2 bg-ocean border-[3px] border-black relative -top-2 -left-2">
            <div class=" text-sunny font-Karantina text-3xl">
              <h1>Booking Form!</h1>
            </div>
            <div @click="fals" class="pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div v-show="packageDatas"
            class="py-4 px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
            <div>
              <div class="pt-4 pb-1">
                <label class="block text-black text-xl font-Karantina" for="">Package
                  Selected</label>
                <div>
                  <div>
                    <div>
                      <div class="bg-sunny border-2 border-black pl-2 py-2 flex justify-between">
                        <h1 class="font-Karantina text-2xl">{{ packageDetail.name }}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="pb-4 pt-1">
                <label class="block text-black text-xl font-Karantina" for="">Pax</label>
                <div class="w-28">
                  <div class="bg-sunny border-2 border-black">
                    <div class="flex">
                      <h1 class="font-Karantina text-2xl pl-2">{{ pax }} Person</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-black text-xl font-Karantina" for="">Price</label>
                <div>
                  <h1 class=" bg-sunny w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                    Rp. {{ packageDetail.price }}
                  </h1>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-black text-xl font-Karantina">Total Down Payment</label>
                <div>
                  <Slider v-model="dPay" :format="format" />
                </div>
                <div>
                  <h1 class=" bg-sunny w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                    Rp. {{ dpx }} .000
                  </h1>
                </div>
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Date of Travel</label>
                <input type="date" v-model="dateTraveling"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="my-4 pt-4 flex justify-end">
                <div class="bg-black w-[150px] transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="chenzz" class="relative -top-2 -left-2 w-full bg-sunny h-10 border-2 border-black">
                    <h1 class="font-Karantina font-bold text-2xl">Next!</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-show="userDatas">
            <div class="py-4 px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">First Name</label>
                <input type="text" v-model="firstName"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Last Name</label>
                <input type="text" v-model="lastName"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Email</label>
                <input type="text" v-model="email"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="mb-1">
                <label class="block -mb-1 text-black text-xl font-Karantina">Phone</label>
                <input type="text" v-model="phone"
                  class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
              </div>
              <div class="flex justify-around space-x-8 pb-4">
                <div class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="prev" class="border-2 border-black w-[150px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                    <h1 class="font-Karantina">
                      Prev
                    </h1>
                  </button>
                </div>
                <div class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <button @click="postDatasDp" class="border-2 border-black w-[250px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                    <h1 class="font-Karantina">
                      Pay
                    </h1>
                  </button>
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
import Slider from '@vueform/slider'

function generateUniqueOrderID(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  let x = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
    x = "NusaVacation-" + code
  }

  return x;
}

const uniqueCode = generateUniqueOrderID(8);

export default {
  components: {
    Slider
  },
  data() {
    return {
      pax: null,
      packy: "Package Name",
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      packageDetail: null,
      selectedPackage: null,
      packagePrice: null,
      hide: false,
      tru: false,
      pack: false,
      userDatas: false,
      err: false,
      mid: false,
      shows: true,
      packageDatas: true,
      form: false,
      formDp: false,
      typePay: false,
      dpPrice: 1000000,
      travelDate: null,
      dpx: null,
      urls: false,
      urlss: false,
    }
  },
  mounted() {
    this.packageData();
  },
  methods: {
    format(dpPrice) {
      this.dpx = dpPrice * this.pax;
      const dPay = `Rp.${this.dpx}.000`;
      return dPay;
    },
    price(dpPrice) {
      const dpx = dpPrice * this.pax;
      return dpx;
    },
    fullCash() {
      this.form = true;
      this.typePay = false;
    },
    dp() {
      this.formDp = true;
      this.typePay = false;
    },
    async pay() {
      const datas = {
        id: uniqueCode,
        idx: this.packageDetail.idx,
        packageName: this.packageDetail.name,
        price: this.packageDetail.price,
        pax: this.pax,
        dateTraveling: this.dateTraveling,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        total: this.pax * this.packageDetail.price
      };

      try {
        const rezz = await Api.post("midtrans/createTransaction", datas);
        const responseData = await rezz;
        console.log(" tokenya adalah : " + responseData.data.data.token);
        console.log("ini redirect url nya : " + responseData.data.data.redirect_url);
        const url = await responseData.data.data.redirect_url;

        window.open(url, '_blank');

        const datax = {
          to: this.email,
          subject: 'Nusa Vacation Payment',
          text: `Mr. ${this.firstName + " " + this.lastName} Please Complete Your Payment,
Package : ${this.packageDetail.name}
Price : ${this.packageDetail.price}
Pax : ${this.pax}
Total : ${this.pax * this.packageDetail.price}
Url Payment : ${responseData.data.data.redirect_url}
For Any Information Please Contacts the Admin
Whatsapp : https://wa.link/iftrmr
Big thanks for u.`
        }
        const ress = await Api.post('email', datax)
        console.log(ress.data)
      } catch (error) {
        console.error('Error making payment:', error);
        console.log('email', error)
      }
      this.tru = false;
      this.urls = false;
    },
    async dpy() {
      const prices = this.pax * this.dpx * 1000;
      const data = {
        id: uniqueCode,
        idx: this.packageDetail.idx,
        packageName: this.packageDetail.name,
        price: prices / this.pax,
        pax: this.pax,
        totals: prices,
        dateTraveling: this.dateTraveling,
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
      };

      try {
        const rezzz = await Api.post("midtrans/createTransaction/dp", data);
        const responseData = await rezzz;
        console.log(" tokenya adalah : " + responseData.data.data.tokens);
        console.log("ini redirect url nya : " + responseData.data.data.redirect_url);
        window.open(responseData.data.data.redirect_url, '_blank');

        const datax = {
          to: this.email,
          subject: 'Nusa Vacation Payment',
          text: `Mr. ${this.firstName + " " + this.lastName} Please Complete Your Payment,
Package : ${this.packageDetail.name}
Price : ${this.packageDetail.price}
Pax : ${this.pax}
Total : ${prices}
Url Payment : ${responseData.data.data.redirect_url}
For Any Information Please Contacts the Admin
Whatsapp : https://wa.link/iftrmr
Big thanks for u.`
        }
        const res = await Api.post('email', datax)
        console.log(res.data)
      } catch (error) {
        console.error('Error making payment:', error);
      }
      this.tru = false;
      this.urlss = false;
    },
    async packageData() {
      try {
        const idx = this.$route.params.idx;
        const response = await Api.get(`packages/${idx}`);
        this.packageDetail = response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    chenzz() {
      this.packageDatas = false,
        this.userDatas = true
      console.log(this.dpx)
    },
    prev() {
      this.packageDatas = true,
        this.userDatas = false
    },
    async postDatas() {
      this.form = false;
      this.mid = true;
      this.urls = true;
      try {
        const id = uniqueCode;
        const packageName = this.packageDetail.name;
        const pax = this.pax;
        const price = this.packageDetail.price;
        const firstName = this.firstName;
        const lastName = this.lastName;
        const email = this.email;
        const phone = this.phone;
        const dateTraveling = this.dateTraveling;
        const res = await Api.post('order', { id, packageName, pax, price, firstName, lastName, email, phone, dateTraveling }); // Tambahkan dateTraveling di sini
        console.log(res.data)
      } catch (error) {
        console.error('Error ordering package:', error);
      }
    },
    async postDatasDp() {
      this.formDp = false;
      this.mid = true;
      this.urlss = true;
      const prices = this.pax * this.dpx * 1000;
      try {
        const id = uniqueCode;
        const packageName = this.packageDetail.name;
        const pax = this.pax;
        const price = this.packageDetail.price;
        const firstName = this.firstName;
        const lastName = this.lastName;
        const email = this.email;
        const phone = this.phone;
        const dateTraveling = this.dateTraveling;
        const dp = prices;
        const res = await Api.post('order/dp', { id, packageName, pax, price, dp, firstName, lastName, email, phone, dateTraveling });
        console.log(res.data)
      } catch (error) {
        console.error('Error ordering package:', error);
      }
    },
    change(index) {
      const currentMainImg = this.packageDetail.MainImg;
      this.packageDetail.MainImg = this.packageDetail.img[index];
      this.packageDetail.img[index] = currentMainImg;
    },
    fals() {
      this.tru = false
    },
    getFullImagePath(MainImg) {
      return `http://172.20.10.9:5000${MainImg}`;
    },
    getFullimgPath(img) {
      return `http://172.20.10.9:5000${img}`;
    },
    orderPackage() {
      if (this.form == true) {
        this.form = false;
        this.formDp = false;
      } else if (this.formDp == true) {
        this.formDp = false;
      } else {
        this.tru = true
        this.typePay = true
      }
    }
  },
}
</script>

<style lang="scss">
@import '../../node_modules/@vueform/slider/themes/tailwind.scss'
</style>