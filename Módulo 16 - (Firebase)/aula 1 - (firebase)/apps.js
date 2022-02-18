const firebaseConfig = {
    apiKey: "AIzaSyCq7iz98IOaDq9CevnrirHwRMNrfj8VoLI",
    authDomain: "colegio-2c10e.firebaseapp.com",
    projectId: "colegio-2c10e",
    storageBucket: "colegio-2c10e.appspot.com",
    messagingSenderId: "604165584622",
    appId: "1:604165584622:web:04c652a53a1c98a80765ff",
    measurementId: "G-DDWSVB73BC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore()
const AUTH = firebase.auth()

// CRIAR USUÁRIOS COM EMAIL E SENHA PADRÃO
function criar_user(email, senha){
    AUTH.createUserWithEmailAndPassword(email, senha).then((user) => {
      console.log(user)})
      .catch((error) => {
      console.log(error)
    })
}



// CHECAR USUÁRIOS LOGADOS
/*
console.log(AUTH.currentUser)
*/


// SUPOSTAMENTE FAZ UM LOGIN
/*
function log_in(){
  let email = "samuelseve1@gmail.com"
  let senha = "accacc2"

  AUTH.signInWithEmailAndPassword(email,senha).then((log) => {
    console.log(AUTH.currentUser)
  }).catch((error) => {
    console.log("Erro!")
  })
}
*/

// FAZ ALGO QUANDO O ESTADO DE LOGIN DO USUÁRIO MUDA
/*
AUTH.onAuthStateChanged((user) => {
  if (user){
    console.log(user)
  }
  else {
    console.log("Ninguém logado!")
  }
})
*/

// DESLOGA O USUÁRIO
/*
function log_out(){
  AUTH.signOut().then(() => {
    console.log("deslogado!")
  }).catch((error) => {
    console.log(error)
  })
}
*/









