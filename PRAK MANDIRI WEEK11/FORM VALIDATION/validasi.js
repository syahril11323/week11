function validateForm() {
    // Ambil elemen
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const departureTime = document.getElementById("departureTime");
    const destination = document.getElementById("destination");
    const ticketCount = document.getElementById("ticketCount");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const timeError = document.getElementById("timeError");
    const destinationError = document.getElementById("destinationError");
    const ticketError = document.getElementById("ticketError");

    let isValid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    timeError.textContent = "";
    destinationError.textContent = "";
    ticketError.textContent = "";

    name.classList.remove("invalid");
    email.classList.remove("invalid");
    departureTime.classList.remove("invalid");
    destination.classList.remove("invalid");
    ticketCount.classList.remove("invalid");

    // Validasi Nama
    if (!name.value || name.value.length > 30) {
        nameError.textContent = "Nama harus diisi dan tidak lebih dari 30 karakter.";
        name.classList.add("invalid");
        isValid = false;
    }

    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailRegex.test(email.value)) {
        emailError.textContent = "Format email tidak valid.";
        email.classList.add("invalid");
        isValid = false;
    }

    // Validasi Jam Keberangkatan
    const timeRegex = /^([01]?[0-9]|2[0-3])\.[0-5][0-9]$/;
    if (!departureTime.value || !timeRegex.test(departureTime.value)) {
        timeError.textContent = "Jam keberangkatan harus dalam format hh.mm (00.00 - 23.59).";
        departureTime.classList.add("invalid");
        isValid = false;
    }

    // Validasi Tujuan Keberangkatan
    if (!destination.value) {
        destinationError.textContent = "Tujuan keberangkatan harus diisi.";
        destination.classList.add("invalid");
        isValid = false;
    }

    // Validasi Jumlah Tiket
    const ticketValue = parseInt(ticketCount.value, 10);
    if (!ticketCount.value || ticketValue < 1 || ticketValue > 10) {
        ticketError.textContent = "Jumlah tiket harus antara 1 dan 10.";
        ticketCount.classList.add("invalid");
        isValid = false;
    }

    // Jika valid, tampilkan hasil
    if (isValid) {
        document.getElementById("result").innerHTML = `
            <p><strong>Nama:</strong> ${name.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Jam Keberangkatan:</strong> ${departureTime.value}</p>
            <p><strong>Tujuan:</strong> ${destination.value}</p>
            <p><strong>Jumlah Tiket:</strong> ${ticketValue}</p>
        `;
        alert("Form berhasil divalidasi!");
    } else {
        document.getElementById("result").textContent = "";
    }
}
