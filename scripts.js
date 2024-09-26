document.querySelectorAll('.tshirt-slider').forEach((slider, index) => {
    let currentIndex = 0;
    const slides = slider.querySelectorAll('.slide');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    
    // Function to update slide visibility
    const updateSlide = (index) => {
      slides.forEach(slide => slide.style.display = 'none');
      slides[index].style.display = 'block';
    };
    
    // Initialize with the first slide
    updateSlide(currentIndex);
  
    // Set interval for automatic slide change
    let interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    }, 3000); // Change slide every 3 seconds
  
    // Next button functionality
    nextBtn.addEventListener('click', () => {
      clearInterval(interval); // Stop auto slide
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    });
  
    // Previous button functionality
    prevBtn.addEventListener('click', () => {
      clearInterval(interval); // Stop auto slide
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(currentIndex);
    });
  });
  