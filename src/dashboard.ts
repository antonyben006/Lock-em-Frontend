import {app, auth, logOut} from "./utils/firebase";
import {collection, getFirestore, onSnapshot, query, where, deleteDoc, addDoc, doc} from "firebase/firestore";


let res;
let uid = new Promise<string>((resolve) => res = resolve);

const firestore = getFirestore(app);
const getCollection = async () => collection(firestore, await uid);

let rows = []

auth.onAuthStateChanged((user) => {
    if (!user || !localStorage.getItem("key"))
        window.location.replace("/");
    else res(user.uid);
});

document.getElementById("logoutButton").addEventListener("click", logOut);
document.getElementById("addForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const url = (document.getElementById("websiteUrl") as HTMLInputElement).value;
    const uname = (document.getElementById("userName") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    await addDoc(await getCollection(), {url, uname, password})

});

const table = document.getElementById("contentTable");

function getRow(doc) {
    return `<tr>
          <th scope="row"><input type="url" readonly value="${doc.get("url")}"></th>
          <td><input type="text" readonly value="${doc.get("uname")}"></td>
          <td><input type="password" id="${doc.id}-pss" readonly value="${doc.get("password")}" class="me-1">
            <button type="button" class="btn btn-primary btn-sm me-1"
               onclick="navigator.clipboard.writeText(document.getElementById('${doc.id}-pss').value);"
            >Copy</button>
            <a type="button" class="btn btn-secondary btn-sm text-decoration-none" 
            href="${doc.get("url")}" target="_blank">Open</a>
          </td>
          <td><button type="button" class="btn btn-danger" id="${doc.id}">Delete</button></td>
        </tr>`;
}

async function deleteEntry(ref) {
    console.log("Deleting...");
    await deleteDoc(ref);
}

async function init() {
    table.innerHTML = "";

    onSnapshot(query(await getCollection(), where("url", "!=", null)), (q) => {
        q.docChanges({}).forEach((change) => {
            if (change.type == "added")
                rows.push({ref: change.doc.ref, data: getRow(change.doc), id: change.doc.id});
            else
                rows = rows.filter(({id}) => id != change.doc.id);
        });

        table.innerHTML = rows.map(({data}) => data).join("\n");

        rows.forEach(({ref, id}) =>
            document.getElementById(id).addEventListener("click", () => deleteEntry(ref)));
    })
}

init().then();
