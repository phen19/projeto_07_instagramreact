function Suggestion(props){
    return(
        <div className="sugestao">
              <div className="usuario">
                <img src={props.image} />
                <div className="texto">
                  <div className="nome">{props.title}</div>
                  <div className="razao">{props.reason}</div>
                </div>
              </div>

              <div className="seguir">Seguir</div>
            </div>

    )


}

const suggestion = [ {image : "img/bad.vibes.memes.svg", title: "bad.vibes.memes", reason:"Segue você", id:1},
                {image : "img/chibirdart.svg", title: "chibirdart", reason:"Segue você", id:2},
                {image : "img/razoesparaacreditar.svg", title: "razoesparaacreditar", reason:"Novo no Instagram", id:3},
                {image : "img/adorable_animals.svg", title: "adorable_animals", reason:"Segue você", id:4},
                {image : "img/smallcutecats.svg", title: "smallcutecats", reason:"Segue você", id:5},
                ]


export default function Suggestions(){
    return (
        <div className = "sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {suggestion.map(suggestion=> <Suggestion image={suggestion.image} title={suggestion.title} reason={suggestion.reason} key={suggestion.id}/>) }
        </div>
    );

}