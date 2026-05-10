document.addEventListener('DOMContentLoaded', () => {

    // --- INTERACTIVE STAR RATING LOGIC ---
    const stars = document.querySelectorAll('.star-select');
    const ratingInput = document.getElementById('ratingValue');
    let selectedRating = 0;

    // Highlight stars on hover
    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => {
            updateStarUI(index + 1);
        });

        // Reset to selected rating when mouse leaves
        star.addEventListener('mouseout', () => {
            updateStarUI(selectedRating);
        });

        // Lock in rating on click
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            ratingInput.value = selectedRating;
        });
    });

    // Helper function to color the stars Saffron (#FF9933)
    function updateStarUI(ratingCount) {
        stars.forEach((star, index) => {
            if (index < ratingCount) {
                star.classList.remove('fa-regular');
                star.classList.add('fa-solid');
                star.style.color = '#FF9933';
            } else {
                star.classList.remove('fa-solid');
                star.classList.add('fa-regular');
                star.style.color = '#ddd';
            }
        });
    }


    // --- FORM SUBMISSION & TOAST NOTIFICATION ---
    const reviewForm = document.getElementById('reviewForm');
    const toast = document.getElementById('toastNotification');

    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload

            // Basic validation to ensure a star rating was clicked
            if (selectedRating === 0) {
                alert("Please select a star rating before submitting.");
                return;
            }

            // 1. Show the Success Toast Notification sliding up in the corner
            toast.classList.add('show');

            // 2. Clear the form data
            reviewForm.reset();
            
            // 3. Reset the stars visually and logically
            selectedRating = 0;
            ratingInput.value = '';
            updateStarUI(0);

            // 4. Hide the Toast automatically after 4 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 4000);
        });
    }
});
// === DARK MODE THEME TOGGLE ===
(function() {
  const themeBtn = Object.assign(document.createElement('button'), {
    className: 'theme-toggle',
    textContent: 'Dark Mode'
  });
  document.body.appendChild(themeBtn);
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  });
})();
