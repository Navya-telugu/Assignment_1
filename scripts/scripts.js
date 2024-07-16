// Function to show the contact form
function showForm() {
    document.getElementById('headerSection').classList.add('hidden');
    document.getElementById('contactForm').classList.remove('hidden');
  }
  
  // Function to close the form and show the header section
  function closeForm() {
    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('headerSection').classList.remove('hidden');
  }
  
  // Event listener for the Contact Us button
  document.getElementById('showFormBtn').addEventListener('click', function() {
    showForm();
  });
  
  // Submit form function (assuming you have a form submit event handler)
  document.getElementById("contactFormContent").addEventListener("submit", function(event) {
    event.preventDefault();
    // Replace 'https://form.get.io' with your actual endpoint for form submission
    fetch('https://form.get.io', {
      method: 'POST',
      body: new FormData(this)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Form submission successful:', data);
      // Optionally, show a success message or redirect to a thank you page
    })
    .catch(error => {
      console.error('There was a problem with form submission:', error);
      // Handle errors or show an error message
    });
  });
  
  // Additional logic for card and dot interaction
  // Additional logic for card and dot interaction
// Additional logic for card and dot interaction on click
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const index = card.getAttribute('data-index');
        const overlayCard = card.querySelector('.overlay-card');
        
        // Display overlay card on hover
        overlayCard.style.display = 'flex';
        
        // Manage active state of dots
        dots.forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-index="${index}"]`).classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        const overlayCard = card.querySelector('.overlay-card');
        
        // Hide overlay card on mouse leave
        overlayCard.style.display = 'none';
        
        // Remove active state from dots
        dots.forEach(dot => dot.classList.remove('active'));
    });
});


