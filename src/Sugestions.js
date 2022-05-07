function Sugestion(props){
    return(
        <div class="sugestao">
              <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                  <div class="nome">{props.title}</div>
                  <div class="razao">{props.reason}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

    )


}

const sugestion = [ {image : "img/bad.vibes.memes.svg", title: "bad.vibes.memes", reason:"Segue você"},
                {image : "img/chibirdart.svg", title: "chibirdart", reason:"Segue você"},
                {image : "img/razoesparaacreditar.svg", title: "razoesparaacreditar", reason:"Novo no Instagram"},
                {image : "img/adorable_animals.svg", title: "adorable_animals", reason:"Segue você"},
                {image : "img/smallcutecats.svg", title: "smallcutecats", reason:"Segue você"},
                ]


export default function Sugestions(){
    return (
        <div class = "sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestion.map(sugestion=> <Sugestion image={sugestion.image} title={sugestion.title} reason={sugestion.reason}/>) }
        </div>
    );

}