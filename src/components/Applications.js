import React, {useState, useEffect} from 'react';

const Application = ({
    name,
    email,
    age,
    number,
    communication,
    english,
    available,
    skillsAndCourses,
    personalPresentation,
    studyFromHome,
    handleUpdate,
    handleDelete
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td>{number}</td>
            <td>{communication}</td>
            <td>{english}</td>
            <td>{available}</td>
            <td>{skillsAndCourses}</td>
            <td>{personalPresentation}</td>
            <td>{studyFromHome ? "Yes" : "No"}</td>
            <td>
                <a href="/update" onClick={handleUpdate}><button>Update</button></a>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
}

const Applications = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        setApplications(JSON.parse(localStorage.getItem("applications")));
    }, []);

    function handleUpdate(e) {
        let applicationToUpdate = Array.prototype.indexOf.call(e.target.parentNode.parentNode.parentNode.parentNode.childNodes, e.target.parentNode.parentNode.parentNode);
        localStorage.setItem("applicationToUpdate", JSON.stringify(applicationToUpdate));
    }

    function handleDelete(e) {
        let applicationToDelete = Array.prototype.indexOf.call(e.target.parentNode.parentNode.parentNode.childNodes, e.target.parentNode.parentNode);
        let applicationsCopy = applications;
        applicationsCopy.splice(applicationToDelete, 1);
        localStorage.setItem("applications", JSON.stringify(applicationsCopy));
        setApplications(JSON.parse(localStorage.getItem("applications")));
    }

    function applicationsList() {
        return applications.map((application,index) => {
            return <Application name={application.name}
            email={application.email}
            age={application.age}
            number={application.number}
            communication={application.communication}
            english={application.english}
            available={application.available}
            skillsAndCourses={application.skillsAndCourses}
            personalPresentation={application.personalPresentation}
            studyFromHome={application.studyFromHome} 
            handleUpdate={handleUpdate} 
            handleDelete={handleDelete}
            key={index}/>
        })
    }

    return (
        applications.length !== 0 ? 
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Communication</th>
                        <th>English Level</th>
                        <th>Available from</th>
                        <th>Technical Skills and Courses</th>
                        <th>Personal Presentation</th>
                        <th>Study from home</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applicationsList()}
                </tbody>
            </table>
            :
            <h1>There are currently no applications.</h1>
    );
}

export default Applications;
