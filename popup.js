


let fields = [
    "prefix", "fathername", "mothername", "aadhaarno", "address", "city", "state", "postal", "country",
    "firstname", "lastname", "gender", "email", "phone", "nationality", "company", "linkedin", "twitter",
    "github", "website", "portfolio", "university", "school", "degree", "stream", "disability",
    "race", "sexual", "veteran", "cover", "resume", "edu-startdate", "edu-enddate", "other-degree", "exp-startdate", "exp-enddate", "position", "description","job",
    "notice-period", "location", "variable-salary", "expected-salary", "experience", "current-salary", "expected-salary", "notice-period", "earliest-available-date", "latest-available-date",
    "coverletter", "gender-identity", "race-ethnicity", "sexual-orientation", "disability", "veteran-status", "resume-file"
    
];

const filler = {
    prefix: "mr", firstname: "Rohit", lastname: "Raj", fathername: "Ramesh", mothername: "Punam", aadhaarno: "8321111111",
    gender: "male", email: "rohit000000@gmail.com", phone: "+91706100000", city: "Banka", state: "Bihar", postal: "813102",
    country: "India", address: "xyz, Banka 813102", nationality: "Indian", company: "Google", linkedin: "https://www.linkedin.com/in/rohit-raj7/",
    twitter: "https://x.com/rohit_raj70", github: "https://github.com/rohit-raj7", website: "https://rohit-raj-portfoli.netlify.app/",
    portfolio: "https://rohit-raj-portfoli.netlify.app/", university: "Bihar Engineering University", school: "XYZ School", degree: "Bachelors",
    stream: "Computer Science", disability: "no", race: "xyz", sexual: "yesno", veteran: "prefer", resume: ".pdf",
    "edu-startdate": "2022-01-01", "edu-enddate": "2026-01-01", "other-degree": "MSc", "exp-startdate": "2023-01-01", "exp-enddate": "2024-01-01", position: "Intern", description: "Worked on AI Projects",
     "notice-period": "---", "location": "---", "variable-salary": "---", "expected-salary": "---", "experience": "Less than 1 year" , "current-salary": "100000", "expected-salary": "200000", "notice-period": "1 month", "earliest-available-date": "2024-12-01", "latest-available-date": "2025-01-01",
    "coverletter": "Dear Hiring Manager, ...", "gender-identity": "male", "race-ethnicity": "asian", "sexual-orientation": "heterosexual", "disability": "no", "veteran-status": "notprotected",
    "resume-file": "resume.pdf"
};

const reset = Object.fromEntries(fields.map(field => [field, ""]));

function loadStoredValues() {
    chrome.storage.sync.get(fields, (data) => {
        fields.forEach(field => {
            const value = data[field] || '';
            const input = document.getElementById(field);
            if (input) input.value = value;
        });
    });
}

function saveFormData() {
    const dataToSave = fields.reduce((acc, field) => {
        const input = document.getElementById(field);
        acc[field] = input ? input.value : '';
        return acc;
    }, {});

    chrome.storage.sync.set(dataToSave, () => {
        updateButtonText("save", "Saved!", "success", 1000);
    });
}

function resetFormData() {
    chrome.storage.sync.set(reset, () => {
        updateButtonText("reset", "Reset!", "success", 900);
        setTimeout(() => location.reload(), 900);
    });
}

function populateForm() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            files: ["content.js"]
        }, () => {
            chrome.storage.sync.get(fields, (savedData) => {
                chrome.tabs.sendMessage(activeTab.id, { action: "fillForm", data: savedData }, (response) => {
                    if (chrome.runtime.lastError) {
                        console.error("Error sending message:", chrome.runtime.lastError.message);
                    } else {
                        console.log("Form filled successfully:", response);
                    }
                });
            });
        });
    });
}

function updateButtonText(buttonId, text, className, timeout) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    const originalText = button.textContent;
    button.textContent = text;
    button.classList.add(className);
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove(className);
    }, timeout);
}

document.addEventListener("DOMContentLoaded", () => {
    loadStoredValues();
    document.getElementById("save").addEventListener("click", saveFormData);
    document.getElementById("reset").addEventListener("click", resetFormData);
    document.getElementById("populate").addEventListener("click", populateForm);
});






//Console log
function loadStoredValues() {
    chrome.storage.sync.get(fields, (data) => {
        console.log("Loaded data:", data); // Log the loaded data
        fields.forEach(field => {
            const value = data[field] || '';
            const input = document.getElementById(field);
            if (input) input.value = value;
        });
    });
}
