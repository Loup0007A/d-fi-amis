function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    // 1. Vérification du compte légitime
    if (user === "admin" && pass === "Gendkhabzkj135373") {
        window.location.href = "board.html";
        return;
    }

    // 2. Simulation dynamique d'une injection SQL (via Regex)
    // Cette expression cherche des motifs typiques d'injection comme : ' OR '1'='1 ou " OR 1=1
    const sqlInjectionPattern = /(['"])\s*OR\s*([\w'"]+)\s*=\s*\2/i;

    if (sqlInjectionPattern.test(user) || sqlInjectionPattern.test(pass)) {
        alert("Injection SQL réussie ! (Simulation)");
        window.location.href = "board.html";
        return;
    }

    // 3. Échec de la connexion
    alert("Accès refusé");
}
