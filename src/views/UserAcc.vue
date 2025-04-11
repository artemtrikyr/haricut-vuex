<template>
  <div class="user-acc">
    <div v-if="userData" class="user-info">
      <h2>Ласкаво просимо, {{ userData.firstName }} {{ userData.lastName }}!</h2>

      <div v-if="activeBooking">
        <h3>Ваше активне бронювання:</h3>
        <p><strong>Барбер:</strong> {{ activeBooking.barberName }}</p>
        <p><strong>Дата:</strong> {{ activeBooking.date }}</p>
        <p><strong>Час:</strong> {{ activeBooking.time }}</p>
        <p><strong>Послуга:</strong> {{ activeBooking.service }}</p>
        <button @click="cancelBooking" class="cancel-button">Скасувати бронювання</button>
      </div>
      <div v-else>
        <p>У вас немає активних бронювань.</p>
      </div>

      <button @click="logout" class="logout-button">Вийти з аккаунту</button>
    </div>

    <div v-else>
      <p>Завантаження інформації користувача...</p>
    </div>


    <div class="menu">
      <button @click="activeTab = 'history'" :class="{ active: activeTab === 'history' }">Історія</button>
      <button @click="activeTab = 'settings'" :class="{ active: activeTab === 'settings' }">Налаштування</button>
      <button @click="activeTab = 'booking'" :class="{ active: activeTab === 'booking' }">Створити бронювання</button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === 'history'">
        <p>Тут буде історія ваших відвідувань...</p>
      </div>
      <div v-if="activeTab === 'settings'">
        <p>Налаштування аккаунту (ім’я, телефон, email)...</p>
      </div>
      <div v-if="activeTab === 'booking'">
        <booking-form ref="bookingForm" :userData="userData" @bookingCreated="fetchActiveBooking" />
      </div>
    </div>

  </div>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import BookingForm from '@/components/BookingForm.vue';

export default {
  name: 'UserAcc',
  components: {
    BookingForm,
  },
  data() {
    return {
      userData: null,
      activeBooking: null,
      activeBookingId: null,
      activeTab: 'booking',
    };
  },
  async mounted() {
    const auth = getAuth();
    const db = getFirestore();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          this.userData = userDoc.data();
        }
        await this.fetchActiveBooking();
      } else {
        this.$router.push('/auth');
      }
    });
  },
  methods: {
    async logout() {
      const auth = getAuth();
      await signOut(auth);
      this.$router.push('/auth');
    },
    async cancelBooking() {
      if (this.activeBookingId) {
        const db = getFirestore();
        await deleteDoc(doc(db, 'bookings', this.activeBookingId));
        this.activeBooking = null;
        this.activeBookingId = null;

        // Оновити слоти в BookingForm після скасування
        // this.$refs.bookingForm?.refreshAvailableSlots();
      }
    },
    async fetchActiveBooking() {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, 'bookings'),
        where('userId', '==', user.uid),
        where('status', '==', 'active')
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const bookingDoc = snapshot.docs[0];
        this.activeBooking = bookingDoc.data();
        this.activeBookingId = bookingDoc.id;
      } else {
        this.activeBooking = null;
        this.activeBookingId = null;
      }
    }
  }
};
</script>


<style scoped>
.user-acc {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.user-info {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.logout-button,
.cancel-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #a08582;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.logout-button:hover,
.cancel-button:hover {
  background-color: #8e6d68;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.menu button {
  padding: 10px 15px;
  border: 1px solid #ccc;
  background: white;
  border-radius: 6px;
  cursor: pointer;
}

.menu .active {
  background-color: #a08582;
  color: white;
}

.tab-content {
  padding: 20px;
  background: #f3f3f3;
  border-radius: 8px;
}
</style>