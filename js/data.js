
function displayNameAndAge(name, age) {
    const alert = document.getElementById('signed_in_alert');
    alert.textContent = `Welcome, ${name}. You are ${age} years old. This proves your data is in the Firestore database!`;
    alert.style.display = 'block';
}

auth.onAuthStateChanged(user => {
    if(user) {
        db.collection('users').doc(user.uid).get().then(
            doc => {
                displayNameAndAge(doc.data().name, doc.data().age)
            }
        ).catch(err => console.error(err));
    }
})