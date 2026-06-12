// import { useNavigate } from 'react-router'
import { Div } from '../../components/Div'
// import { Button } from '../../components/Button'
import { Navbar } from '../../components/Header'

export const Home = () => {
  

  return (
    <>
      <title>D&D - Home</title>

      
       <Navbar title={"Início"} /> 
      <Div className="home-container" >
         <Div className="cabecalho" >
          
          <Div className="titulo-home">
             <h1>BEM VINDO À AVENTURA!</h1>
           </Div>
          </Div>
       

       <Div className= "info-home-card">     
        <Div className="titulo-home">
             <h3>O que é Dungeons and Dragons?</h3>
        </Div>
        <h1>Dungeons & Dragons (D&D) é o RPG de mesa mais famoso do mundo, onde a imaginação é o limite. Neste jogo, os participantes assumem o papel de heróis 
           únicos e embarcam em aventuras épicas repletas de magia, mistérios, criaturas fantásticas e desafios emocionantes. Guiados por um Mestre de Jogo, 
           os jogadores exploram mundos incríveis, tomam decisões que influenciam a história e utilizam dados para determinar o resultado de suas ações.
           Mais do que um simples jogo, D&D incentiva a criatividade, o trabalho em equipe e a construção de narrativas inesquecíveis. 
           Seja enfrentando dragões, explorando masmorras antigas ou desvendando conspirações em reinos distantes, cada sessão oferece uma experiência única, 
           moldada pelas escolhas dos próprios jogadores.
           Descubra um universo de aventuras sem limites e viva histórias que você jamais esquecerá! 
           </h1>
       </Div>
       </Div>
    
            
            
            
            
        


      
    </>
  )
}