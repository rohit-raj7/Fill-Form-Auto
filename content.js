chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fillForm") {
        const formData = message.data;

        Object.keys(formData).forEach(field => {
            const input = document.querySelector(`[name="${field}"], #${field}`);
            if (input) {
                const value = formData[field];
                if (input.tagName === "SELECT" || input.type === "checkbox" || input.type === "radio") {
                    input.value = value;
                    input.checked = input.type === "checkbox" || input.type === "radio" ? value === "true" : undefined;
                } else {
                    input.value = value;
                }
            }
        });

        sendResponse({ success: true, message: "Form populated successfully!" });
    }
});
