function loadScriptContent(scriptUrl, elementId) {
    fetch(scriptUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${scriptUrl}`);
            }
            return response.text();
        })
        .then(code => {
            // Display the code inside the div
            const codeElement = document.getElementById(elementId);
            codeElement.textContent = code;
            // Optionally, format it as code (e.g., use a <pre> tag)
            codeElement.style.whiteSpace = 'pre';  // To preserve indentation and line breaks
        })
        .catch(error => {
            document.getElementById(elementId).innerHTML = `<p>${error.message}</p>`;
            console.error(error);
        });
}

// Load and display each JavaScript file into its corresponding div
loadScriptContent('1_2_3_simplepromise.js', 'code1');
loadScriptContent('4_promisechaining.js', 'code2');
