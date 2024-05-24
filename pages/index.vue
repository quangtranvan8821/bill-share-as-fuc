<template>
    <div>index
        <Button>click me</Button>

        <DishesCreate />

        <div class="flex flex-col">
            <DishesItem v-for="dish in dishes" :dish="dish" :key="dish.id" />
        </div>
    </div>
</template>

<script lang="ts">
import DishesItem from '@/components/Dishes/Create.vue';
import { type IDishes } from '@/types/dishes.types'

const dishes = ref<IDishes[]>([
    {
        id: uuidv4(),
        name: 'Món 1',
        price: '200.000'
    },
    {
        id: uuidv4(),
        name: 'Món 2',
        price: '200.000'
    },
    {
        id: uuidv4(),
        name: 'Món 3',
        price: '200.000'
    }
])
</script>