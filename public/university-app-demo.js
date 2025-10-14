// University App Demo JavaScript
const screenshots = {
    login: "https://private-user-images.githubusercontent.com/181719775/494785060-272fd8fa-3483-4ae4-a0ae-dff778278a43.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA0NzA5NTUsIm5iZiI6MTc2MDQ3MDY1NSwicGF0aCI6Ii8xODE3MTk3NzUvNDk0Nzg1MDYwLTI3MmZkOGZhLTM0ODMtNGFlNC1hMGFlLWRmZjc3ODI3OGE0My5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAxNFQxOTM3MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MmYyOGE1YjgzMzIzOTRiMGQ1MTk1MGYxZDFkNjJlNjQyMjVlZmM3ZDA0ZDYwN2U3ZWE5NzdjOTk5YmNkODliJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bIpgEOKyO3xajsAVAeRTcsU6E80k7j3aeKj6PQ5bb4o",
    home: "https://private-user-images.githubusercontent.com/181719775/494784548-c579cb1c-0561-4500-8c46-93d1527be411.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA0NzA5NTUsIm5iZiI6MTc2MDQ3MDY1NSwicGF0aCI6Ii8xODE3MTk3NzUvNDk0Nzg0NTQ4LWM1NzljYjFjLTA1NjEtNDUwMC04YzQ2LTkzZDE1MjdiZTQxMS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAxNFQxOTM3MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNzdiN2FiYzliZWQ1Njc5MTViNGY5OTMzNzU3MDRlOTBiMjE4ZjNhNTNhOTIyMWZkZDE4NjcyZTIxMTdjYWE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.wKTGJN-_xmIGG8ZPGHtB75a1-_LhjrjaBc7ofXJoLd4", 
    register: "https://private-user-images.githubusercontent.com/181719775/494784556-086e7915-2e86-4b78-975e-028f52acc462.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjA0NzA5NTUsIm5iZiI6MTc2MDQ3MDY1NSwicGF0aCI6Ii8xODE3MTk3NzUvNDk0Nzg0NTU2LTA4NmU3OTE1LTJlODYtNGI3OC05NzVlLTAyOGY1MmFjYzQ2Mi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAxNFQxOTM3MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZjY3ZDQ5YzBkMGVjMjdhNGRjODQ4N2MyYjA1NDJlZGU1Yjg1MjE1Y2IwOWRiYmRkOWJmNDA2YTc4YzY5Njk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GSxPDLJkuXO5J1OyCJltz05DgT1SM7wHcAU7XSzov2M"
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
