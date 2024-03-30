document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("showPassword");
    
    showPasswordCheckbox.addEventListener("change", function () {
        passwordField.type = this.checked ? "text" : "password";
    });
    
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Отправка данных на сервер для аутентификации
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Authentication failed");
            }
            return response.json();
        })
        .then(data => {
            // Обробка успішного входу
            console.log("Logged in successfully", data);
        })
        .catch(error => {
            // Обробка помилки аутентифікації
            console.error("Login failed", error);
        });
    });
});
