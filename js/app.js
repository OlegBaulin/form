function showPopup(message) {
    const popup = document.querySelector('.popup');
    const popupMessage = document.querySelector('.popup__message');

    popupMessage.textContent = message;
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000); 
}

async function fakeLoginRequest(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = email === 'test@example.com' && password === 'password';
            if (success) {
                resolve({ success: true });
            } else {
                reject({ success: false, error: 'Неверный email или пароль' });
            }
        }, 1000);
    });
}

document.querySelector('.form-box').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fakeLoginRequest(email, password);
        if (response.success) {
            showPopup('Успешная аутентификация!');
        } else {
            showPopup('Ошибка аутентификации: ' + response.error);
        }
    } catch (error) {
        showPopup(error.error);
    }
});
