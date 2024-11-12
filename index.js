function toggleDayNight() {
  document.body.classList.add('animation-ready');
  document.body.classList.toggle('dark');
  
  // Update text content based on day/night
  const isDark = document.body.classList.contains('dark');
  const title = document.querySelector('h1');
  const description = document.querySelector('p');
  const subtext = document.querySelector('pre');
  
  if (isDark) {
    title.textContent = 'locii';
    description.textContent = 'Man should have equal footing with the Gods.';
    subtext.textContent = 'Coming Soon.';
  } else {
    title.textContent = 'locii';
    description.textContent = 'The body is a machine for the mind.';
    subtext.textContent = 'Coming Soon.';
  }
}

// Start the animation cycle when page loads
document.addEventListener('DOMContentLoaded', () => {
  setInterval(toggleDayNight, 5000); // Run every 5 seconds
});
