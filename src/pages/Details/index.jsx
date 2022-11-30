import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function Details/*TODO COMPONENTE PRECISA COMEÇAR COM LETRA MAIÚSCULA */() {

  return (
    /*Dentro de um componente, só podemos colocar UM elemento, nesse caso a Div
    e só com a Div que podemos colocar mais elementos dentro*/
    <Container>
      <Header />

      <main> {/*foi definido para deixar o header fixo em cima e 
      criar uma barra de rolagem só para o main*/}
        <Content>{/*foi definido para criar uma largura máxima de 550px para o 
        texto ficar dentro desse conteúdo*/}
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1
          500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but 
          also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
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
            <Tag title="Express" />
            <Tag title="NodeJS" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
} 