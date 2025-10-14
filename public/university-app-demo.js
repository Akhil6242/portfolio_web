// University App Demo JavaScript
const screenshots = {
    login: "https://private-user-images.githubusercontent.com/181719775/494785060-272fd8fa-3483-4ae4-a0ae-dff778278a43.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTkwMDEyMTQsIm5iZiI6MTc1OTAwMDkxNCwicGF0aCI6Ii8xODE3MTk3NzUvNDk0Nzg1MDYwLTI3MmZkOGZhLTM0ODMtNGFlNC1hMGFlLWRmZjc3ODI3OGE0My5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyN1QxOTIxNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yNWI3NGRlZTliODg0NTYwODg0ODk2ODNkMzA1NDRlNzU1Zjc3NjNiZWUwYmMzZTI5MzFjYjc0YmZmMDlmNzU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.6qD0r1GKF0MmpMMvVlx0spT4_c7gyNol0FyVUITr3tE",
    home: "https://private-user-images.githubusercontent.com/181719775/494784548-c579cb1c-0561-4500-8c46-93d1527be411.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTkwMDEyMTQsIm5iZiI6MTc1OTAwMDkxNCwicGF0aCI6Ii8xODE3MTk3NzUvNDk0Nzg0NTQ4LWM1NzljYjFjLTA1NjEtNDUwMC04YzQ2LTkzZDE1MjdiZTQxMS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyN1QxOTIxNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MGI2MGVkNzM1MWJkYzZkNTZjNmEwZDNjN2NkYzk3NTAzOWZmZjQwNDY3NTdmZjRjYjFlNWIxOWJlNDUyYWZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AnUqkwv9iDuzMMuV__o_jlBttron3QgVGgMpIcdwjW4", 
    register: "https://private-user-images.githubusercontent.com/181719775/494784556-086e7915-2e86-4b78-975e-028f52acc462.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTkwMDEyMTQsIm5iZiI6MTc1OTAwMDkxNCwicGF0aCI6Ii8xODE3MTk3NzUvNDk0Nzg0NTU2LTA4NmU3OTE1LTJlODYtNGI3OC05NzVlLTAyOGY1MmFjYzQ2Mi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyN1QxOTIxNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yY2VlYzlhNzcyN2ZkYTRjN2JjZGZiMmJmZGRjYjdkNjkzNzNmOTFhMjUyODRlYTZiMGY5NWI1ZTQwYjAxYjU1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.uEz5Yz1BI6msISBx3euM1atDk3hXVEtnRclPFvJ8Dgc"
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
