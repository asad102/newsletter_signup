
document.addEventListener('DOMContentLoaded', () =>{
    const article = document.getElementById('myarticle');
    const form = document.getElementById('formemail');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const userEmailSpan = document.getElementById('user-email');
    const successMessage = document.getElementById('success-msg');
    const dismissBtn = document.getElementById('dismiss-btn');
    console.log(successMessage);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        // console.log(emailError);
        // console.log(successMessage);
        emailError.textContent = '';
        // successMessage.textContent = '';

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
          emailError.textContent = 'Email is required.';
        } else if (!emailPattern.test(email)) {
          emailError.textContent = 'valid email required.';
        } else {
          // Hide the form and display success message
        //   console.log(article);
          article.classList.add('hidden');
          console.log(article);
          successMessage.classList.remove('hidden');
          console.log(successMessage);
          // Display the success message and insert the email
          successMessage.classList.add('flex','flex-col');
          userEmailSpan.textContent = email;
          console.log(userEmailSpan);
        }

    });
    dismissBtn.addEventListener('click', () => {
        successMsg.classList.add('hidden');
      });
});