document.addEventListener('DOMContentLoaded', () => {
    console.log('IT Chapter Two - Landing Page Loaded');

    // Check if the screen width is less than 1024px (Mobile/Tablet)
    if (window.innerWidth < 1024) {
        document.body.innerHTML = `
            <div style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                text-align: center;
                background-color: black;
                color: white;
                font-family: 'Poppins', sans-serif;
                padding: 20px;
            ">
                <h2>This website is only available on Laptop/Desktop.<br>Please visit on a larger screen.</h2>
            </div>
        `;
        return; // Stop executing the rest of the script
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
