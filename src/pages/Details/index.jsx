import { Container } from './styles.js'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details/*TODO COMPONENTE PRECISA COMEÇAR COM LETRA MAIÚSCULA */(){
  
  return(
    /*Dentro de um componente, só podemos colocar UM elemento, nesse caso a Div
    e só com a Div que podemos colocar mais elementos dentro*/
    <Container>
      <Header></Header>
      <Button title="Voltar"/>
    </Container>
  )
} 