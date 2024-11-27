async function fetchAlunos() {
  try {
      const response = await fetch('http://localhost:5174/api/alunos');
      const alunos = await response.json();

      const tbody = document.querySelector('#alunos-table tbody');
      tbody.innerHTML = ''; // Limpar qualquer dado existente

      alunos.forEach(aluno => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${aluno.ra}</td>
              <td>${aluno.nome}</td>
              <td>${aluno.educacenso}</td>
              <td>${aluno.datanacimento}</td>
              <td>${aluno.idade}</td>
              <td>${aluno.cpf}</td>
          `;
          tbody.appendChild(row);
      });
  } catch (error) {
      console.error('Erro ao buscar alunos:', error);
  }
}

// Chamar a função ao carregar a página
window.onload = fetchAlunos;
