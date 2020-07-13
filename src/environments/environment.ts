// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyB4kXka-Z-uiz1X60Vq-T3zOg7H8n6meD0",
    authDomain: "angular-fs-prod.firebaseapp.com",
    databaseURL: "https://angular-fs-prod.firebaseio.com",
    projectId: "angular-fs-prod",
    storageBucket: "angular-fs-prod.appspot.com",
    messagingSenderId: "291201278303",
    appId: "1:291201278303:web:cdddbb855aab593cea16ea"

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB4kXka-Z-uiz1X60Vq-T3zOg7H8n6meD0",
    authDomain: "angular-fs-prod.firebaseapp.com",
    databaseURL: "https://angular-fs-prod.firebaseio.com",
    projectId: "angular-fs-prod",
    storageBucket: "angular-fs-prod.appspot.com",
    messagingSenderId: "291201278303",
    appId: "1:291201278303:web:cdddbb855aab593cea16ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

*/
