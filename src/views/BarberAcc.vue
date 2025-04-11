<template>
  <div class="barber-container">
    <h1>Кабінет Барбера</h1>

    <div class="appointments">
      <h2>Активні записи</h2>
      <ul>
        <li v-for="appointment in appointments" :key="appointment.id">
          <strong>{{ appointment.clientName }}</strong> - {{ appointment.service }} ({{ appointment.time }})
        </li>
      </ul>
    </div>

    <div class="calendar">
      <h2>Графік роботи</h2>
      <FullCalendar :events="calendarEvents" />
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import FullCalendar from "@/components/FullCalendar.vue";

export default {
  components: { FullCalendar },

  data() {
    return {
      appointments: [],
      calendarEvents: [],
    };
  },

  async mounted() {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;

    if (user) {
      const appointmentsRef = collection(db, "appointments");
      const q = query(appointmentsRef, where("barberId", "==", user.uid));
      const querySnapshot = await getDocs(q);

      this.appointments = querySnapshot.docs.map(doc => ({
        id: doc.id,
        clientName: doc.data().clientName,
        service: doc.data().service,
        time: doc.data().time,
      }));

      this.calendarEvents = this.appointments.map(appointment => ({
        title: `${appointment.clientName} - ${appointment.service}`,
        start: appointment.time,
      }));
    }
  },
};
</script>

<style scoped>
.barber-container {
  padding: 20px;
}
.appointments {
  margin-bottom: 20px;
}
.calendar{
  justify-content: center;
  max-width: 90%;
}
</style>
