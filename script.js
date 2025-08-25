document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.about-card, .project-card, .blog-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId && document.querySelector('.article-title')) {
        const articles = {
            '1': {
                title: '探索现代前端框架的演进',
                date: '2025年1月25日',
                readTime: '8分钟阅读',
                content: '文章内容已在HTML中定义'
            },
            '2': {
                title: '简约设计的力量',
                date: '2025年1月20日',
                readTime: '5分钟阅读',
                content: '简约设计的内容...'
            },
            '3': {
                title: '远程工作的平衡艺术',
                date: '2025年1月15日',
                readTime: '6分钟阅读',
                content: '远程工作的内容...'
            },
            '4': {
                title: 'TypeScript最佳实践',
                date: '2025年1月10日',
                readTime: '10分钟阅读',
                content: 'TypeScript的内容...'
            },
            '5': {
                title: '性能优化的系统化方法',
                date: '2025年1月5日',
                readTime: '7分钟阅读',
                content: '性能优化的内容...'
            },
            '6': {
                title: '新年新起点',
                date: '2025年1月1日',
                readTime: '4分钟阅读',
                content: '新年展望的内容...'
            }
        };

        if (articles[articleId] && articleId !== '1') {
            document.querySelector('.article-title').textContent = articles[articleId].title;
            document.querySelector('.article-meta span:first-child').textContent = articles[articleId].date;
            document.querySelector('.article-meta span:last-child').textContent = articles[articleId].readTime;
        }
    }

    if (window.location.pathname.includes('blog.html')) {
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.animation = `fadeInUp 0.5s ease-out ${index * 0.03}s forwards`;
            heroTitle.appendChild(span);
        });
    }

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-image').style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-image').style.transform = 'scale(1)';
        });
    });

    const gradientOrb = document.querySelector('.gradient-orb');
    if (gradientOrb) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            gradientOrb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    }
});