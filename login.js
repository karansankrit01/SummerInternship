<script>
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form");
        
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent the default form submission
            
            // Get the values from the input fields
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Basic validation (you can expand this as needed)
            if (!email || !password) {
                alert("Please fill in both fields.");
                return;
            }

            // For demonstration, log the values (replace this with actual authentication logic)
            console.log("Email:", email);
            console.log("Password:", password);
            
            // Simulate a successful login (replace with actual API call)
            alert("Login successful!"); // This would be replaced with your actual logic
        });
    });
</script>
