document.addEventListener('DOMContentLoaded', () => {

    // --- Tabs ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetId) {
        // Activate Btn
        tabBtns.forEach(btn => {
            if (btn.dataset.tab === targetId) {
                btn.classList.add('is-active');
            } else {
                btn.classList.remove('is-active');
            }
        });

        // Activate Content
        tabContents.forEach(content => {
            if (content.id === targetId) {
                content.classList.add('is-active');
            } else {
                content.classList.remove('is-active');
            }
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });


    // --- Tag Navigation ---
    const tagBtns = document.querySelectorAll('.tag-btn');

    tagBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;

            // Switch tab
            switchTab(targetId);

            // Scroll to section
            const targetHeader = document.querySelector(`#${targetId} .section-header`);
            if (targetHeader) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const offsetPosition = targetHeader.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
