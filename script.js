/**
 * Digital Portfolio - Lương Thị Ánh Hồng
 * MSV: 25001572 | Công nghệ sinh học
 * Trường Đại học Khoa học Tự nhiên, ĐHQGHN
 */

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');

  function activateSection(targetId) {
    sections.forEach(s => s.classList.remove('active'));
    navItems.forEach(n => n.classList.remove('active'));

    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.add('active');

    const targetNav = document.getElementById('nav-' + targetId);
    if (targetNav) targetNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Pause the video player if we switch away from the practices tab
    if (targetId !== 'practices') {
      const videoPlayer = document.querySelector('.custom-video');
      if (videoPlayer && !videoPlayer.paused) {
        videoPlayer.pause();
      }
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const href = item.getAttribute('href');
      if (href && href.startsWith('#')) {
        activateSection(href.substring(1));
      }
    });
  });

  // Keyboard navigation (arrow keys)
  const sectionIds = ['intro', 'practices', 'reflection', 'skills', 'conclusion'];
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const activeSection = document.querySelector('.section.active');
    if (!activeSection) return;
    
    const currentIdx = sectionIds.indexOf(activeSection.id);
    if (currentIdx === -1) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const nextIdx = Math.min(currentIdx + 1, sectionIds.length - 1);
      activateSection(sectionIds[nextIdx]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prevIdx = Math.max(currentIdx - 1, 0);
      activateSection(sectionIds[prevIdx]);
    }
  });

  // Biotech themed console greeting
  console.log('%c🧬 Digital Portfolio Lương Thị Ánh Hồng | Công nghệ sinh học | HUS-ĐHQGHN', 
    'color: #10b981; font-size: 14px; font-family: sans-serif; font-weight: bold;');
  console.log('%c🧪 Biotech Digital Dashboard initialized successfully.', 'color: #d946ef; font-family: sans-serif;');
});
