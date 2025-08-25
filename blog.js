document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            blogPosts.forEach(post => {
                if (filter === 'all' || post.dataset.category === filter) {
                    post.classList.remove('hidden');
                    post.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    post.classList.add('hidden');
                }
            });
        });
    });
    
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === '下一页 →') {
                alert('更多文章正在准备中...');
                return;
            }
            
            pageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    const postLinks = document.querySelectorAll('.post-link');
    postLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('文章详情页正在开发中...');
        });
    });
    
    blogPosts.forEach((post, index) => {
        post.style.animationDelay = `${index * 0.1}s`;
    });
});