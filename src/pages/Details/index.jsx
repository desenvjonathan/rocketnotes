import { Container, Links } from './styles.js'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function Details/*TODO COMPONENTE PRECISA COMEÇAR COM LETRA MAIÚSCULA */(){
  
  return(
    /*Dentro de um componente, só podemos colocar UM elemento, nesse caso a Div
    e só com a Div que podemos colocar mais elementos dentro*/
    <Container>
      <Header/>
      
      <ButtonText title="Excluir Nota"/>

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

      <Section title="Marcadores">
        <Tag title="Express"/>
        <Tag title="NodeJS"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
} 