
//logout
const logoutBtn = document.querySelector('#signout_btn');

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    //sign the user out
    auth.signOut().then(
        () => {
            window.location.pathname = '/';  
        }
    ).catch((err) => console.error(err));
})
