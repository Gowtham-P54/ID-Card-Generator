function generateIDCard() {
    const collegeName = document.getElementById('collegeName').value;
    const studentName = document.getElementById('studentName').value;
    const studentAddress = document.getElementById('studentAddress').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const section = document.getElementById('section').value;
    const collegeEmail = document.getElementById('collegeEmail').value;
    const collegeContact = document.getElementById('collegeContact').value;
    const studentMobile = document.getElementById('studentMobile').value;

    // Display ID card information
    document.getElementById('collegeNameDisplay').innerText = collegeName;
    document.getElementById('studentNameDisplay').innerText = studentName;
    document.getElementById('studentAddressDisplay').innerText = studentAddress;
    document.getElementById('bloodGroupDisplay').innerText = bloodGroup;
    document.getElementById('sectionDisplay').innerText = section;
    document.getElementById('collegeEmailDisplay').innerText = collegeEmail;
    document.getElementById('collegeContactDisplay').innerText = collegeContact;
    document.getElementById('studentMobileDisplay').innerText = studentMobile;

    // Display uploaded photo
    const photoInput = document.getElementById('studentPhoto').files[0];
    const photoDisplay = document.getElementById('studentPhotoDisplay');
    const reader = new FileReader();

    reader.onload = function(e) {
        photoDisplay.src = e.target.result;
    };

    if (photoInput) {
        reader.readAsDataURL(photoInput);
    }

    // Show the ID card
    document.getElementById('idCard').style.display = 'block';
}

function printIDCard() {
    window.print();
}
