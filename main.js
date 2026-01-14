document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('.nav a').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        })
    })

    // Gallery modal
    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('modal-img');
    document.querySelectorAll('.gallery-grid img').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.dataset.large || img.src;
            modal.style.display = 'flex';
        })
    })
    document.querySelector('.modal-close').addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none' })

    // Filters
    document.querySelectorAll('.filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'))
            btn.classList.add('active')
            const cat = btn.dataset.cat
            document.querySelectorAll('#product-list .card').forEach(card => {
                card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none'
            })
        })
    })
})