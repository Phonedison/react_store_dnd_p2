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

          <Div className="titulo">SEJA BEM VINDO</Div>

          

        <Div className="cartao" onClick={() => navigate('/monsters')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">👹</Div>
                  <Div className="titulo">MONSTROS</Div>
                </Div>
              </Div>
            </Div>

            <Div className="cartao" onClick={() => navigate('/itens')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">⚔️</Div>
                  <Div className="titulo">ITENS</Div>
                </Div>
              </Div>
            </Div>

         <Div className="cartao" onClick={() => navigate('/ficha')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">📜</Div>
                  <Div className="titulo">CRIAR FICHA</Div>
                </Div>
              </Div>
            </Div>

            <Div className="cartao" onClick={() => navigate('/usersPage')}>
              <Div className="cartao-interno">
                <Div className="cartao-frente">
                  <Div className="titulo">👤</Div>
                  <Div className="titulo">PERFIL</Div>
                </Div>
              </Div>
            </Div>

          

          <Div className="container-botoes">
            <Button
              className="button confirm"
              onClick={() => navigate('/monsters')}
            >
              Começar Aventura
            </Button>
          </Div>

        </Div>
      </Div>
    </>
  )
}