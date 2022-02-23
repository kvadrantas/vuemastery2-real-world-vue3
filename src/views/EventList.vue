<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
    <div class="pagination">
      <router-link
      :to="{ name: 'EventList', query: { page: page - 1 } }"
      rel = "prev"
      v-if="page != 1">
      Prev page
      </router-link>
      <router-link
      :to="{ name: 'EventList', query: { page: page + 1} }"
      rel = "next"
      v-if="hasNextPage">
      Next page
      </router-link>
    </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import services from '@/services/services.js';
import { watchEffect } from 'vue';

export default {
  name: "EventList",
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,  
      totalEvents: 0,    
    }
  },
  created() {
    // axios.get('https://my-json-server.typicode.com/kvadrantas/vuemastery1-Intro-to-VUE3/events')
    // .then(response => this.events = response.data)
    // .catch(err => console.log(err))

    watchEffect(() => {
      this.events = null
      services.getAllEvents(2, this.page)
      .then(response => {
        this.events = response.data;
        this.totalEvents = response.headers['x-total-count']
        })
      .catch(err => console.log(err))
    })

  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2);
      return this.page < totalPages;
    }
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: colum;
  align-items: center;
}

.pagination {
  display: flex;
  flex-direction: row;
  width: 500px;
      justify-content: space-between;
}
</style>