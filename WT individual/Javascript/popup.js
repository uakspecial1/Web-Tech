    document.getElementById("submissionForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        if (username === '' || password === '') {
            alert("Please enter both username and password.");
        } else {
            alert("Thank you for Submission!");
        }
    });

