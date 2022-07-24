import {app, auth} from "./utils/firebase";
import {getFunctions, httpsCallable} from "firebase/functions";

let res;
let email = new Promise((resolve) => res = resolve);

const submit = <HTMLButtonElement>document.getElementById("validate");
const textBoxes = ["first", "second", "third", "fourth", "fifth", "sixth"]
    .map((id) => (document.getElementById(id) as HTMLInputElement));

auth.onAuthStateChanged((user) => {
    if (!user)
        window.location.replace("/");
    else
        httpsCallable(getFunctions(app), "sendOtp")().then(() => res(user.email));
});


textBoxes.forEach((txt) =>
    txt.addEventListener("paste", (e) => {
        const pasted = e.clipboardData.getData('Text').split("").reverse();
        textBoxes.forEach((text) => text.value = pasted.pop());
}));

document.getElementById("validate").addEventListener("click", async () => {
    submit.disabled = true;
    await email;

    const otp = textBoxes.map((txt) => txt.value).join("");

    const result = await httpsCallable(getFunctions(app), "verifyOtp")({otp}).catch(() => null);

    if (!result || result.key)
        window.alert("Incorrect OTP");
    else {
        localStorage.setItem("key", result.key);
        window.location.href = "/dashboard";
    }

    submit.disabled = false;
});
