const posts = [
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

document.querySelector(".posts-area").innerHTML = data + document.querySelector(".posts-area").innerHTML;