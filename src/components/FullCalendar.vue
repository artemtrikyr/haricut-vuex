<template>
    <FullCalendar :options="calendarOptions" />
  </template>
  
  <script>
  import FullCalendar from "@fullcalendar/vue3";
  import dayGridPlugin from "@fullcalendar/daygrid";
  
  export default {
    components: { FullCalendar },
  
    props: {
      events: {
        type: Array,
        required: true
      }
    },
  
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin],
          initialView: "dayGridMonth",
          events: this.events
        }
      };
    }
  };
  </script>
  