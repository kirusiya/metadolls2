import React, {useState,useEffect} from 'react'
import styles from'../styles/Navbar.module.css'

const Nabvar = () => {
    const size = useWindowSize();
    const [toggleMenu, setToggleMenu] = useState(false);
    const imprimir = ()=>{
        console.log('ajam')
    };
    
    let colorsito = false
    return (
        <nav className={styles.navbar}> 
        
        <ul style={{marginBottom:'0px',padding:'10px'}}>
          
              {/* <div className={styles.frame}>
              
              MetaDolls
              </div> */}
          
          
            <li className={styles.navbarLogo}><img src='image2.jpeg' style={{width:'120px'}}/> {/* {size.width}px / {size.height}px */}</li>
            { size.width<600 ? <button className={["btn btn-primary btn-sm"]}>Discord</button> : null }
            <li className={styles.navbarToggle} onClick={()=>{setToggleMenu(!toggleMenu)
            console.log('ajaamamm')
            console.log(toggleMenu)}}><img src='menu.png' className={styles.menuLogo}/></li>
            {/* <li className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a href='#'></a></li> */}
            {/* <li onClick={()=>{imprimir()}} className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a href='#'>Join to Discord</a></li> */}
            <li className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a style={{color: "rgb(0, 162, 255)",fontWeight:'bold'}} href='#about'>About</a></li>
            <li className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a style={{color: "rgb(0, 162, 255)",fontWeight:'bold'}} href='#'>RoadMap</a></li>
            <li className={toggleMenu ? styles.navbarLinks2 : styles.navbarLinks}><a style={{color: "rgb(0, 162, 255)",fontWeight:'bold'}} href='#'>FAQs</a></li>  
            { size.width>600 ? <button className={["btn btn-primary btn-sm "]}>Join our Discord</button> : null }
          
            {/* <button className="btn btn-primary m-3">Join our Discord</button>
            <a href="https://discord.com/invite/mekaverse" name="discordnav" rel="noopener" target="_blank" class="discord row"></a> */}
        </ul>
        </nav>
    )
}

export default Nabvar
/*  style={colorsito ? { color: 'green'} : {color:'black'}} */


// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  /* 
  
  # Contenido de Pagina Web

**Main headline**

"All people look at me like "the perfect Doll" and I want more than that..." - MetaDoll 0001

**Project Description**

"I want to be the unexpected, stereotypes would never define me again!" - MetaDoll 0001

**MetaDolls** is an NFT Collection Project based on the Polygon network. It's comprised of 7000 randomly generated 3D hyper realistic dolls with the possibility to get a phisical version.

It’s a proposal which combines pop culture, the nostalgic “Doll” concept and the NFT technology to expose the body as the mix between all instances of culture and where it’s possible to define our own identity and build our own language from there.

The **MetaDolls** make up a metaverse of artistic expressions through their changes in their body. Face Tatts, Nose rings, golden chains, meme tatts on their shoulders, mohawks are examples of ways **MetaDolls** decide to express themselves.

Not only would you be getting an NFT but by holding our **MetaDolls** you would be elegible to get a phisical version of your Doll later on through an exclusive digital boutique only accesible to wallets holding the NFT. 

**Roadmap**

"Rebellion against the perfect blonde is inked on my skin and in the color of my hair." - **MetaDoll** 0001

- Whitelist
    - 1000 spots and elegible for 2 MetaDolls per wallet
    - We’ll be dropping
- Main Drop
    - **Minting** TBA Mid-February
    - Reveal **- MetaDolls**
- **DAO**
    - We’ll be building a DAO with all MetaDoll holders to develop our community shaped just as the community wants. We believe that these NFT projects should add value to the community not only through amazing art but also through real world and metaverse experiences. We’ll be part of a team and we’ll create our own set of values our goals.
    - We have a lot prepaired already and as options for development given the success of the project itself
- **Real World**
    - Boutique for real world hand made **MetaDolls** with real jewelry only accessible to **NFT Holders**
- **Metaverse Tattoo Shop**
    - We’ll be creating a tattoo shop on the metaverse were you can bring your NFTs for us to give them a new tattoo as well as your **MetaDolls**
- **Evolving Dolls**
    - Coming Soon
    

**Team**

Artist

Coder

BizDev

**FAQ**

**How was the project born?**

This project is created by colombian artist Alejandro Rincón, tattoo artist for over 7 years. It explores the link and effect that tattoos have in the construction of our identity now a days.

The body is represented by the Dolls, iconic objects fabricated in mass and registered in series, which results comparable to the characteristics of human condition in today's world. Additionally the tattoo is done over the inorganic base as an artistic expression and a form of customization, which offers a way of identification or differentiation. 

**MetaDolls** reúne los conceptos de cuerpo, marca y tatuaje, a través de un proceso de investigación – creación, que indaga sobre la interrelación entre ellas y su influencia en la construcción significativa de los cuerpos en la sociedad contemporánea. A su vez, plantea el tatuaje como una práctica artística que busca transformar al individuo.

Actualmente, los modelos y patrones culturales se han ido transformando y adoptando nuevas formas de vestir o de lucir; las modificaciones corporales de tipo artístico como lo son los tatuajes y los piercings, hacen parte de estos cambios y por ende, han despertado un interés social; con el tiempo han dejado de ser estigmatizados y su uso se ha normalizado, enmarcando una serie de patrones culturales que también han sufrido modificaciones y variaciones en la actualidad, tomando nuevas formas en la cultura moderna, las contraculturas , la cultura pop y ahora la cryptocultura.

De este modo, las **MetaDolls** son esa propuesta que transgrede los modelos y patrones tradicionales del cuerpo y la belleza. A su vez, son una exploración a las nuevas identidades y expresiones artísticas que nacen desde la necesidad de representación del ser humano. Cuando el cuerpo cambia, comunica distinto y, este tipo de comunicaciones también transforman el lenguaje mismo de la cultura.

**Who is the artist?**

**Minting Price?** 

0.04 WETH

**Royalties?**

3%

**Which blockchain is the collection going to be minted at?**

We chose Polygon for this dies project. We believe strongly on Ethereum as a Layer 1 for everything awesome that is happening with the growing development and artistic community and Polygon is a great layer 2 solution to reduce gas fees and increase current adoption.

**Launch Date?** - Mid Feb. 

**What is the phisical doll?** (Luxury)

We will be launching a digital boutique on the metaverse only accesible to **MetaDoll** holders. There you would be able to purchase a hand made physical version of your Doll with the actual tattoos, jewelry made out of gold, platinum, swarosky and a variety of other things. 

**Join Our Community


Headline

10k modelos que viven en el metaverso, que aburridas y cansadas de su cotidianidad se atrevieron a transformar su cuerpo y su rostro a través de tatuajes, piercings y modificaciones artísticas. Modelos que imponen una nueva tendencia donde confluyen arte, moda, cultura-pop y crypto-cultura, como universos donde es posible explorar nuevas formas de identidad.

10k models who live in the metaverse, bored and tired of their daily lives, dare to transform their body and face through tattoos, piercings and artistic modifications. Models that impose a new trend where art, fashion, pop culture and crypto culture come together as a universe where you can explore new ways to portray your identity.


____________________________________________________________________

Main Explanation
Tattoo-Barby, es un proyecto de colecciones NFT creadas normativamente en el blockchain de Ethereum. Es una propuesta donde combinan la cultura pop, el concepto Barbie y la tecnología NFT, para exponer el cuerpo como ese cruce de todas las instancias de la cultura, en donde es posible definir nuestra propia identidad y construir ahí, nuestro propio lenguaje.
Nuestras BARBIES componen un universo de expresiones artísticas donde a través de  modificaciones personalizadas del cuerpo y el rostro, es posible crear perspectivas de identificación y diferenciación, dentro de la cultura moderna. (Ejemplos de Barbies con cada rareza.)

TattooBarby is an NFT Collection Project based on the Ethereum network. It’s a proposal which combines pop culture, the nostalgic “Doll” concept and the NFT technology to expose the body as the mix between all instances of culture and where it’s possible to define our own identity and build our own language from there.
The barbies make up a metaverse of artistic expressions through their changes in their body. Face Tatts, Nose rings, golden chains, meme tatts on their shoulders, mohawks are examples of ways Barbies decide to express themselves.

Slider de Barbies -

Roadmap
200 Golden Tickets
1 Free NFT for every drop
25 Raffle for Discord Community
Main Drop
Barbies Normales - Todas Iguales
Burn to Mint - TattooBarbies
Real World
Boutique for real world items only accessible to NFT Barby Holders
DAO
Main Drop
New Rebels (Artist Collab Drop)
Tattoo Mini Game - Play 2 Earn
Main Drop
New Rebels (Barbies-Kens)


Roadmap:

Project Description

7000k Dolls living in the metaverse have just had enough.
They are bored and tired of their daily lives.
They dare to transform their body and face through tattoos, piercings and artistic modifications.
They are MetaDolls that impose a new trend where art, fashion, pop culture and crypto culture come together as a universe where you can explore new ways to portray your identity.
***/