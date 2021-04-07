// sign in
const signinForm = document.querySelector('#signin_form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signinForm['signin_email'].value;
    const password = signinForm['signin_password'].value;

    auth.signInWithEmailAndPassword(email, password).then(
        () => {
            $("#signin_modal").modal('hide');
            signinForm.reset();
            window.location.pathname = './private.html';
        }
    ).catch(err => {
        const alertBox = document.getElementById('sign_in_error_alert');
        alertBox.textContent = err.message;
        alertBox.style.display = "block";
    });
    
})