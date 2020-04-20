// Controller
function logIn() {
    if (username === 'terje' && password === 'hemmelig'
        || username === 'per' && password === 'abc') {
        screen = 'main';
        errorMessage = null;
        isLoggedIn = true;
    } else {
        screen = 'login';
        errorMessage = 'Feil brukernavn og/eller passord. Prøv igjen.';
        isLoggedIn = false;
    }
    show();
}
