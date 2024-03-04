//M
let result = false;
let emailHandles = ["gmail.com",
                    "yahoo.com",
                    "hotmail.com",
                    "aol.com",
                    "outlook.com",
                    "live.com",
                    "icloud.com",
                    "mail.com",
                    "msn.com"];
let emailInput;
//V
updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h3>Email sjekker</h3>
        <input 
            type="text"
            oninput="emailInput=this.value">
            
        <button onclick="confirmEmail()">Sjekk Email</button>
        <div id="results">${result}</div>
    `;
}
//C
function confirmEmail() {
    let atSymbol = emailInput.indexOf('@');
    let resultsBox = document.getElementById('results');
    if(atSymbol > -1) {
        let domain = emailInput.slice(atSymbol + 1);
        console.log(domain);
        if(emailHandles.includes(domain)){
            result = true;
            resultsBox.innerHTML += "<br> Valid email domain.";
        } else {
            result = false;
            resultsBox.innerHTML += "<br> Invalid Email domain!";
        }
    } else {
        resultsBox.innerHTML += "<br> Invalid Email Format!";
    }
}