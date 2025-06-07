document.addEventListener('DOMContentLoaded', () => {
    const reservationsTab = document.getElementById('reservationsTab');
    const guestsTab = document.getElementById('guestsTab');
    const reservationsContent = document.getElementById('reservationsContent');
    const guestsContent = document.getElementById('guestsContent');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const sidebar = document.getElementById('sidebar');

    // Function to handle tab switching
    const switchTab = (activeTab, inactiveTab, activeContent, inactiveContent) => {
        // Update button styles
        activeTab.classList.add('bg-teal-600', 'text-white');
        activeTab.classList.remove('text-gray-400', 'hover:bg-gray-700');
        inactiveTab.classList.remove('bg-teal-600', 'text-white');
        inactiveTab.classList.add('text-gray-400', 'hover:bg-gray-700');

        // Toggle content visibility
        activeContent.classList.remove('hidden');
        inactiveContent.classList.add('hidden');
    };

    // Event listeners for tab buttons
    reservationsTab.addEventListener('click', () => {
        switchTab(reservationsTab, guestsTab, reservationsContent, guestsContent);
    });

    guestsTab.addEventListener('click', () => {
        switchTab(guestsTab, reservationsTab, guestsContent, reservationsContent);
    });

    // Initial state: ensure reservations tab is active on load
    switchTab(reservationsTab, guestsTab, reservationsContent, guestsContent);

    // Hamburger menu functionality for mobile
    hamburgerIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile (optional but good for UX)
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768 && !sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });
});
