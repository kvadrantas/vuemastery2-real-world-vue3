<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import services from '@/services/services.js';

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,      
    }
  },
  created() {
    // axios.get('https://my-json-server.typicode.com/kvadrantas/vuemastery1-Intro-to-VUE3/events')
    // .then(response => this.events = response.data)
    // .catch(err => console.log(err))

    services.getAllEvents()
    .then(response => this.events = response.data)
    .catch(err => console.log(err))
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: colum;
  align-items: center;
}
</style>