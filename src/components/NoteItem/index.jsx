import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

export function NoteItem({ isNew, value, onClick, ...rest}){
  return(
    <Container isNew={isNew}>
      <input
      type="text"
      value={value}
      readOnly={!isNew} /*APENAS para leitura, para não poder editar*/
      {...rest}
      />

      <button 
      type="button"
      onClick={onClick}
      >
        {isNew ? <FiPlus/> : <FiX/>} {/*SE É NOVO ÍCONE DE ADICIONAR, SENÃO, ÍCONE DE REMOVER*/}
      </button>
    </Container>
  )
}