# Firebase Setup Guide — Northmead Cardealer

## 1. Create Firebase Project

1. Go to https://console.firebase.google.com
2. Click **Add Project** → name it `northmead-cardealer`
3. Enable Google Analytics (optional)

---

## 2. Enable Services

### Authentication
- Firebase Console → **Authentication** → Get Started
- Sign-in method → **Email/Password** → Enable

### Firestore Database
- Firebase Console → **Firestore Database** → Create database
- Start in **production mode** (we'll add rules below)
- Choose region closest to Australia: `asia-northeast1` (Tokyo) or `australia-southeast1`

### Storage
- Firebase Console → **Storage** → Get Started
- Start in production mode
- Same region as Firestore

---

## 3. Get Config Keys

Firebase Console → Project Settings (gear icon) → **General** → Your apps

Click **Add app** → Web → Register app name → Copy the config object:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

Paste these values into `js/firebase-client.js`.

---

## 4. Firestore Security Rules

Firebase Console → Firestore Database → **Rules** tab → Replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isAdmin() {
      return request.auth != null &&
        exists(/databases/$(database)/documents/admin_users/$(request.auth.uid));
    }

    match /vehicles/{vehicleId} {
      allow read: if resource.data.status in ['available', 'reserved'] || isAdmin();
      allow create, update, delete: if isAdmin();
    }

    match /admin_users/{userId} {
      allow read: if isAdmin();
      allow create, delete: if isAdmin();
    }
  }
}
```

Click **Publish**.

---

## 5. Storage Security Rules

Firebase Console → Storage → **Rules** tab → Replace with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /vehicles/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null &&
        firestore.exists(/databases/(default)/documents/admin_users/$(request.auth.uid));
    }
  }
}
```

Click **Publish**.

---

## 6. Add First Admin

1. Firebase Console → Authentication → Users → **Add user**
2. Enter email + password for the first admin
3. Copy the **User UID** shown in the user list
4. Go to Firestore Database → **+ Start collection** → ID: `admin_users`
5. Add first document:
   - Document ID: `<paste User UID>`
   - Fields:
     - `email` (string): `admin@example.com`
     - `full_name` (string): `Admin Name`
     - `created_at` (string): `2026-06-12`

After this, additional admins can be added from the Admin Portal UI.

---

## 7. Firestore Indexes (required for inventory query)

Firebase Console → Firestore → **Indexes** → Add composite index:

| Collection | Field 1 | Field 2 | Field 3 |
|------------|---------|---------|---------|
| `vehicles` | `status` Ascending | `featured` Descending | `created_at` Descending |

Or just deploy and click the auto-generated index link from the browser console error.
