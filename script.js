function login() {

    const pass = document.getElementById("pass").value;

    // Simulation d'injection SQL
    if (
        pass === "' OR '1'='1" ||
        pass === "\" OR \"1\"=\"1"
    ) {
        window.location.href = "board.html";
        return;
    }

    alert("Accès refusé");
}
