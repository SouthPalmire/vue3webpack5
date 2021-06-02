<template>
    <div>
        <button class="btn_pagination" @click="paginationChangeEmit(page--)" :disabled="page === 0">
            prev
        </button>

        <button class="btn_pagination" @click="paginationChangeEmit(1)" v-if="page >= 6">
            1...
        </button>
        
        <div class="div_btn_pagination" v-for="( p, idx ) in pageMax" :key="idx">
            <button 
                class="btn_pagination"
                @click="paginationChangeEmit(p)"
                :class="{ active: p == page + 1 }" 
                v-if="p >= page - 4 && p <= page + 6"
            >
                {{ p }}
            </button>
        </div>

        <button class="btn_pagination" @click="paginationChangeEmit(pageMax)" v-if="page <= 8">
            ...{{ pageMax }}
        </button>

        <button @click="paginationChangeEmit(page++)" :disabled="page === pageMax">
            next
        </button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',

    props: {
        page: Number,
        pageMax: Number
    },

    methods: {
        paginationChangeEmit(value) {
            this.$emit('paginationPageValue', value)
        }
    }
}
</script>

<style>
.btn_pagination {
    float: left;
}

.active{
    font-weight: bold;
    background-color:rgb(58, 55, 55);
}
</style>