import { Container } from './styles.js'
import { Button } from '../../components/Button'

export function Details/*TODO COMPONENTE PRECISA COMEÇAR COM LETRA MAIÚSCULA */(){
  
  return(
    /*Dentro de um componente, só podemos colocar UM elemento, nesse caso a Div
    e só com a Div que podemos colocar mais elementos dentro*/
    <Container>
      <h1>Hello World!</h1>
      <span>Jonathan</span>

      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
} 