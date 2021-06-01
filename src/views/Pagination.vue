<template>
    <span>
        <button>{{ page + 1 }}</button>
        <button>{{ pageMax }}</button>
    </span>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        page: Number,
        pageMax: Number
    },
    data() {
        return {

        }
    }
}
</script>