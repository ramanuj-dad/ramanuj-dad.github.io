// Main navigation and sidebar functionality
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    if (window.innerWidth <= 768) {
        mainContent.classList.toggle('shifted');
    }
}

function showHome() {
    document.getElementById('home-content').style.display = 'block';
    document.getElementById('content-frame').style.display = 'none';
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('.nav-link[onclick="showHome()"]').classList.add('active');
}

// Initialize navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    document.querySelectorAll('.nav-link[target="content-frame"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide home content and show iframe
            document.getElementById('home-content').style.display = 'none';
            document.getElementById('content-frame').style.display = 'block';
            document.getElementById('content-frame').src = this.href;
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                toggleSidebar();
            }
        });
    });
}); 