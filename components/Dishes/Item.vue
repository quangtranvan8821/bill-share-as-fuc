<template>
    <Card>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            Card Content
        </CardContent>
        <CardFooter>
            Card Footer
        </CardFooter>
    </Card>
</template>

<script lang="ts">
const {dishes } = defineProps({
dish: {
    type: Object, required: true
}
})
</script>