import { Container, Links } from './styles.js'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Details/*TODO COMPONENTE PRECISA COMEÇAR COM LETRA MAIÚSCULA */(){
  
  return(
    /*Dentro de um componente, só podemos colocar UM elemento, nesse caso a Div
    e só com a Div que podemos colocar mais elementos dentro*/
    <Container>
      <Header/>
      
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="https://github.com/desenvjonathan">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonathan-ramos-p/">LinkedIn</a>
          </li>
        </Links>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
} 