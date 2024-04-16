<template>
    <div class="bg-black py-10">
        <div class="px-14 pb-100">
            <transaction />
        </div>
    </div>
</template>

<script>
import transaction from "../components/adminUserTransaction.vue"

export default {
    components: {
        transaction
    }
}
</script>