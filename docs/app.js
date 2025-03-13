document.addEventListener('DOMContentLoaded', (event) => {
    
    // Cookies
    const now = new Date();
    document.cookie = `now=${now}; SameSite=None; Secure`;
    document.cookie = 'course=WebProgramming2025; SameSite=None; Secure';

    document.getElementById('old-cookies').innerText = document.cookie

    // Look-style cookies / Cookie Store
    const cookieStore = window.cookieStore

    cookieStore
    .set({name: 'usernamme', value: 'scaredninja1'})
    .then(
        () => {console.log('Cookie set using CookieStore');}, 
    (reason) => {
        console.error('Unable to set cookie: ' + reason);
    }
    );
    cookieStore.get('username').then(
        (obj) => {
            const elt = document.getElementById('new-cookies');
            elt.innerText = `${obj.name}=${obj.value}`;
        },
        (reason) => { console.error('Unable to read cookie: ' + reason)}
    );


})



