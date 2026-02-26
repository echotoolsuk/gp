function toggle(element) {
    const content = element.nextElementSibling;
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
        element.classList.remove('active');
    } else {
        content.style.display = 'block';
        element.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.heading').forEach(function(heading) {
        if (heading.querySelector('.arrow')) {
            heading.addEventListener('click', function(e) {
                if (e.target.closest('a')) return;
                toggle(this);
            });
        }
    });
});
