import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const app = createApp(App);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
  } else {
    console.log('No user logged in');
  }
});

app.use(router).mount('#app');
