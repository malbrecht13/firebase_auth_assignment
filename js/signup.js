// signup
const signupForm = document.querySelector('#signup_form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info
    const email = signupForm['signup_email'].value;
    const password = signupForm['signup_password'].value;
    const name = signupForm['signup_name'].value;
    const age = signupForm['signup_age'].value;

    //sign up user in Auth and add name and age to FireStore
    auth.createUserWithEmailAndPassword(email, password).then(
        (credential) => { 
            return db.collection('users').doc(credential.user.uid).set({
                name: name,
                age: age
            });
    }).then(() => {
        $("#signupmodal").modal('hide'); //hide the modal
        signupForm.reset(); //clear the form
        window.location.pathname = '/private.html'; //go to private page
    }).catch(err => {
        // display error message to user
        const alertBox = document.getElementById('sign_up_error_alert');
        alertBox.textContent = err.message;
        alertBox.style.display = "block";
    });
});