let professores = [
  { username: 'prof1@NovaGenesis.edu.br', password: 'pass1' },
  { username: 'prof2@NovaGenesis.edu.br', password: 'pass2' }
]

let alunos = [{ username: '1234567', password: 'pass1' }]

let loginButton = document.getElementById('loginButton')
let form = document.getElementById('loginForm')
form.addEventListener('submit', e => e.preventDefault())
loginButton.addEventListener('click', login)

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

  user = alunos.find(u => u.username === username && u.password === password)
  if (user) {
    console.log('Login bem-sucedido como aluno!')
  } else {
    console.log('Credenciais inválidas. Tente novamente.')
  }
}
