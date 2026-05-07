/* Jarrett Nance — Portfolio site JS */
(function () {
    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            const open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // Highlight active nav link based on current page filename
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-nav a').forEach(function (a) {
        const href = a.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            a.classList.add('is-active');
            a.setAttribute('aria-current', 'page');
        }
    });

    // Contact form -> mailto fallback (no backend)
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = (form.querySelector('#name').value || '').trim();
            const email = (form.querySelector('#email').value || '').trim();
            const message = (form.querySelector('#message').value || '').trim();
            const subject = encodeURIComponent('Portfolio inquiry from ' + (name || 'a visitor'));
            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n\n' +
                message
            );
            const status = form.querySelector('.form-help');
            if (status) {
                status.textContent = 'Opening your email client…';
            }
            window.location.href = 'mailto:jnance727@gmail.com?subject=' + subject + '&body=' + body;
        });
    }

    // Set current year in footer
    const yr = document.querySelector('.year');
    if (yr) yr.textContent = new Date().getFullYear();
})();
