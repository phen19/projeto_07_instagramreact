import React from "react";

function Post(props){
    const [cor, setCor] = React.useState(
                                            <ion-icon
                                            name="heart-outline"
                                            onClick={() => check('heart-outline')}
                                            ></ion-icon>
                                        );

    //Havia colocaro class="curtido" no ion-icon heart, mas ao tentar corrigir pra classNamee eliminar os erros do log, o estilo não aplicava. Alterei pra color="danger"
      function check(elemento) {
        elemento === 'heart-outline' ? setCor(
                                        <ion-icon
                                        color="danger"
                                        name="heart"
                                        onClick={() => check('heart')}
                                        ></ion-icon>
                                        )

                                    :   setCor(
                                            <ion-icon
                                            name="heart-outline"
                                            onClick={() => check('heart-outline')}
                                            ></ion-icon>
                                        );
      }
     
    //não foi possível acessar o props name direto na arrowfunction da linha 42, declarando uma variavel e atribuindo o valor foi a maneira mais fácil de se contornar  
    const name = cor.props.name;
    return(
        <div className="post">
                        <div className="topo">
                        <div className="usuario">
                            <img src={props.userImage} alt={props.title}/>
                            {props.title}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                        </div>

                        <div className="conteudo">
                        <img src={props.postImage} onClick={() => check(name)}/>
                        </div>

                        <div className="fundo">
                        <div className="acoes">
                            <div>
                            {cor}
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="curtidas">
                            <img src={props.likeImage}/>
                            <div className="texto">
                            Curtido por <strong>{props.likes}</strong> e <strong>{props.totalLikes}</strong>
                            </div>
                        </div>
                        </div>
                    </div>
    )


}

const post = [  {userImage : "img/meowed.svg", title: "meowed", postImage: "img/gato-telefone.svg", likeImage:"img/respondeai.svg", likes: "respondeai", totalLikes: "outras 101.523 pessoas", id : 1},
                {userImage : "img/barked.svg", title: "barked", postImage: "img/dog.svg", likeImage:"img/adorable_animals.svg", likes: "adorable_animals", totalLikes: "outras 99.159 pessoas", id: 2}
                ]



export default function Posts(){
    
    return (
        <div className = "posts">
            {post.map(post=> <Post userImage={post.userImage} title={post.title} postImage = {post.postImage} likeImage = {post.likeImage} likes = {post.likes} totalLikes ={post.totalLikes} key = {post.id}/>) }
        </div>
    );

}