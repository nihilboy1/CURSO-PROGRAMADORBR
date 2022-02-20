import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, doc, setDoc, updateDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js"
const config = {
    apiKey: "AIzaSyACiHMJHx8SL4LWjTMhmohr2i8MF-qmXnU",
    authDomain: "database-a5577.firebaseapp.com",
    projectId: "database-a5577",
    storageBucket: "database-a5577.appspot.com",
    messagingSenderId: "981970102159",
    appId: "1:981970102159:web:fa885a9927aa6095454dfa"
}
const app = initializeApp(config)


const firestore = getFirestore()

const documento = doc(firestore, "users/09hULyOzsquVqJ8FSjnD")



// criar um documento primario e depois um documento secundário e depois uma collection com os dados passados
function criar(){
    const doc_data = {
        idade: "24",
        altura: 1.78
    }
    setDoc(documento, doc_data, /* {merge: true} */) // passando o merge como terceiro argumento, ele vai criar o local caso ele não exista e vai mesclar com o que ja tiver lá, caso o local exista.
}


// para fazer update num documento
function atualizar(){
    const doc_data = {
        idade: "27",
        altura: 1.78
    }
    updateDoc(documento, doc_data,).then(() => {
      console.log("Update realizado!")
    }).catch((error) => {
      console.log(error)
    })
}



// para ler um unico documento
async function ler(){
    let snapshot =  await getDoc(documento)
    if (snapshot.exists()){
        let data = snapshot.data()
        console.log(data)
    }
}
