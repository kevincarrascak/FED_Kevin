// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
    // Zoek de hamburger button in de header
    const eersteStreepjesButton = document.querySelector("header ul li button[aria-label='menu']");

    // Als de knop niet gevonden is, stoppen we netjes
    if (!eersteStreepjesButton) {
        console.warn('Hamburger button not found: selector header ul li button[aria-label="menu"]');
        return;
    }

    // Klik-handler: toggle aria-expanded attribuut veilig
    eersteStreepjesButton.addEventListener('click', () => {
        const currentlyExpanded = eersteStreepjesButton.getAttribute('aria-expanded') === 'true';
        eersteStreepjesButton.setAttribute('aria-expanded', String(!currentlyExpanded));
    });

    // Optioneel: maak de knop ook toets-toegankelijk (Enter / Space)
    eersteStreepjesButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            eersteStreepjesButton.click();
        }
    });
});









document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("footer section:nth-of-type(1) button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const text = button.textContent.trim();

            if (text.endsWith("+")) {
                button.textContent = text.replace("+", "×");
            } else if (text.endsWith("×")) {
                button.textContent = text.replace("×", "+");
            }
        });
    });
});
