import { useNavigate } from 'react-router'
import { Div } from '../../components/Div'
// import { Button } from '../../components/Button'
import { Navbar } from '../../components/Header'

export const Home = () => {
    const navigate = useNavigate()

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
       
      <Div className = "em-linha">
      <Div className="cartao" onClick={() => navigate('/usersPage')}>
      <Div className="cartao-interno">
        <Div className="cartao-frente">
          <Div className="avatar-circular">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXabDIT3M_z35MUkaVDQxzZF4wy1NObBBSd6VYqH0Xw&s" 
            alt="" />
          </Div>
          </Div> 
        </Div>
     </Div>
   
        <Div className = "titulo-home"><h3>CRIE OU EDITE SEU PERSONAGEM</h3></Div>
         </Div>
    
    <Div className = "em-linha">
    <Div className="cartao" onClick={() => navigate('/usersPage')}>
      <Div className="cartao-interno">
        <Div className="cartao-frente">
          <Div className="avatar-circular" onClick={() => navigate('/monsters')}>
            <img src="https://img.freepik.com/vetores-premium/design-de-logotipo-de-icone-de-monstro_775854-1726.jpg" 
            alt="" />
          </Div>
          
        </Div>
      </Div>
    </Div>
        <Div className = "titulo-home"><h3>DESCRUBRA OS MONTROS QUE O ESPERAM EM SUA JORNADA</h3> </Div>
  </Div>
        
   <Div className = "em-linha">
    <Div className="cartao" onClick={() => navigate('/mesa')}>
      <Div className="cartao-interno">
        <Div className="cartao-frente">
          <Div className="avatar-circular" onClick={() => navigate('/usersPage')}>
            <img src="https://img.magnific.com/vetores-gratis/icones-do-jogo-com-navio-de-pocao-de-espada-de-capacete-viking_107791-13243.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="" />
          </Div>
          
        </Div>
      </Div>
    </Div>
     <Div className = "titulo-home"><h3>DESCUBRA ITENS ÚTEIS PARA SUAS AVENTURAS</h3> 
        <h5>Durante sua jornada, precisará de toda ajuda possivel</h5>
     </Div>
  </Div>

        <Div className = "em-linha">
    <Div className="cartao" onClick={() => navigate('/mesa')}>
      <Div className="cartao-interno">
        <Div className="cartao-frente">
          <Div className="avatar-circular" onClick={() => navigate('/usersPage')}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPP6c7vS8bYfxPxEtrdnmOLbvlRHfJESiBQ&s" 
            alt="" />
          </Div>
          
        </Div>
      </Div>
    </Div>
     <Div className = "titulo-home"><h3>CRIE UMA MESA PARA COMEÇAR A JOGAR</h3> 
     <h5>Crie uma mesa para começar a sua aventura</h5>
     </Div>
  </Div>
   

    </Div>

          
       

       
      
    
            
            
            
            
        


      
    </>
  )
}