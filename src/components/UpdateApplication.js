import React, {useState, useEffect} from 'react';

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const UpdateApplication = () => {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        age: 0,
        number: "",
        communication: "",
        english: "",
        available: formatDate(),
        skillsAndCourses: "",
        personalPresentation: "",
        studyFromHome: false
    });

    useEffect(() => {
        let toUpdateIndex = JSON.parse(localStorage.getItem("applicationToUpdate"));
        let allApplications = JSON.parse(localStorage.getItem("applications"));
        let applicationToUpdate = allApplications[toUpdateIndex];

        setFormData(applicationToUpdate);
    }, [])

    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        type === "checkbox" ? setFormData({ ...formData, [name]: checked }) : setFormData({ ...formData, [name]: value });
    }

    function onSubmit(e) {
        if(/^[a-zA-Z]+ [a-zA-Z]+$/.test(formData.name) && 
           /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email) &&
           /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/.test(formData.number)) {
            let toUpdateIndex = JSON.parse(localStorage.getItem("applicationToUpdate"));
            let allApplications = JSON.parse(localStorage.getItem("applications"));
            allApplications[toUpdateIndex] = formData;
            localStorage.setItem("applications", JSON.stringify(allApplications));
            window.location.href = '/';
        }else {
            e.preventDefault();
            alert("Please enter correct data for Name, Email and Phone");    
        }
    }

    return (
        <div id="create-application">
            <h2>Update an application</h2>
            <form action="/">
                <div>
                    <label className="first-labels">Name*: </label>
                    <input type="text" value={formData.name} name="name" required className="input-height" onChange={handleChange} />
                </div>
                <div>
                    <label className="first-labels">Email*: </label>
                    <input type="text" value={formData.email} name="email" required className="input-height" onChange={handleChange} />
                </div>
                <div>
                    <label className="first-labels">Age*: </label>
                    <input type="number" value={formData.age} name="age" required className="input-height" onChange={handleChange} />
                </div>
                <div>
                    <label className="first-labels">Phone*: </label>
                    <input type="text" value={formData.number} name="number" required className="input-height" onChange={handleChange} />
                </div>
                <div>
                    <label>Preferred Way of Communication*: </label>
                    <input type="radio" id="email" name="communication" value="Email" required checked={formData.communication === "Email"} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="radio" id="phone" name="communication" value="Phone" checked={formData.communication === "Phone"} onChange={handleChange} />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div>
                    <label className="second-labels">English Level*: </label>
                    <select name="english" value={formData.english} required className="input-height" onChange={handleChange} >
                        <option value="">Select</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Upper Intermediate">Upper Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Professional">Professional</option>
                    </select>
                </div>
                <div>
                    <label className="second-labels">Available to Start*: </label>
                    <input type="date" name="available" value={formData.available} required className="input-height" onChange={handleChange} />
                </div>
                <div>
                    <label>Technical Skills and Courses: </label>
                    <textarea name="skillsAndCourses" value={formData.skillsAndCourses} onChange={handleChange} ></textarea>
                </div>
                <div>
                    <label>Short Personal Presentation (e.g. reason for joining the program): </label>
                    <textarea name="personalPresentation" value={formData.personalPresentation} onChange={handleChange} ></textarea>
                </div>
                <div>
                    <input type="checkbox" name="studyFromHome" checked={formData.studyFromHome} onChange={handleChange} />
                    <label id="study-from-home-label">Study from home</label>
                </div>
                <a href="/" onClick={onSubmit}><button>Update</button></a>
            </form>
        </div>
    );
}

export default UpdateApplication;
