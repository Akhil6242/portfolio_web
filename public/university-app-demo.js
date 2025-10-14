// University App Demo JavaScript
const screenshots = {
    login: "./login.jpg",
    home: "./home.jpg", 
    register: "./register.jpg"
};
function showScreen(screenType) {
    const screenElement = document.getElementById('deviceScreen');
    const buttons = document.querySelectorAll('.flow-btn');
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Screen content based on type
    let screenContent = '';
    
    switch(screenType) {
        case 'login':
            screenContent = `
                <img 
                    src="${screenshots.login}" 
                    alt="Login Screen"
                    class="screen-image"
                />
            `;
            break;
        case 'home':
            screenContent = `
                <img 
                    src="${screenshots.home}" 
                    alt="Student Homepage"
                    class="screen-image"
                />
            `;
            break;
        case 'register':
            screenContent = `
                <img 
                    src="${screenshots.register}" 
                    alt="Registration Screen"
                    class="screen-image"
                />
            `;
            break;
    }
    
    screenElement.innerHTML = screenContent;
}


// Initialize with login screen
document.addEventListener('DOMContentLoaded', function() {
    showScreen('login');
});
