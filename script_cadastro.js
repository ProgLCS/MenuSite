document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const errorMessage = document.getElementById('errorMessage');
  
  // Simulação de banco de dados para verificar CPFs já cadastrados
  const cpfsRegistrados = ['123.456.789-00', '987.654.321-00'];
  
  // Função para formatar o CPF enquanto o usuário digita
  document.getElementById('cpf').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      
      if (value.length <= 11) {
          value = value.replace(/(\d{3})(\d)/, '$1.$2');
          value = value.replace(/(\d{3})(\d)/, '$1.$2');
          value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      }
      
      e.target.value = value;
  });
  
  // Função para formatar o telefone enquanto o usuário digita
  document.getElementById('telefone').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
      
      if (value.length <= 11) {
          if (value.length > 2) {
              value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
          }
          if (value.length > 10) {
              value = value.substring(0, 10) + '-' + value.substring(10);
          }
      }
      
      e.target.value = value;
  });
  
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      
      const cpf = document.getElementById('cpf').value;
      const senha = document.getElementById('senha').value;
      const confirmarSenha = document.getElementById('confirmarSenha').value;
      
      
      errorMessage.style.display = 'none';
      errorMessage.textContent = '';
      
     
      if (cpfsRegistrados.includes(cpf)) {
          errorMessage.textContent = 'Este CPF já está cadastrado no sistema.';
          errorMessage.style.display = 'block';
          return;
      }
      
      
      if (senha !== confirmarSenha) {
          errorMessage.textContent = 'As senhas não coincidem.';
          errorMessage.style.display = 'block';
          return;
      }
      
      // Se tudo estiver correto, simula o envio do formulário
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'index.html'; // Redireciona para a página de login
  });
});