<script setup lang="ts">
const data = ref<any>();

async function test() {
    try {
        data.value = await $fetch("/test", { method: "post" });
    } catch (e) {
        data.value = e;
        console.error(e);
    }
}
</script>

<template>
    <div>
        <button @click="test">Test</button>
        <pre>{{ data }}</pre>
    </div>
</template>
