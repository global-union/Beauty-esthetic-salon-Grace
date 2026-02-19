document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('reservationForm');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal-close');
    const modalBtn = document.querySelector('.modal-btn');

    // Validation Logic
    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], select[required]');

        inputs.forEach(input => {
            const group = input.closest('.form-group');
            if (!input.value.trim()) {
                group.classList.add('has-error');
                isValid = false;
            } else {
                group.classList.remove('has-error');
            }
        });

        // Email validation (simple pattern)
        const emailInput = document.getElementById('email');
        if (emailInput.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailInput.closest('.form-group').classList.add('has-error');
                isValid = false;
            }
        }

        // Phone validation (numeric only simple check)
        const phoneInput = document.getElementById('phone');
        if (phoneInput.value.trim()) {
            const phonePattern = /^[\d-]+$/;
            if (!phonePattern.test(phoneInput.value)) {
                phoneInput.closest('.form-group').classList.add('has-error');
                isValid = false;
            }
        }

        return isValid;
    }

    // Submit Event
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Show Modal
            modal.classList.add('is-open');
        } else {
            // Shake button or scroll to error? 
            // For now just focus first error
            const firstError = document.querySelector('.has-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // Modal Close Logic
    function closeModal() {
        modal.classList.remove('is-open');
    }

    closeBtn.addEventListener('click', closeModal);

    // Redirect on "Top" btn click
    modalBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Real-time validation clear
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const group = input.closest('.form-group');
            if (group && group.classList.contains('has-error')) {
                group.classList.remove('has-error');
            }
        });
    });

});
