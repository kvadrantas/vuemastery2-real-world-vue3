<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
        <h4>{{ event.id }}</h4>
    </div>
</template>

<script>
import services from '@/services/services.js'
export default {
    props: ['id'],
    data() {
        return {
            event: null,
            // id: 23452345,
        }
    },
    created() {
        services.getEventDetails(this.id)
        .then(response => {
            // console.log('CCCCCCCC ', response.data)
            return this.event = response.data
            })
        .catch(err => console.log(err))
    }
}
</script>
