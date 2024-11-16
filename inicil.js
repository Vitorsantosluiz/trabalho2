document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const btn = document.getElementById('loginBtn');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('signupForm');

    btn.onclick = () => {
        modal.style.display = 'block';
    };

    span.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    form.onsubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const cpf = document.getElementById('cpf').value;
        const password = document.getElementById('password').value;

        const user = {
            name,
            email,
            phone,
            cpf,
            password
        };

        localStorage.setItem('user', JSON.stringify(user));
        alert('Seu cadastro foi realizado');

        window.location.href = 'profile.html';
    };

    if (window.location.pathname.endsWith('profile.html')) {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            document.getElementById('profileName').textContent = user.name;
            document.getElementById('profileEmail').textContent = user.email;
            document.getElementById('profilePhone').textContent = user.phone;
            document.getElementById('profileCpf').textContent = user.cpf;
        } else {
            alert('Nenhum usuário cadastrado');
            window.location.href = 'index2.html';
        }
    }
});
