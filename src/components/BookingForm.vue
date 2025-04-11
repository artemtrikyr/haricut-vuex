<template>
    <div class="booking-section">
        <h2>Забронювати послугу</h2>

        <!-- Барбери -->
        <div>
            <h3>Оберіть барбера:</h3>
            <div class="barber-cards">
                <div v-for="barber in barbers" :key="barber.id"
                    :class="['barber-card', { selected: selectedBarber === barber.id }]"
                    @click="selectBarber(barber.id)">
                    <h4>{{ barber.barberName }}</h4>
                    <p><strong>Досвід:</strong> {{ barber.experience }} років</p>
                </div>
            </div>
        </div>

        <!-- Послуги -->
        <div v-if="selectedBarber && filteredServices.length">
            <h3>Послуги:</h3>
            <div class="service-cards">
                <div v-for="service in filteredServices" :key="service.name"
                    :class="['service-card', { selected: selectedService?.name === service.name }]"
                    @click="selectService(service)">
                    <h4>{{ service.name }}</h4>
                    <p><strong>Опис:</strong> {{ service.description }}</p>
                    <p><strong>Ціна:</strong> {{ service.price }} грн</p>
                    <p><strong>Тривалість:</strong> {{ service.duration }} хв</p>
                </div>
            </div>
        </div>

        <!-- Дата і час -->
        <div v-if="selectedService">
            <h3>Дата та час:</h3>
            <DatePicker v-model="selectedDateTime" :selectedBarber="selectedBarber"
                :selectedService="selectedService.name" :serviceDurations="serviceDurations" />
        </div>

        <!-- Повідомлення -->
        <div v-if="successMessage" class="success-message">
            {{ successMessage }}
        </div>

        <button @click="book" :disabled="!canBook">Підтвердити бронювання</button>
    </div>
</template>


<script>
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    addDoc,
    query,
    where
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import DatePicker from './DatePicker.vue';

export default {
    components: { DatePicker },
    data() {
        return {
            userData: null,
            barbers: [],
            allServices: [],
            selectedBarber: "",
            selectedService: null,
            selectedDateTime: "",
            serviceDurations: {},
            successMessage: ""
        };
    },
    computed: {
        canBook() {
            return this.selectedBarber && this.selectedService && this.selectedDateTime;
        },
        filteredServices() {
            if (!this.selectedBarber) return [];
            const barber = this.barbers.find(b => b.id === this.selectedBarber);
            if (!barber?.services?.length) return [];

            return this.allServices.filter(service =>
                barber.services.includes(service.name)
            );
        }
    },
    watch: {
        selectedBarber: 'fetchServicesForBarber'
    },
    async mounted() {
        const auth = getAuth();
        const db = getFirestore();

        // Отримуємо барберів
        const barberSnap = await getDocs(collection(db, "barbers"));
        this.barbers = barberSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Отримуємо всі послуги
        const servicesSnap = await getDocs(collection(db, "services"));
        this.allServices = servicesSnap.docs.map(doc => doc.data());

        // Створюємо карту тривалостей
        for (const service of this.allServices) {
            this.serviceDurations[service.name] = service.duration;
        }

        // Користувач
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                this.userData = userDoc.data();
            }
        });
    },
    methods: {
        selectBarber(barberId) {
            this.selectedBarber = barberId;
            this.selectedService = null;
            this.selectedDateTime = "";
        },

        async fetchServicesForBarber() {
            this.selectedService = null;
            this.selectedDateTime = "";
        },

        selectService(service) {
            this.selectedService = service;
        },

        async book() {
            const db = getFirestore();
            const auth = getAuth();
            const user = auth.currentUser;
            if (!user) return;

            const selectedDateObj = new Date(this.selectedDateTime);
            const selectedDate = selectedDateObj.toISOString().split('T')[0];
            const selectedTime = selectedDateObj.toTimeString().slice(0, 5);

            const activeBookingQuery = query(
                collection(db, "bookings"),
                where("userId", "==", user.uid),
                where("status", "==", "active")
            );
            const activeBookingSnap = await getDocs(activeBookingQuery);
            if (!activeBookingSnap.empty) {
                alert("У вас вже є активне бронювання.");
                return;
            }

            const barberDoc = await getDoc(doc(db, "barbers", this.selectedBarber));
            const barberData = barberDoc.data();
            const barberName = barberData?.barberName;

            await addDoc(collection(db, "bookings"), {
                userId: user.uid,
                barberId: this.selectedBarber,
                barberName,
                service: this.selectedService.name,
                date: selectedDate,
                time: selectedTime,
                duration: this.selectedService.duration,
                status: 'active'
            });

            this.successMessage = "Бронювання успішно створено!";
            this.selectedBarber = this.selectedService = this.selectedDateTime = "";

            setTimeout(() => {
                this.successMessage = "";
            }, 5000);

            this.$emit('bookingCreated');
        }
    }
};
</script>




<style scoped>
.booking-section {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.booking-section h3 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
}

.booking-section div {
    margin-bottom: 15px;
}

.booking-section label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
}

.booking-section select,
.booking-section input[type="date"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
}

.booking-section select:focus,
.booking-section input[type="date"]:focus {
    border-color: #007bff;
    outline: none;
}

.booking-section button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.booking-section button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.booking-section button:hover:enabled {
    background-color: #0056b3;
}

.booking-section button:focus {
    outline: none;
}

.booking-section select,
.booking-section input {
    background-color: #fff;
    transition: background-color 0.3s;
}

.booking-section select option {
    padding: 10px;
}

.booking-section button:focus,
.booking-section select:focus,
.booking-section input:focus {
    background-color: #e7f1ff;
}

.success-message {
    background-color: #d4edda;
    color: #155724;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
}

.service-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 10px;
}

.service-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    background-color: #fff;
    cursor: pointer;
    transition: 0.3s;
}

.service-card:hover {
    background-color: #f5f5f5;
}

.service-card.selected {
    border-color: #007bff;
    background-color: #e7f1ff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
}

.barber-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}

.barber-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.barber-card:hover {
  background-color: #f5f5f5;
}

.barber-card.selected {
  border-color: #007bff;
  background-color: #e7f1ff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
}

</style>