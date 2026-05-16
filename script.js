       // Reveal animation on load
        window.addEventListener('load', () => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.add('active');
            });
        });

        // Mouse Parallax for Image
        const hex = document.querySelector('.hexagon-shape');
        document.addEventListener('mousemove', (e) => {
            let x = (window.innerWidth / 2 - e.pageX) / 45;
            let y = (window.innerHeight / 2 - e.pageY) / 45;
            hex.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });

    const observerAbout = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-about').forEach(el => {
        observerAbout.observe(el);
    });

    document.addEventListener("DOMContentLoaded", function() {
        // 1. Progress Bar Logic
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-progress").style.width = scrolled + "%";
        });

        // 2. Advanced Reveal Logic
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Menambahkan delay otomatis berdasarkan urutan elemen di layar
                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                    
                    setTimeout(() => {
                        entry.target.classList.add('active');
                        // Jika elemen adalah gambar, tambahkan efek melayang setelah muncul
                        if (entry.target.tagName === 'IMG' || entry.target.classList.contains('hexagon-shape')) {
                            entry.target.classList.add('floating-anim');
                        }
                    }, delay);

                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Targetkan semua elemen dengan class reveal-global
        document.querySelectorAll('.reveal-global').forEach(el => {
            revealObserver.observe(el);
        });
    });

    const observerSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aktifkan animasi reveal
                entry.target.classList.add('active');
                
                // Jika yang muncul adalah skill-item, isi progress barnya
                const bar = entry.target.querySelector('.progress-bar');
                if (bar) {
                    bar.style.width = bar.getAttribute('data-width');
                }
            }
        });
    }, { threshold: 0.2 });

    // Targetkan semua elemen reveal-skill
    document.querySelectorAll('.reveal-skill').forEach(el => {
        observerSkills.observe(el);
    });

    const observerProjects = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-project').forEach(el => {
        observerProjects.observe(el);
    });

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-contact').forEach(el => {
        contactObserver.observe(el);
    });

    // Opsional: Logika sederhana untuk tombol kirim
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        btn.innerHTML = '<span>Sent Successfully!</span> <i class="bi bi-check-all text-xl"></i>';
        btn.classList.replace('bg-purple-600', 'bg-green-600');
    });

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-footer').forEach(el => {
        footerObserver.observe(el);
    });