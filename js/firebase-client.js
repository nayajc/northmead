// ============================================================
// Firebase client — replace with your project config
// Firebase Console → Project Settings → General → Your apps
// ============================================================
const firebaseConfig = {
  apiKey:            'AIzaSyD2bo6cGHT_FlA7n5PccpiPAPSDBFn3bnc',
  authDomain:        'japancarsales.firebaseapp.com',
  projectId:         'japancarsales',
  storageBucket:     'japancarsales.firebasestorage.app',
  messagingSenderId: '1021970962263',
  appId:             '1:1021970962263:web:1a92c99a0c49127eb75012',
};

firebase.initializeApp(firebaseConfig);

const auth      = firebase.auth();
const firestore = firebase.firestore();
const storage   = firebase.storage();

async function uploadImage(file, vehicleId) {
  const ext  = file.name.split('.').pop().toLowerCase();
  const path = `vehicles/${vehicleId}/${Date.now()}.${ext}`;
  const ref  = storage.ref(path);
  await ref.put(file, { contentType: file.type });
  return await ref.getDownloadURL();
}

async function deleteImage(url) {
  try {
    await storage.refFromURL(url).delete();
  } catch (e) {
    console.warn('Image delete skipped:', e.message);
  }
}
