document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
 // Como não se tem os parâmetros próprios, deixei essa como exemplo para validar  nome e senha
  const isValid = false; 
  
  if (!isValid) {
      document.getElementById('errorMessage').style.display = 'block';
  } else {
      
      alert('Login bem-sucedido!');
      document.getElementById('errorMessage').style.display = 'none';
  }
});

document.getElementById('createAccount').addEventListener('click', function() {
  window.location.href = 'Cadastro.html'; 
});
