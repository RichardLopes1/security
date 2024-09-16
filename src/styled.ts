import styled from "styled-components";
import imageSeguro from "./assets/seguro.png"
import imageFundoGuincho from "./assets/fundo_guincho.jpg"

export const NavMenu = styled.nav`

display: flex;
    align-items: center;
    background-color: #0095d4;
    width: 100%;
    height: 100px;

     
    h1{
        text-align: left;
        font-size: 40px;
    }

    h1 span{
        color: #03346E;
    }

    .links{
        display: flex;
        gap: 10px;
        justify-content: right;
        margin-right: 20px;
        margin-left: auto;
    }

    a{
        color:#fff;
        text-decoration: none;
    }

    span{
    
       
    }


`

export const FooterRodape = styled.footer`
    

    width: 100%;
    min-height: 5vh;
    background-color: #333;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        color: #fff;
        text-align: center;
    }   

`

export const MainGeral = styled.main`

    flex-grow: 1;
    width: 100%;
    padding: 20px;

    h1{
        text-align: center;
        color: darkred;
    }

    p{
        text-indent:20px;
    }

`

export const SectionDiferencial = styled.section`
.diferencial{
    background-color: #F5F7F8;
    border-radius: 5px;
}
#Titulo_diferencial{
    text-align: center;
    font-size: 20px;
}



p{
    text-indent: 20px;
}

h2{
    text-align: center;

}

/*fim dos paragrafos "conteudos"*/

 /*estilo card*/

 #Titulo_servicos{
    text-align: center;
    font-size: 20px;
 }

 .container-grid {
    display: flex;
    gap: 2.5rem;
    justify-content: center;

}

.container-grid a{
    text-decoration: none;
    color: black;
}

@keyframes animacao-card {
    from{
        background: white;
        
    }

    to{
        background: blue;
    }
}


.card {
    background-color: #ffffff;
    width: 15rem;
    height: 15rem; 
    text-align: center;
    border-radius: 5px;
    box-shadow: 20px 20px rgb(0,0,0,0.2);
    animation-name: animacao-card;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

.card img{
  justify-content: center;
  padding-top: 30px;
}


/*fim dos cards*/






.caixa2{/*inicio dos beneficios*/
    
    background-color: #F5F7F8;
    border-radius: 5px;
}



#texto1{
    text-align: center;
    font-size: 20px;
}


#beneficios{
    line-height: 1.8;
}

`

export const MainError = styled.main`

    flex-grow: 1;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bbb;

    h1{
        color:#f00;
        font-size: 4em;
        text-align: center;
    }

`


export const DivTitulo = styled.div`

text-align: center;
font-size: 20px;


`

export const DivContainer = styled.div`


    display: flex;
    gap: 2.5rem;
    justify-content: center;

    img{
        padding-top: 30px;
    }


`
export const DivCards = styled.div`
    background-color: blue;
    width: 15rem;
    height: 15rem; 
    text-align: center;
    border-radius: 5px;
    box-shadow: 20px 20px rgb(0,0,0,0.2);
    animation-name: animacao-card;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-direction: alternate;



.Titulo_servicos{
    text-align: center;
    font-size: 20px;
    color: white;
}



@keyframes animacao-card {
    from{
        background: white;
        
    }

    to{
        background: #0095d4;
    }
}

 .card {
    display: flex;
    
}

.card img{
    align-items: center;
  justify-content: center;
 
}
`

export const DivCaixa2 = styled.div`
margin-top: 100px;
background-color: #F5F7F8;
border-radius: 5px;
display: block;

.texto1{
    text-align: center;
    font-size: 20px;
}


.beneficios{
    line-height: 1.8;
}
`

export const MainSeguro = styled.main`
.conteudo{
    background-image: url(${imageSeguro}) ;
    background-repeat: no-repeat;
    width: 100%;
    height: 37rem;; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 4rem;

}

.conteudo h1{
   
    color: #ffffff;
    font-size: 70px;
  margin-bottom: 16px;
    
}

.conteudo p{
    color: #ffffff;
    font-size: 25px;
    line-height: 1.5;
}

.titulo{
    font-size: 1rem;
    margin-top: 2rem;
    justify-content: center;
    text-align: center;
}

.cobertura{
    display: flex;
    margin-top: 3rem;
    gap: 2.5rem;
    justify-content: center;
    
}

.cobertura .card{
    width: 15rem;
    height: 15rem; 
    text-align: center;
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
}
`

export const MainGuincho = styled.main`
.img_guincho{
    background-image: url(${imageFundoGuincho});

    background-size: 100%;
    background-position: center;
    height: 20rem;

    font-size: 2.5rem;
    padding: 50px;
    color: #ffffff;
}

.subtitulo_guincho{
    display: block;
}

.botao_whatsapp{
    height: 40px;
    width: 250px;
    background-color: #59ce72;
    color: #ffffff;
    border: none;
    border-radius: 5px;
}

/*estlização cards*/
.Container{
    display: flex;
    gap: 10rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1.5rem;

}

.Container .card{
    width: 12rem;
    height: 12rem;
    
}

.Container .card img{
    width: 4rem;
}

/*estilização conteudos*/


.servicos_rapido h4{
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;

}

.servicos_rapido p{
    text-align: center;
    font-size: 15px;
    padding: 0 170px 0 170px;
  
}





`

export const MainMecanica = styled.main`

.container{   
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    font-size: 17px;
    line-height: 2.3rem;
    margin-top: 2rem;
}

.container h1{
    font-weight:lighter;
}
.img_mecanico{
   
    margin-left: 2rem;
    
    
}

.img_mecanico img{
    height: 300px;
}

/*inicio dos cards*/

h2{
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 3rem;
}

.container .container-grid {
   
    gap: 2.5rem;

    justify-content: center;
   
    
}

.container-grid .card{
    display: flex;
    border: 1px solid black;
    
    font-size: 17px;
    border-radius: 10px;
    

}

.container-grid .card h3{
    border: 1px solid var(--preto);
    border-radius: 6px;
    background-color: var(--azul);
}

.container-grid .card p{
   padding: 33px;
    font-family: Arial, Helvetica, sans-serif;
}

.nome_cliente{
 display:flex;
 
 
 
}

.nome_cliente span{
    margin-top: 80px;
    font-weight:bold;  
}

.sobre{
   text-align: center;
   justify-content: center;
   font-size: 20px;
   padding: 0 300px;
   margin-top: 50px;
   font-weight: bolder;
   color: var(--azul_logo);
}

.logo_whatsapp{
    display: flex;
    flex-direction: row-reverse;
    height: 70px;
    margin-right: 30px;
}
`