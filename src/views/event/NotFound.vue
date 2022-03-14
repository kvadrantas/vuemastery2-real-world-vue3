<template>
    <h1>{{ this.resource }} does not exist</h1>
    <router-link :to="{ name: 'EventList'}">Back to event list</router-link>
</template>

<script>
export default {
    props: {
        resource: {
            type: String,
            default: 'Page',
        }
    }
}
</script>