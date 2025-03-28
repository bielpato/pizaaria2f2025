import { useState } from "react";

function App() {

  const [nome, setNome] = useState("Menphis depau")

  // var nome = "Yuri Alberto"
  
  return (
    <div>
      <h3>Pizaria 2F</h3>
      <input 
        className = "nome"
        name = "nome"
         onChange={(e)=>{setNome(e.target.value)}}
        placeholder="Digite um nome..."
        type="text" />
      <button 
         className="botao"
         onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
  )
}

export default App