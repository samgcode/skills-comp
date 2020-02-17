<template>
    <div class="top-spacer">
        <span>{{ error }}</span>
    </div>
</template>

<script>
export default {
    name: 'error',
    props: ['error'],
}
</script>