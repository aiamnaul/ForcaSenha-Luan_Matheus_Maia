const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strengthText');
const strengthValue = document.getElementById('strengthValue');
const showPassword = document.getElementById('showPassword');
const barPassword = document.getElementById('barPassword');

function checkPasswordStrength() {
    const password = passwordInput.value;
    let strength = 0;

    // Pontuação baseada em comprimento
    if (password.length >= 14) {strength += 5}
    else if (password.length >= 12) {strength += 4}
    else if (password.length >= 10) {strength += 3}
    else if (password.length > 6) {strength += 2}
    else if (password.length >1 ) {strength += 1}
    
    // Pontuação por caracteres especiais
    if (/\d/.test(password)) {strength += 1};  // Contém número
    if (/[A-Z]/.test(password)) strength += 1;  // Contém letra maiúscula
    if (/[a-z]/.test(password)) strength += 1;  // Contém letra minúscula
    if (/[^a-zA-Z0-9]/.test(password)) strength += 2;  // Contém caractere especial
    console.log(strength);
    // Atualizar a exibição da força da senha
    strengthValue.textContent = strength;
    updateStrengthText(strength);
}

function updateStrengthText(strength) {
  if (strength >= 9) {
      strengthText.textContent = 'Força da Senha: Forte';
      barPassword.style.width = '100%';
      strengthText.style.color = 'green';
      barPassword.style.backgroundColor = 'green'
  } else if (strength > 5 && strength < 9) {
      strengthText.textContent = 'Força da Senha: Moderada';
      barPassword.style.width = '50%';
      strengthText.style.color = 'yellow';
      barPassword.style.backgroundColor = 'yellow';
  } else {
      strengthText.textContent = 'Força da Senha: Fraca';
      barPassword.style.width = '25%';
      strengthText.style.color = 'red';
      barPassword.style.backgroundColor = 'red';
  }
}

// função pra alterar a visualição da senha
function togglePasswordVisibility() {  
  if(passwordInput.type === 'text'){
    showPassword.value = "Show";
    passwordInput.type = 'password';
    
  } else{
    showPassword.value = "Hide";
    passwordInput.type = 'text';
  }



}