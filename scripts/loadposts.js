const posts = [
    {
        "title": "EXPERIMENTANDO FERRAMENTAS: PRIMEIRAS IMPRESSÕES DO VUEJS",
        "date": "31 de Dezembro de 2022",
        "summary": `
            <center>
            <img src="https://vuejs.org/images/logo.png" width="250px" height="250px">
            </center>
            <p>A estrutura básica de um componente Vue é bem intuitiva, sendo dividida em três seções. Uma para o template, que é onde vai ficar o HTML dele, uma para o script, onde vai ficar o código JavaScript/TypeScript que vai possibilitar a adição de ações e comportamentos e o style, que permitirá a estilização.</p>
        `,
        "content": `
            <p>Para este projeto, optei por usar o framework Tailwind para a estilização. Mesmo a estrutura dos componentes sendo intuitiva, ela se difere muito do padrão a que estava acostumado e foi preciso aprender uma nova forma de estruturá-los, mas isso não me levou mais que no máximo cinco minutos. O bom é que os componentes do Vue são facilmente reutilizáveis. Para importá-los em qualquer outra parte do código, a sintaxe é a mesma que a de importar módulos em TypeScript.</p>
            
            <p>O primeiro componente que criei foi o da header da página. Ele vai ser bem simples, só mostrar o título do site, algum ícone aleatório que eu achar na internet e uma descrição. Não tive muita dificuldade nessa parte, usei somente HTML e classes Tailwind. Ah, falando nas classes, uma coisa que gostei no Vue é que ele usa class e não className, tornando-o mais próximo do HTML real. O Tailwind achei bem intuitivo, mas vou deixar pra falar dele num outro post futuramente.</p>
            
            <p>Não me agradou a forma que o Vue organiza as variáveis e métodos, forçando o programador a colocá-las dentro do data e do methods. Por mais que isso torne o código mais organizado, prefiro a liberdade que o React me proporciona para colocar as variáveis e declarar as funções onde eu bem entender.</p>
            
            <p>Apesar disso, o Vue é um framework que é eu definitivamente usaria em algum projeto meu e recomendaria. Ele não é ruim, mas talvez por eu estar mais acostumado ao React, isso tenha afetado o meu julgamento do framework. Para iniciantes no mundo dos frameworks JS, recomendo fortemente o Vue, por ser simples, minimalista e possuir uma curva de aprendizado bem pequena.</p>
        `
    },
    {
        "title": "FICTOC++: C++ COM SINTAXE MODERNA!",
        "date": "18 de Dezembro de 2022",
        "summary": `
            <center>
                <img width="150px" height="150px" src="https://github.com/Redwars22/fictocpp/blob/main/assets/fictocpp.png?raw=true">
            </center>
            <p>
                O FictoC++ é uma "linguagem de programação" criada por mim e um amigo meu (o repositório dele
                você pode acessar <a class="link-info" href="https://github.com/gabrielficto">clicando aqui</a>). 
                O intuito dela era basicamente ser uma linguagem para uso em projetos pessoais nossos e também ser 
                uma versão mais moderna do C++, seguindo a tendência sintática de algumas linguagens mais modernas, 
                como TypeScript, Rust, Carbon e Swift.
            </p>
        `,
        "content": `
            <p>
                Para criar o FictoC++, usei uma abordagem diferente da que usei no Titanium e Arctic. Essas que mencionei
                eram interpretadas. Já o FictoC++ não é executado diretamente. O código fonte escrito nessa linguagem é convertido
                em C++ (usando um método chamado transpilação, igual acontece com o TypeScript) e esse código transformado em C++
                é compilado usando o g++ e então é gerado um executável. Entendo, pode ser que esse processo leve mais tempo do que se 
                o FictoC++ fosse compilado diretamente para linguagem de máquina. Porém, como no final de todo o processo é gerado um
                executável em que o programa pode ser executado diretamente sem a necessidade de um interpretador, acaba havendo um ganho
                de desempenho com relação ao Titanium e ao Arctic.
            </p>
            <p>
                No que tange à sintaxe, bem, inspirei-me em linguagens mais modernas. A tipagem da maioria dos elementos é feita depois do identificador,
                igual é feito em TypeScript. Eis aqui o exemplo de uma variável do tipo boolean: <code>isOnline : boo = false;</code>. O tipo de retorno da função
                também possui uma sintaxe inspirada no Rust, no Carbon, no Kotlin e no Swift. Veja aqui o exemplo de uma função que retorna um valor inteiro:
                <code>
                fun returnANumber() -> bi32 {
                    ret 16;
                }
                </code>
            </p>
            <p>
                E aí, ficou com vontade de testar e ver como funciona? <a class="link-danger" href="https://github.com/Redwars22/fictocpp">CLIQUE AQUI E VISITE O REPO OFICIAL!</a>
            </p>
        `
    }
];

let data = "";

posts.forEach(post => {
    data += `
    <div class="card text-bg-dark">
        <div>
            <div class="card-body">
                <h3 class="card-title title-font">${post.title}</h3>
                <hr />
                <article class="title-font">
                    ${post.summary}
                    <details>
                        <summary>Clique para ler mais!</summary>
                        ${post.content}
                    </details>
                    <hr />
                    <span><em>publicado em ${post.date}</em></span>
                </article>
            </div>
        </div>
    </div>
    `;
});

function searchPosts(){
    document.querySelector(".posts-area").innerHTML = "";
    data = "";

    const query = document.querySelector("#search-input").value;

    for(let post = 0; post < posts.length; post++){
        if(
            (posts[post].summary).toLowerCase().includes(query.toLowerCase()) ||
            (posts[post].content).toLowerCase().includes(query.toLowerCase()) ||
            (posts[post].title).toLowerCase().includes(query.toLowerCase())
        )
            data += `
                <div class="card text-bg-dark">
                    <div>
                        <div class="card-body">
                            <h3 class="card-title title-font">${posts[post].title}</h3>
                            <hr />
                            <article class="title-font">
                                ${posts[post].summary}
                                <details>
                                    <summary>Clique para ler mais!</summary>
                                    ${posts[post].content}
                                </details>
                                <hr />
                                <span><em>publicado em ${posts[post].date}</em></span>
                            </article>
                        </div>
                    </div>
                </div>
            `;
    }

    if(data == ""){
        data += `<div class="card text-bg-dark" style="opacity: 0.7">
            <div>
                <div class="card-body">
                    <center>
                        <h3 class="card-title title-font">
                            <i class="bi bi-emoji-frown" style="font-size: 12rem; color: orange"></i>
                        </h3>
                        <h3 class="card-title title-font">
                            Ihh, mano, acho que o que tu tava procurando não tem aqui!
                        </h3>
                    </center>
                </div>
            </div>
        </div>`;

        document.querySelector(".posts-area").innerHTML = data;
        return;
    }

    document.querySelector(".posts-area").innerHTML = data;
}

document.querySelector(".posts-area").innerHTML = data + document.querySelector(".posts-area").innerHTML;