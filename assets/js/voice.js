document.addEventListener('DOMContentLoaded', () => {

    const filterBtns = document.querySelectorAll('.filter-btn');
    const reviewItems = document.querySelectorAll('.voice-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('is-active'));
            // Add active class to clicked button
            btn.classList.add('is-active');

            const filterValue = btn.getAttribute('data-filter');

            reviewItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'flex';
                    // Trigger fade in animation re-run? 
                    // Simple display toggle usually works, but for animation we might want to reset opacity
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

});
