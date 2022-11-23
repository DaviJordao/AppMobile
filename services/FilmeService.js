import meusFilmes from "../dados";

var base_filmes = meusFilmes;
var ocorreuAlteracao = false;

export function listarFilmes() {
    console.debug(`${base_filmes.length} filmes listados`);
    base_filmes.sort((a, b) => a?.nome.localeCompare(b?.nome));
    return base_filmes;
}
export function selecionarFilmes({ id }) {
    const filmeSelecionado = base_filmes.find(filmes => filmes.id === id);
    console.debug(`filmes ${filmeSelecionado} selecionado pela chave ${id}`);
}
export function inserirFilme({ novoFilme }) {
    console.debug(`filmes ${ novoFilme} cadastrado`);
    const novaChave = Math.floor(Math.random() * 100000);
    novoFilme.id = novaChave;
    base_filmes.push(novoFilme);
    ocorreuAlteracao = true;
}
export function alterarFilme(Filmes) {
    console.info(` Não implementado`);
}
export function ExcluirFilmes({id}) {
    console.debug(`filmes ${id} excluido`);
    base_filmes = base_filmes.filter(function(value, index, arr) {
        return value?.id !== id;
    });
    ocorreuAlteracao = true;
    console.debug(`Filmes após exclusão ${base_filmes}`);
    
}
