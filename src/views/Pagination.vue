<template>
    <div>
        <button class="btn_pagination" v-if="page >= 6">
            1...
        </button>
        
        <div class="div_btn_pagination" v-for="( p, idx ) in pageMax" :key="idx">
            <button 
                class="btn_pagination" 
                :class="{ active: p == page + 1 }" 
                v-if="p >= page - 4 && p <= page + 6"
            >
                {{ p }}
            </button>
        </div>

        <button class="btn_pagination">
            ...{{ pageMax }}
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
    data() {
        return {

        }
    }
}
</script>

<style>
.btn_pagination {
    background-color: grey;
    float: left;
}

.active{
    font-weight: bold;
    background-color:rgb(58, 55, 55);
}
</style>