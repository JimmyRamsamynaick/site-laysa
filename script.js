document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.link-btn');

    buttons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';

        setTimeout(() => {
            btn.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0)';
        }, 200 * (index + 1));

        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = `${e.clientX - rect.left - 7}px`;
            sparkle.style.top = `${e.clientY - rect.top - 7}px`;
            btn.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        });
    });
});

