<template>
    <div class="bg-black pt-4 pb-10">
        <div class="px-20 py-5">
            <task />
        </div>
    </div>
</template>

<script>
import task from "../components/adminTasker.vue"

export default {
    components: {
        task
    }
}
</script>