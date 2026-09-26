const jogadores = [
  {
    numero: "01",
    nome: "Ernélio Fernando Chicovel",
    posicao: "Guarda-redes",
  },
  {
    numero: "02",
    nome: "Sistass Isaias Benzeco",
    posicao: "Guarda-redes",
  },
  {
    numero: "03",
    nome: "Anselmo Paulo Manhice",
    posicao: "Guarda-redes",
  },
  {
    numero: "04",
    nome: "Américo Sebastião",
    posicao: "Defesa",
  },
  {
    numero: "05",
    nome: "Joaquím Rui",
    posicao: "Defesa",
  },
  {
    numero: "06",
    nome: "Dérito Mário",
    posicao: "Defesa",
  },
  {
    numero: "07",
    nome: "Ferão Francisco",
    posicao: "Defesa",
  },
  {
    numero: "08",
    nome: "Lucas Fernando",
    posicao: "Defesa",
  },
  {
    numero: "09",
    nome: "Jornaldo Antônio",
    posicao: "Defesa",
  },
  {
    numero: "10",
    nome: "Bento  Finga",
    posicao: "Defesa",
  },
  {
    numero: "11",
    nome: "Francisco Antônio Pinto",
    posicao: "Defesa",
  },
  {
    numero: "12",
    nome: "Dinho Micas",
    posicao: "Defesa",
  },
  {
    numero: "13",
    nome: "Gomes da Marta Joa",
    posicao: "Médio",
  },
  {
    numero: "14",
    nome: "Ilton Romeu",
    posicao: "Médio",
  },
  {
    numero: "15",
    nome: "Adilson da Marcela",
    posicao: "Médio",
  },
  {
    numero: "16",
    nome: "Dércio Domingos",
    posicao: "Médio",
  },
  {
    numero: "17",
    nome: "Pedro Aroni",
    posicao: "Médio",
  },
  {
    numero: "18",
    nome: "Judício Jaime Bento",
    posicao: "Médio",
  },
  {
    numero: "19",
    nome: "José Sebastião",
    posicao: "Médio",
  },
  {
    numero: "20",
    nome: "Francisco Pedro Jacob",
    posicao: "Médio",
  },
  {
    numero: "21",
    nome: "Simone Ernesto",
    posicao: "Avançado",
  },
  {
    numero: "22",
    nome: "Abichaide José Amatsenhe",
    posicao: "Avançado",
  },
  {
    numero: "23",
    nome: "Salvador Felipe Simango",
    posicao: "Avançado",
  },
  {
    numero: "24",
    nome: "Chelson Fernado Bojane",
    posicao: "Avançado",
  },
  {
    numero: "25",
    nome: "Moisés Finga Gundane",
    posicao: "Avançado",
  },
];

const listDeJogadores = document.querySelector(".jogadores");

jogadores.forEach((jogador) => {
  listDeJogadores.innerHTML += `
  <div class="jogador">
     <span class="numero-do-jogador">${jogador.numero}</span>

     <span class="nome-do-jogador">${jogador.nome}</span>
     <span class="posicao-do-jogador">${jogador.posicao}</span>
   </div>`;
});
// foto: "./logo-udm.jpg",
// <img src="${jogador.foto}" alt="${jogador.nome}" class="foto-do-jogador" />
