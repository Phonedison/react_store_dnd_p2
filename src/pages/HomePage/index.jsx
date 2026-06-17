import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Div } from '../../components/Div'
import { Button } from '../../components/Button'
import { Navbar } from '../../components/Header'

export const Home = () => {
  const navigate = useNavigate()
  const [loadingRota, setLoadingRota] = useState(null) 

  const handleNavegar = (rota) => {
    setLoadingRota(rota)                         
    setTimeout(() => {
      navigate(rota)
      setLoadingRota(null)                       
    }, 1000)                                      
  }

  return (
    <>
      <title>D&D - Home</title>
      <Navbar title={"Início"} />
      <Div className="home-container">

        <Div className="cabecalho">
          <Div className="titulo-home">
            <h1>Bem-vindo ao seu portal de aventuras D&D!</h1>
          </Div>
        </Div>

        <Div className="titulo-home">
              <h4>Crie e personalize seu personagem, organize mesas de jogo,  </h4>
              <h4>explore um vasto catálogo de itens e descubra criaturas fascinantes em um só lugar.</h4>
              <h4>Seja você um Mestre em busca de recursos para sua campanha ou  </h4>
              <h4>um aventureiro preparando seu próximo herói,</h4>
              <h4>nossa plataforma oferece as ferramentas </h4>
              <h4>necessárias para tornar suas histórias ainda mais épicas.</h4>
           </Div>

           <Div className="titulo-home">
             <h1>Um mundo de magia, mistérios e perigos espera por você.</h1>
           </Div>

           <Div className="titulo-home">
             <h2>Escolha sua próxima ação</h2>
           </Div>


        

        <Div className="home-grid">

          <Div className="card-home">
            <Div className="avatar-circular">
              <img src="https://thumbs.dreamstime.com/b/o-car%C3%A1ter-medieval-do-jogo-rpg-da-a%C3%A7%C3%A3o-fantasia-espada-protetor-cavaleiro-guerreiro-isolou-ilustra%C3%A7%C3%A3o-vetor-%C3%ADcone-122624694.jpg" alt="" />
            </Div>
            <Div className="titulo-home">
              <h3>Seu herói, sua história, suas escolhas.</h3>
              <h4>(Acesse seu perfil)</h4>
              <Button
                className="button navigation"
                onClick={() => handleNavegar('/usersPage')}
                disabled={loadingRota !== null} 
              >
                {loadingRota === '/usersPage' ? 'Aguarde...' : 'Explorar'} 
              </Button>
            </Div>
          </Div>

          <Div className="card-home">
            <Div className="avatar-circular">
              <img src="https://img.freepik.com/vetores-premium/design-de-logotipo-de-icone-de-monstro_775854-1726.jpg" alt="" />
            </Div>
            <Div className="titulo-home">
              <h3>Descubra criaturas e montros para usar em sua campanha</h3>
              <h4>(Apenas Mestres)</h4>
              <Button
                className="button navigation"
                onClick={() => handleNavegar('/monsters')}
                disabled={loadingRota !== null}
              >
                {loadingRota === '/monsters' ? 'Aguarde...' : 'Explorar'}
              </Button>
            </Div>
          </Div>

          <Div className="card-home">
            <Div className="avatar-circular">
              <img src="https://img.magnific.com/vetores-gratis/icones-do-jogo-com-navio-de-pocao-de-espada-de-capacete-viking_107791-13243.jpg?semt=ais_hybrid&w=740&q=80"  alt="" />
            </Div>
            <Div className="titulo-home">
              <h3>Explore equipamentos, tesouros e artefatos para sua jornada.</h3>
              <Button
                className="button navigation"
                onClick={() => handleNavegar('/itens')}
                disabled={loadingRota !== null}
              >
                {loadingRota === '/itens' ? 'Aguarde...' : 'Explorar'}
              </Button>
            </Div>
          </Div>

          <Div className="card-home">
            <Div className="avatar-circular">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPP6c7vS8bYfxPxEtrdnmOLbvlRHfJESiBQ&s" alt="" />
            </Div>
            <Div className="titulo-home">
              <h3>Crie um mundo, convide seus heróis e conte uma história épica.</h3>
              <h4>(Apenas Mestres)</h4>
              <Button
                className="button navigation"
                onClick={() => handleNavegar('/mesa')}
                disabled={loadingRota !== null}
              >
                {loadingRota === '/mesa' ? 'Aguarde...' : 'Explorar'}
              </Button>
            </Div>
          </Div>

          <Div className="card-home">
            <Div className="avatar-circular">
              <img src="https://st3.depositphotos.com/7438112/14031/v/450/depositphotos_140318540-stock-illustration-form-icon-on-white-background.jpg"
              alt="" />
            </Div>
            <Div className="titulo-home">
              <h3>Cada herói começa com uma história. Escreva a sua.</h3>
              <h4>(Crie uma ficha)</h4>
              <Button
                className="button navigation"
                onClick={() => handleNavegar('/ficha')}
                disabled={loadingRota !== null}
              >
                {loadingRota === '/ficha' ? 'Aguarde...' : 'Explorar'}
              </Button>
            </Div>
          </Div>

          <Div className="card-home">
            <Div className="avatar-circular">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXabDIT3M_z35MUkaVDQxzZF4wy1NObBBSd6VYqH0Xw&s" 
              alt="" />
            </Div>
            <Div className="titulo-home">
              <h3>Você não passará!</h3>
             
              <Button
                className="button navigation"
                onClick={() => handleNavegar('/masterPage')}
                disabled={loadingRota !== null}
              >
                {loadingRota === '/masterPage' ? 'Aguarde...' : 'Explorar'}
              </Button>
            </Div>
          </Div>

        </Div>
      </Div>
    </>
  )
}