export default function ComParametro(params) {
    const status = params.nota >= 7 ? 'Aprovado' : 'em Exame'
    return (

        <div>
            <h2>{params.titulo}</h2>
            <h3> O Exímio aluno {params.aluno} obteve nota final igual a {params.nota}</h3>
            <h4>Portanto este aluno está {status}</h4>
            <p>****************************************************************************</p>
        </div>
    )

}