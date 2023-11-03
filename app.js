
    const attendanceForm = document.getElementById("attendance-form");
    const attendanceData = document.getElementById("attendance-data");
    const markAttendanceButton = document.getElementById("mark-attendance");

    attendanceForm.onsubmit = function () {
        const studentName = document.getElementById("student-name").value;
        const studentClass = document.getElementById("student-class").value;
        const seatNumber = document.getElementById("seat-number").value;
        const attendanceStatus = document.getElementById("attendance-status").value;

        if (studentName && studentClass && seatNumber && attendanceStatus) {
            const listItem = document.createElement("li");
            listItem.textContent = `${studentName}, Class: ${studentClass}, Seat: ${seatNumber}, Status: ${attendanceStatus}`;
            attendanceData.appendChild(listItem);

            // Optionally, store data in local storage
            const attendanceArray = JSON.parse(localStorage.getItem("attendance")) || [];
            attendanceArray.push({
                name: studentName,
                class: studentClass,
                seat: seatNumber,
                status: attendanceStatus,
            });
            localStorage.setItem("attendance", JSON.stringify(attendanceArray));

            // Clear input fields
            document.getElementById("student-name").value = "";
            document.getElementById("student-class").value = "";
            document.getElementById("seat-number").value = "";
        } else {
            alert("Please fill in all fields.");
        }
    };

    // Optionally, retrieve data from local storage on page load
    const storedAttendance = JSON.parse(localStorage.getItem("attendance")) || [];
    storedAttendance.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.name}, Class: ${entry.class}, Seat: ${entry.seat}, Status: ${entry.status}`;
        attendanceData.appendChild(listItem);
    });
