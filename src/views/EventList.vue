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
      //  [
    //   {
    //   id: 23452345,
    //   category: 'Gyvunu prieglauda',
    //   title: 'Siamo katino paemimo diena',
    //   description: 'Naujo seimininko suradimas',
    //   location: 'Vilnius',
    //   date: 'January 28, 2022',
    //   time: '12:00',
    //   petsAllowed: true,
    //   organizer: 'Jonas Jonaitis',
    // },
    //   {
    //   id: 2345234232,
    //   category: 'Gyvunu prieglauda',
    //   title: 'Sembernaro suns paemimo diena',
    //   description: 'Naujo seimininko suradimas',
    //   location: 'Vilnius',
    //   date: 'January 28, 2022',
    //   time: '12:00',
    //   petsAllowed: true,
    //   organizer: 'Petras Petraitis',
    // },
    //   {
    //   id: 234523454,
    //   category: 'Gyvunu prieglauda',
    //   title: 'Rusu melynojo katino paemimo diena',
    //   description: 'Naujo seimininko suradimas',
    //   location: 'Vilnius',
    //   date: 'January 28, 2022',
    //   time: '12:00',
    //   petsAllowed: true,
    //   organizer: 'Zigmas Zigmaitis',
    // },
    //   {
    //   id: 234523556,
    //   category: 'Gyvunu prieglauda',
    //   title: 'Dobermano suns paemimo diena',
    //   description: 'Naujo seimininko suradimas',
    //   location: 'Vilnius',
    //   date: 'January 28, 2022',
    //   time: '12:00',
    //   petsAllowed: true,
    //   organizer: 'Albinas Albinaitis',
    // },
    //   ]
    }
  },
  created() {
    // axios.get('https://my-json-server.typicode.com/kvadrantas/vuemastery1-Intro-to-VUE3/events')
    // .then(response => this.events = response.data)
    // .catch(err => console.log(err))

    services.fetchEvents()
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