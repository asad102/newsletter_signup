
document.addEventListener('DOMContentLoaded', () =>{
    const article = document.getElementById('myarticle');
    const form = document.getElementById('formemail');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const userEmailSpan = document.getElementById('user-email');
    const successMessage = document.getElementById('success-msg');
    const dismissBtn = document.getElementById('dismiss-btn');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        emailError.textContent = '';
        // successMessage.textContent = '';

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
          emailError.textContent = 'Email is required.';
        } else if (!emailPattern.test(email)) {
          emailError.textContent = 'valid email required.';
        } else {
          article.classList.add('hidden');
          successMessage.classList.remove('hidden');
          // Display the success message and insert the email
          successMessage.classList.add('flex','flex-col');
          userEmailSpan.textContent = email;
          console.log(userEmailSpan);
        }

    });
    dismissBtn.addEventListener('click', () => {
        window.history.back();
    });
});