import './style.css';

// Optional: expand/collapse for "read more" sections on detail pages
document.querySelectorAll('.expander-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const content = trigger.nextElementSibling;
    if (!content || !content.classList.contains('expander-content')) return;
    const isHidden = content.hasAttribute('hidden');
    content.toggleAttribute('hidden', !isHidden);
    trigger.textContent = isHidden ? 'Show less' : 'Read more';
  });
});
