<template>
  <div class="auth">
    <div class="auth-container">
      <div class="auth-buttons">
        <button @click="isLogin = true" :class="{ active: isLogin }">Вхід</button>
        <button @click="isLogin = false" :class="{ active: !isLogin }">Реєстрація</button>
      </div>

      <form @submit.prevent="handleAuth">
        <!-- Ім'я та прізвище -->
        <input v-if="!isLogin" v-model="firstName" type="text" placeholder="Ім'я" required />
        <input v-if="!isLogin" v-model="lastName" type="text" placeholder="Прізвище" required />

        <!-- Номер телефону -->
        <input v-if="!isLogin" v-model="phoneNumber" type="tel" placeholder="+380501234567" required />

        <!-- Електронна пошта та пароль -->
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Пароль" required />
        <input v-if="!isLogin" v-model="confirmPassword" type="password" placeholder="Підтвердження пароля" required />

        <button type="submit">
          {{ isLogin ? "Увійти" : "Зареєструватися" }}
        </button>
      </form>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, query, collection, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      errorMessage: ""
    };
  },

  methods: {
    async handleAuth() {
      this.errorMessage = "";
      const auth = getAuth();
      const db = getFirestore();

      if (this.isLogin) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
          const user = userCredential.user;

          //Отримуємо роль користувача з Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));

          if (userDoc.exists()) {
            const userRole = userDoc.data().role;
            
            //Перенаправлення згідно ролі
            if (userRole === "user") {
              this.$router.push("/user");
            } else if (userRole === "barber") {
              this.$router.push("/barber");
            } else if (userRole === "admin") {
              this.$router.push("/admin");
            } else {
              this.$router.push("/"); // якщо щось не так, ведемо на головну
            }
          } else {
            this.errorMessage = "Помилка: роль не знайдена";
          }
        } catch (error) {
          this.handleFirebaseError(error);
        }
      } else {
        if (this.password !== this.confirmPassword) {
          this.errorMessage = "Паролі не співпадають";
          return;
        }

        try {
          // 🔍 Перевірка чи існує телефон в базі
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("phoneNumber", "==", this.phoneNumber));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            this.errorMessage = "Користувач з таким номером телефону вже існує";
            return;
          }

          const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
          const user = userCredential.user;

          await updateProfile(user, {
            displayName: `${this.firstName} ${this.lastName}`
          });

          await setDoc(doc(db, "users", user.uid), {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            role: "user", // ПРИ РЕЄСТРАЦІЇ ВСІ ОТРИМУЮТЬ РОЛЬ "user"
            createdAt: new Date()
          });

          this.$router.push("/user"); // Нових користувачів ведемо на /user
        } catch (error) {
          this.handleFirebaseError(error);
        }
      }
    },

    handleFirebaseError(error) {
      switch (error.code) {
        case "auth/user-not-found":
          this.errorMessage = "Користувача не знайдено";
          break;
        case "auth/wrong-password":
          this.errorMessage = "Невірний пароль";
          break;
        case "auth/email-already-in-use":
          this.errorMessage = "Ця електронна пошта вже зареєстрована";
          break;
        default:
          this.errorMessage = error.message;
          break;
      }
    }
  }
};
</script>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.auth-container {
  width: 320px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.auth-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.auth-buttons button {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
}

.auth-buttons .active {
  background-color: #a08582;
  color: white;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button[type="submit"],
button[type="button"] {
  background-color: #a08582;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #8e6d68;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
