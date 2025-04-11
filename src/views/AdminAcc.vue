<template>
  <div class="admin-container">
    <h1>Адмін-панель</h1>

    <div class="section">
      <h2>Всі записи</h2>
      <ul>
        <li v-for="appointment in appointments" :key="appointment.id">
          <strong>{{ appointment.clientName }}</strong> записаний до {{ appointment.barberName }}
          на {{ appointment.service }} о {{ appointment.time }}
        </li>
      </ul>
    </div>

    <div class="section">
      <h2>Керування барберами</h2>
      <ul>
        <li v-for="barber in barbers" :key="barber.id">
          <strong>{{ barber.name }}</strong> 
          <button @click="removeBarber(barber.id)">Видалити</button>
        </li>
      </ul>
      <input v-model="newBarberName" placeholder="Ім'я нового барбера">
      <button @click="addBarber">Додати барбера</button>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      appointments: [],
      barbers: [],
      newBarberName: ""
    };
  },

  async mounted() {
    const db = getFirestore();

    const appointmentsRef = collection(db, "appointments");
    const barbersRef = collection(db, "barbers");

    const appointmentsSnapshot = await getDocs(appointmentsRef);
    const barbersSnapshot = await getDocs(barbersRef);

    this.appointments = appointmentsSnapshot.docs.map(doc => ({
      id: doc.id,
      clientName: doc.data().clientName,
      barberName: doc.data().barberName,
      service: doc.data().service,
      time: doc.data().time,
    }));

    this.barbers = barbersSnapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name
    }));
  },

  methods: {
    async addBarber() {
      if (!this.newBarberName.trim()) return;

      const db = getFirestore();
      const barbersRef = collection(db, "barbers");

      const newBarber = await addDoc(barbersRef, {
        name: this.newBarberName
      });

      this.barbers.push({ id: newBarber.id, name: this.newBarberName });
      this.newBarberName = "";
    },

    async removeBarber(barberId) {
      const db = getFirestore();
      await deleteDoc(doc(db, "barbers", barberId));
      this.barbers = this.barbers.filter(barber => barber.id !== barberId);
    }
  }
};
</script>

<style scoped>
.admin-container {
  padding: 20px;
}
.section {
  margin-bottom: 20px;
}
</style>
