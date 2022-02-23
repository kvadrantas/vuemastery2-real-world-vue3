<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div class="nav">
            <router-link :to="{ name: 'EventDetails', params: { id } }">Details</router-link>
            <router-link :to="{ name: 'EventEdit', params: { id } }">Edit</router-link>
            <router-link :to="{ name: 'EventRegister', params: { id } }">Register</router-link>
        </div>
<router-view :event="event" ></router-view>
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
