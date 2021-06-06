<template>
    <div>
        <button 
            class="btn_pagination" 
            @click="countedPage--" 
            :disabled="countedPage === 0"
        >
            prev
        </button>

        <button 
            class="btn_pagination" 
            @click="countedPage=0" 
            v-if="countedPage >= 6"
        >
            1...
        </button>
        
        <div 
            class="div_btn_pagination" 
            v-for="( p, idx ) in pageMax" 
            :key="idx"
        >
            <button 
                class="btn_pagination"
                @click="countedPage = p - 1"
                :class="{ active: p == countedPage + 1 }" 
                v-if="p >= countedPage - 4 && p <= countedPage + 6"
            >
                {{ p }}
            </button>
        </div>

        <button 
            class="btn_pagination" 
            @click="countedPage = pageMax - 1"
            v-if="countedPage + 1 <= pageMax - 6"
        >
            ...{{ pageMax }}
        </button>

        <button 
            @click="countedPage++"
            :disabled="countedPage === pageMax - 1"
        >
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

    data() {
        return {
            countedPage: this.page
        }
    },

    watch: {
        countedPage(value) {
            this.$emit('paginationPageValue', value)
        }
    }
}
</script>

<style>
.btn_pagination {
    float: left;
}

.active {
    font-weight: bold;
    background-color:rgb(58, 55, 55);
}
</style>