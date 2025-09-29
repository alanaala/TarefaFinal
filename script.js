let professores = [
  { username: 'prof1@NovaGenesis.edu.br', password: 'pass1' },
  { username: 'prof2@NovaGenesis.edu.br', password: 'pass2' }
]

let alunos = [
  {
    cpf: '1234567',
    nome: 'Aluno1',
    turma: 'A',
    ra: '7654321',
    anoEscolar: '1° Ano',
    password: 'aluno1pass'
  }
]

let loginButton = document.getElementById('loginButton')
let form = document.getElementById('loginForm')
form.addEventListener('submit', e => e.preventDefault())
loginButton.addEventListener('click', login)

function cadastrarAluno() {
  let cpf = document.getElementById('newCpf').value
  let nome = document.getElementById('newNome').value
  let turma = document.getElementById('newTurma').value
  let ra = document.getElementById('newRa').value
  let anoEscolar = document.getElementById('newAnoEscolar').value

  if (ra.length !== 7) {
    console.log('RA deve ter 7 caracteres.')
    return
  }

  if (isNaN(ra)) {
    console.log('RA deve ser numérico.')
    return
  }

  let senha = document.getElementById('newSenha')
  senha.innerText = gerarSenha()
  alunos.push({ cpf, nome, turma, ra, anoEscolar, password: senha.value })
  console.log('Aluno cadastrado com sucesso:', {
    cpf,
    nome,
    turma,
    ra,
    anoEscolar,
    password: senha.value
  })
}

function gerarSenha() {
  let senha = Math.random().toString(36).slice(-8)
  document.getElementById('newSenha').value = senha
  console.log('Senha gerada: ' + senha)
  return senha
}

function login() {
  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  let user = professores.find(
    u => u.username === username && u.password === password
  )

  if (user) {
    console.log('Login bem-sucedido como professor!')
    return
  }

  user = alunos.find(u => u.nome === username && u.password === password)
  if (user) {
    console.log('Login bem-sucedido como aluno!')
  } else {
    console.log('Credenciais inválidas. Tente novamente.')
  }
}
