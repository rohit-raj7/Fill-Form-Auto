
document.getElementById('firstFillForm').addEventListener('click', function(e) {
    e.preventDefault(); 
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('firstFillForm1').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
});



document.addEventListener("DOMContentLoaded", function() {
    const addEduButton = document.getElementById("add_edu");
    const educationContainer = document.querySelector(".education-form");
    
    addEduButton.addEventListener("click", function(e) {
        e.preventDefault();

        const newEducationForm = document.createElement("div");
        newEducationForm.classList.add("education-form");

        newEducationForm.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>University</label>
                    <input type="text" class="form-control" name="school" placeholder="xyz University ">
                </div>
                <div class="form-group">
                    <label>School or Institution</label>
                    <input type="text" class="form-control" name="school" placeholder="xyz college ">
                </div>
                <div class="form-group">
                    <label>&nbsp;</label>
                    <a href="#" class="form-control border-0 text-primary remove-edu-form">[-] Remove</a>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Degree</label>
                    <select class="form-control" name="degree">
                        <option value="">--</option>
                        <option value="Post-Doctorate">Post-Doctorate</option>
                        <option value="Doctor of Medicine">Doctor of Medicine</option>
                        <option value="Doctorate or PhD">Doctorate or PhD</option>
                        <option value="Juris Doctor">Juris Doctor</option>
                        <option value="Professional Certification">Professional Certification</option>
                        <option value="Masters">Masters</option>
                        <option value="Master of Arts">Master of Arts</option>
                        <option value="Master of Science">Master of Science</option>
                        <option value="Master of Engineering">Master of Engineering</option>
                        <option value="Master of Business">Master of Business</option>
                        <option value="Bachelors">Bachelors</option>
                        <option value="Bachelors (Hons)">Bachelors (Hons)</option>
                        <option value="Bachelor of Science">Bachelor of Science</option>
                        <option value="Bachelor of Science (Hons)">Bachelor of Science (Hons)</option>
                        <option value="Bachelor of Arts">Bachelor of Arts</option>
                        <option value="Bachelor of Arts (Hons)">Bachelor of Arts (Hons)</option>
                        <option value="Bachelor of Engineering">Bachelor of Engineering</option>
                        <option value="Associate Degree">Associate Degree</option>
                        <option value="Advanced Diploma">Advanced Diploma</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Technical Certificate/Diploma">Technical Certificate/Diploma</option>
                        <option value="High School or Equivalent">High School or Equivalent</option>
                        <option value="GED">GED</option>
                        <option value="Vocational Training">Vocational Training</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Other degree</label>
                    <input type="text" class="form-control" name="major" placeholder="Fill degree">
                </div>
                <div class="form-group">
                    <label>Stream</label>
                    <input type="text" class="form-control" name="stream" placeholder="Computer Science">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" class="form-control" name="edu-startdate" placeholder="">
                </div>

                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" class="form-control" name="edu-enddate" placeholder="">
                </div>
            </div>
        `;

         educationContainer.appendChild(newEducationForm);

        newEducationForm.querySelector(".remove-edu-form").addEventListener("click", function(e) {
            e.preventDefault();
            educationContainer.removeChild(newEducationForm);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addExpButton = document.getElementById("add_exp");
    const experienceContainer = document.querySelector(".experience-form");

    addExpButton.addEventListener("click", function (e) {
        e.preventDefault(); 

        const newExperienceForm = document.createElement("div");
        newExperienceForm.classList.add("experience-form");

        newExperienceForm.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Company</label>
                    <input type="text" class="form-control" name="company" placeholder="xyz">
                </div>
                <div class="form-group">
                    <label>Position</label>
                    <input type="text" class="form-control" name="position" placeholder="">
                </div>
                <div class="form-group">
                    <label>&nbsp;</label>
                    <a href="#" class="form-control border-0 text-primary remove_experience_form">[-] Remove</a>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" name="description" rows="3"></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" class="form-control" name="exp-startdate" placeholder="">
                </div>
                <div class="form-group">
                    <label>End Date</label>
                    <input type="date" class="form-control" name="exp-enddate" placeholder="">
                </div>
            </div>
        `;

        experienceContainer.appendChild(newExperienceForm);

       newExperienceForm.querySelector(".remove_experience_form").addEventListener("click", function (e) {
            e.preventDefault();
            experienceContainer.removeChild(newExperienceForm);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const addJobButton = document.getElementById("add_job");
    const jobContainer = document.querySelector(".job-form");

    addJobButton.addEventListener("click", function (e) {
        e.preventDefault(); 
        
        const newJobForm = document.createElement("div");
        newJobForm.classList.add("job-form");

        newJobForm.innerHTML = `
            <div class="form-row">
                <div class="form-group">
                    <label>Job</label>
                    <input type="text" class="form-control" name="job" placeholder="xyz">
                </div>
                <div class="form-group">
                    <label>Notice Period</label>
                    <input type="text" class="form-control" name="notice_period" placeholder="---">
                </div>
                <div class="form-group">
                    <label>&nbsp;</label>
                    <a href="#" class="form-control border-0 text-primary remove-job-form">[-] Remove</a>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Location</label>
                    <input type="text" class="form-control" name="location" placeholder="---">
                </div>
                <div class="form-group">
                    <label>Variable Salary/Bonus</label>
                    <input type="text" class="form-control" name="variable_salary" placeholder="---">
                </div>
                <div class="form-group">
                    <label>Expected Salary</label>
                    <input type="text" class="form-control" name="expected_salary" placeholder="---">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label>Years of Experience</label>
                    <select class="form-control" name="experience">
                        <option value="">--</option>
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1 year">1 year</option>
                        <option value="2 years">2 years</option>
                        <option value="3 years">3 years</option>
                        <option value="4 years">4 years</option>
                        <option value="5 years">5 years</option>
                        <option value="6-10 years">6-10 years</option>
                        <option value="11-15 years">11-15 years</option>
                        <option value="16-20 years">16-20 years</option>
                        <option value="More than 20 years">More than 20 years</option>
                    </select>
                </div>
            </div>
            <br>
        `;

        jobContainer.appendChild(newJobForm);
  newJobForm.querySelector(".remove-job-form").addEventListener("click", function (e) {
            e.preventDefault();
            jobContainer.removeChild(newJobForm);
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    
    const tabs = document.querySelectorAll(".nav-link");
    const tabPanes = document.querySelectorAll(".tab-pane");
     
    if (tabs.length > 0) {
        tabs[0].classList.add("active"); 
        tabPanes[0].classList.add("active");
    }
    
    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            tabs.forEach(t => {
                t.classList.remove("active");
            });
            tabPanes.forEach(pane => {
                pane.classList.remove("active");
            });

            tab.classList.add("active");

            const tabPane = document.querySelector(tab.getAttribute("href"));
            tabPane.classList.add("active");
        });
    });
});





