<template>
  <div class="datepicker-container">
    <div class="date-list">
      <button v-for="date in availableDateList" :key="date"
        :class="['date-button', { selected: date === selectedDate }]" @click="selectDate(date)">
        {{ formatDate(date) }}
      </button>
    </div>

    <div v-if="selectedDate && availableTimes.length > 0" class="time-list">
      <p>Оберіть час:</p>
      <button v-for="time in availableTimes" :key="time" :class="['time-button', { selected: time === selectedTime }]"
        @click="selectTime(time)">
        {{ time }}
      </button>
    </div>

    <div v-else-if="selectedDate">
      <p>На цей день немає вільного часу.</p>
    </div>
  </div>
</template>

<script>
import {
  getFirestore,
  getDoc,
  getDocs,
  doc,
  collection,
  query,
  where,
} from 'firebase/firestore';

export default {
  props: {
    modelValue: String,
    selectedBarber: String,
    selectedService: String,
    serviceDurations: Object,
  },
  emits: ['update:modelValue'],
  data() {
    return {
      selectedDate: '',
      selectedTime: '',
      availableDateList: [],
      availableTimes: [],
      existingBookings: [],
    };
  },
  watch: {
    selectedBarber: 'generateDates',
    selectedService: 'generateDates',
    selectedDate: 'loadAvailableTimes',
  },
  mounted() {
    this.generateDates();
  },
  methods: {
    async generateDates() {
      this.availableDateList = [];
      this.selectedDate = '';
      this.selectedTime = '';
      this.availableTimes = [];

      if (!this.selectedBarber) return;

      const db = getFirestore();
      const docSnap = await getDoc(doc(db, 'barbers', this.selectedBarber));
      const barber = docSnap.data();

      if (!barber?.schedule) return;

      const today = new Date();

      for (let i = 0; i < 30; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        // ❗ ВАЖЛИВО: отримуємо день тижня в строго en-US форматі
        const weekday = currentDate.toLocaleDateString('en-US', {
          weekday: 'long',
          timeZone: 'UTC'
        });

        // ❗ Перевірка: чи існує ключ у розкладі
        if (Object.keys(barber.schedule).includes(weekday)) {
          this.availableDateList.push(currentDate.toISOString().split('T')[0]);
        }
      }
    },


    async loadAvailableTimes() {
      if (!this.selectedBarber || !this.selectedDate || !this.selectedService) {
        this.availableTimes = [];
        return;
      }

      const db = getFirestore();
      const barberSnap = await getDoc(doc(db, 'barbers', this.selectedBarber));
      const barber = barberSnap.data();
      const duration = this.serviceDurations[this.selectedService] || 30;

      const day = new Date(this.selectedDate).toLocaleDateString('en-US', {
        weekday: 'long',
      });

      const workHours = barber.schedule?.[day];
      if (!workHours) {
        this.availableTimes = [];
        return;
      }

      const [start, end] = workHours;
      const startMinutes = Number(start.split(':')[0]) * 60 + Number(start.split(':')[1]);
      const endMinutes = Number(end.split(':')[0]) * 60 + Number(end.split(':')[1]);

      const q = query(
        collection(db, 'bookings'),
        where('barberId', '==', this.selectedBarber),
        where('date', '==', this.selectedDate)
      );
      const snapshot = await getDocs(q);
      this.existingBookings = snapshot.docs.map(doc => doc.data());

      const isSlotTaken = (slotStart) => {
        const [sh, sm] = slotStart.split(':').map(Number);
        const slotStartTime = new Date(0, 0, 0, sh, sm);
        const slotEndTime = new Date(slotStartTime.getTime() + duration * 60000);

        return this.existingBookings.some(b => {
          if (!b.time || !b.duration) return false;
          const [bh, bm] = b.time.split(':').map(Number);
          const bookingStart = new Date(0, 0, 0, bh, bm);
          const bookingEnd = new Date(bookingStart.getTime() + b.duration * 60000);
          return slotStartTime < bookingEnd && slotEndTime > bookingStart;
        });
      };

      const now = new Date();
      const isToday = this.selectedDate === now.toISOString().split('T')[0];
      const nowMinutes = now.getHours() * 60 + now.getMinutes();

      const times = [];
      for (let mins = startMinutes; mins + duration <= endMinutes; mins += duration) {
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        const timeStr = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

        if (isToday && mins <= nowMinutes) continue;

        if (!isSlotTaken(timeStr)) {
          times.push(timeStr);
        }
      }

      this.availableTimes = times;
    },


    selectDate(date) {
      this.selectedDate = date;
      this.selectedTime = '';
      this.$emit('update:modelValue', '');
    },

    selectTime(time) {
      this.selectedTime = time;
      const dt = new Date(`${this.selectedDate}T${time}`);
      this.$emit('update:modelValue', dt.toISOString());
    },

    formatDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString('uk-UA', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
      });
    },
  },
};
</script>



<style scoped>
.datepicker-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.date-list,
.time-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.date-button,
.time-button {
  padding: 8px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  background-color: white;
}

.date-button.selected,
.time-button.selected {
  background-color: #007bff;
  color: white;
}
</style>
