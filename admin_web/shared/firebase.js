// Tüm admin sayfalarının ortak Firebase bağlantısı. Her sayfa bunu import
// ederse firebaseConfig tek yerde durur (lib/firebase_options.dart -> web ile aynı proje).
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { syncPastBookings } from "./bookingStatus.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Her admin sayfası açıldığında, tarihi geçmiş 'upcoming' randevuları
// gerçekten 'past' yapar (bkz. shared/bookingStatus.js).
syncPastBookings(db);
