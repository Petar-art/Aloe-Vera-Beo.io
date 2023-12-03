const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('show')) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 }); // Podesite prag prema vašim potrebama (0.8 znači da će se pokrenuti kada je 80% proizvoda vidljivo)
  
  document.querySelectorAll('.product-item').forEach(item => {
    observer.observe(item);
  });
  
  let isScrollAnimationTriggered = false;
  
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const triggerScrollPosition = 500;
  
    if (scrollPosition > triggerScrollPosition && !isScrollAnimationTriggered) {
      document.querySelectorAll('.product-item').forEach(item => {
        item.classList.add('show-scroll');
      });
  
      isScrollAnimationTriggered = true;
    }
  }
  
  // Dodajte event listenere samo ako nisu već dodati
  if (window.innerWidth <= 768) {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleScroll);
  }
  