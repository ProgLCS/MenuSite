document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
 // verificação
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Aqui você adicionaria a lógica real de verificação
  // Esta é apenas uma simulação para mostrar a mensagem de erro
  const isValid = false; // Alterar para true para simular login bem-sucedido
  
  if (!isValid) {
      document.getElementById('errorMessage').style.display = 'block';
  } else {
      // Redirecionar ou mostrar conteúdo após login bem-sucedido
      alert('Login bem-sucedido!');
      document.getElementById('errorMessage').style.display = 'none';
  }
});

document.getElementById('createAccount').addEventListener('click', function() {
  // Redirecionar para a página de criação de conta
  alert('Redirecionando para a página de criação de conta...');
});