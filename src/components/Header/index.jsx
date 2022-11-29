import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
        src="https://github.com/desenvjonathan.png" 
        alt="Foto de usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Jonathan Ramos</strong>
        </div>
      </Profile>
    </Container>
  )
}