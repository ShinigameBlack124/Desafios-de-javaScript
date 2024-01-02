let dataAtual = new Date();

// Extrair dia, mês e ano da data
let dia = dataAtual.getDate();
let mes = dataAtual.getMonth() + 1; // Lembrando que os meses são indexados de 0 a 11
let ano = dataAtual.getFullYear();

// Formatar o mês para dois dígitos se for menor que 10
let mesFormatado = mes < 10 ? `0${mes}` : mes;

// Criar a string da data no formato "dd/mm/aaaa"
let dataFormatada = `${dia}/${mesFormatado}/${ano}`;

export default function App() {
  return (
    console.log('Data formatada:', dataFormatada),
    console.log('Dia:', dia),
    console.log('Mês:', mes),
    console.log('Ano:', ano)
  );
}
