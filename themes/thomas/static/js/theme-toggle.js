// Theme Toggle Functionality
// This script handles the interactive behavior of switching between light and dark themes

document.addEventListener('DOMContentLoaded', function() {
	const themeToggle = document.getElementById('theme-toggle');
	const storageKey = 'site-theme';
	
	// This function reads what theme is currently active from the HTML element
	function getCurrentTheme() {
		return document.documentElement.getAttribute('data-theme') || 'dark';
	}
	
	// This function applies a new theme and saves the user's preference
	function setTheme(theme) {
		// Update the HTML data attribute - this is what triggers the CSS changes
		document.documentElement.setAttribute('data-theme', theme);
		
		// Save the user's choice so we remember it next time they visit
		localStorage.setItem(storageKey, theme);
		
		// Update the button's accessibility label for screen readers
		const newLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
		themeToggle.setAttribute('aria-label', newLabel);
		
		// Optional: Log the change for debugging (you can remove this in production)
		console.log('Theme changed to:', theme);
	}
	
	// This handles what happens when someone clicks the theme toggle button
	themeToggle.addEventListener('click', function() {
		const currentTheme = getCurrentTheme();
		
		// Simple toggle logic: if it's dark, switch to light; if it's light, switch to dark
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		
		setTheme(newTheme);
	});
	
	// Set up the initial accessibility label when the page loads
	const currentTheme = getCurrentTheme();
	const initialLabel = currentTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
	themeToggle.setAttribute('aria-label', initialLabel);
	
	// Optional: Add keyboard support (press 't' to toggle theme)
	document.addEventListener('keydown', function(event) {
		// Check if 't' key is pressed and no modifier keys are held
		if (event.key === 't' && !event.ctrlKey && !event.metaKey && !event.altKey) {
			// Only trigger if we're not typing in an input field
			if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
				const currentTheme = getCurrentTheme();
				const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
				setTheme(newTheme);
			}
		}
	});
});
