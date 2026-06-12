import { useNavigate } from 'react-router'
import { Div } from '../../components/Div'
 import { Button } from '../../components/Button'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <title>D&D - Home</title>

      <Div className="container">
        <Div className="borda-rabisco">

         <Div className="cabecalho">
          <Div className="titulo-cabecalho">
            <Div className="titulo-home">
              <h1>ESCOLHA SEU CAMINHO</h1>
            </Div>
           </Div>
            <Button className = "button cancel" onClick={() => navigate('/login')}>SAIR</Button>
        </Div>


         <Div className="em-linha">      
          <Div className="cartao" onClick={() => navigate('/monsters')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">👹</Div>
                  <Div className="titulo">GALERIA DE MONSTROS</Div>
                </Div>
              </Div>
            </Div>
           

            <Div className="cartao" onClick={() => navigate('/itens')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">⚔️</Div>
                  <Div className="titulo">GALERIA DE ITENS</Div>
                </Div>
              </Div>
            </Div>
            

         <Div className="cartao" onClick={() => navigate('/ficha')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">📜</Div>
                  <Div className="titulo">CRIE SUA FICHA</Div>
                </Div>
              </Div>
            </Div>

            <Div className="cartao" onClick={() => navigate('/usersPage')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">👤</Div>
                  <Div className="titulo">ACESSE SEU PERFIL</Div>
                </Div>
              </Div>
            </Div>
            </Div>

            <Div className="em-linha"> 
            <Div className="cartao" onClick={() => navigate('/mestre')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">🧙</Div>
                  <Div className="titulo">ÁREA PARA MESTRES</Div>
                </Div>
              </Div>
            </Div>

            <Div className="cartao" onClick={() => navigate('/mesa')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">🎲</Div>
                  <Div className="titulo">CRIAÇÃO DE MESA</Div>
                </Div>
              </Div>
            </Div>
 
            
          </Div>


        </Div>
      </Div>
    </>
  )
}