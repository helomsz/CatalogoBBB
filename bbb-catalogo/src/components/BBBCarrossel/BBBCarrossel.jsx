import { useEffect, useRef, useState } from "react";
import { Crown, Mic, Calendar, Users } from "lucide-react";
import "./BBBCarrossel.css";
import bbb1 from "../../assets/edicoes/bbb1.png";
import bbb2 from "../../assets/edicoes/bbb2.png";
import bbb3 from "../../assets/edicoes/bbb3.png";
import bbb4 from "../../assets/edicoes/bbb4.png";
import bbb5 from "../../assets/edicoes/bbb5.png";
import bbb6 from "../../assets/edicoes/bbb6.png";
import bbb7 from "../../assets/edicoes/bbb7.png";
import bbb8 from "../../assets/edicoes/bbb8.png";
import bbb9 from "../../assets/edicoes/bbb9.png";
import bbb10 from "../../assets/edicoes/bbb10.png";
import bbb11 from "../../assets/edicoes/bbb11.png";
import bbb12 from "../../assets/edicoes/bbb12.png";
import bbb13 from "../../assets/edicoes/bbb13.png";
import bbb14 from "../../assets/edicoes/bbb14.png";
import bbb15 from "../../assets/edicoes/bbb15.png";
import bbb16 from "../../assets/edicoes/bbb16.png";
import bbb17 from "../../assets/edicoes/bbb17.png";
import bbb18 from "../../assets/edicoes/bbb18.png";
import bbb19 from "../../assets/edicoes/bbb19.png";
import bbb20 from "../../assets/edicoes/bbb20.png";
import bbb21 from "../../assets/edicoes/bbb21.png";
import bbb22 from "../../assets/edicoes/bbb22.png";
import bbb23 from "../../assets/edicoes/bbb23.png";
import bbb24 from "../../assets/edicoes/bbb24.png";
import bbb25 from "../../assets/edicoes/bbb25.png";
import bbb26 from "../../assets/edicoes/bbb26.png";

const edicoes = [
  {
    id: 1,
    nome: "BBB 1",
    ano: 2002,
    participantes: 12,
    campeao: "Kleber Bambam",
    apresentador: "Pedro Bial",
    imagem: bbb1,
  },
  {
    id: 2,
    nome: "BBB 2",
    ano: 2002,
    participantes: 12,
    campeao: "Rodrigo “Cowboy”",
    apresentador: "Pedro Bial",
    imagem: bbb2,
  },
  {
    id: 3,
    nome: "BBB 3",
    ano: 2003,
    participantes: 12,
    campeao: "Dhomini Ferreira",
    apresentador: "Pedro Bial",
    imagem: bbb3,
  },
  {
    id: 4,
    nome: "BBB 4",
    ano: 2004,
    participantes: 12,
    campeao: "Cida Santos",
    apresentador: "Pedro Bial",
    imagem: bbb4,
  },
  {
    id: 5,
    nome: "BBB 5",
    ano: 2005,
    campeao: "Jean Wyllys",
    apresentador: "Pedro Bial",
    imagem: bbb5,
  },
  {
    id: 6,
    nome: "BBB 6",
    ano: 2006,
    participantes: 12,
    campeao: "Mara Viana",
    apresentador: "Pedro Bial",
    imagem: bbb6,
  },
  {
    id: 7,
    nome: "BBB 7",
    ano: 2007,
    participantes: 12,
    campeao: "Diego Alemão",
    apresentador: "Pedro Bial",
    imagem: bbb7,
  },
  {
    id: 8,
    nome: "BBB 8",
    ano: 2008,
    participantes: 12,
    campeao: "Rafinha Ribeiro",
    apresentador: "Pedro Bial",
    imagem: bbb8,
  },
  {
    id: 9,
    nome: "BBB 9",
    ano: 2009,
    participantes: 12,
    campeao: "Max Porto",
    apresentador: "Pedro Bial",
    imagem: bbb9,
  },
  {
    id: 10,
    nome: "BBB 10",
    ano: 2010,
    participantes: 17,
    campeao: "Marcelo Dourado",
    apresentador: "Pedro Bial",
    imagem: bbb10,
  },
  {
    id: 11,
    nome: "BBB 11",
    ano: 2011,
    participantes: 19,
    campeao: "Maria Melilo",
    apresentador: "Pedro Bial",
    imagem: bbb11,
  },
  {
    id: 12,
    nome: "BBB 12",
    ano: 2012,
    participantes: 16,
    campeao: "Fael Cordeiro",
    apresentador: "Pedro Bial",
    imagem: bbb12,
  },
  {
    id: 13,
    nome: "BBB 13",
    ano: 2013,
    participantes: 21,
    campeao: "Fernanda Keulla",
    apresentador: "Pedro Bial",
    imagem: bbb13,
  },
  {
    id: 14,
    nome: "BBB 14",
    ano: 2014,
    participantes: 20,
    campeao: "Vanessa Mesquita",
    apresentador: "Pedro Bial",
    imagem: bbb14,
  },
  {
    id: 15,
    nome: "BBB 15",
    ano: 2015,
    participantes: 15,
    campeao: "Cézar Lima",
    apresentador: "Pedro Bial",
    imagem: bbb15,
  },
  {
    id: 16,
    nome: "BBB 16",
    ano: 2016,
    participantes: 16,
    campeao: "Munik Nunes",
    apresentador: "Pedro Bial",
    imagem: bbb16,
  },
  {
    id: 17,
    nome: "BBB 17",
    ano: 2017,
    participantes: 17,
    campeao: "Emilly Araújo",
    apresentador: "Tiago Leifert ",
    imagem: bbb17,
  },
  {
    id: 18,
    nome: "BBB 18",
    ano: 2018,
    participantes: 19,
    campeao: "Gleici Damasceno",
    apresentador: "Tiago Leifert ",
    imagem: bbb18,
  },
  {
    id: 19,
    nome: "BBB 19",
    ano: 2019,
    participantes: 17,
    campeao: "Paula von Sperling",
    apresentador: "Tiago Leifert ",
    imagem: bbb19,
  },
  {
    id: 20,
    nome: "BBB 20",
    ano: 2020,
    participantes: 20,
    campeao: "Thelma Assis",
    apresentador: "Tiago Leifert ",
    imagem: bbb20,
  },
  {
    id: 21,
    nome: "BBB 21",
    ano: 2021,
    participantes: 20,
    campeao: "Julliete Freire",
    apresentador: "Tiago Leifert ",
    imagem: bbb21,
  },
  {
    id: 22,
    nome: "BBB 22",
    ano: 2022,
    participantes: 20,
    campeao: "Arthur Aguiar",
    apresentador: "Tadeu Schmidt",
    imagem: bbb22,
  },
  {
    id: 23,
    nome: "BBB 23",
    ano: 2023,
    participantes: 20,
    campeao: "Amanda Meirelles",
    apresentador: "Tadeu Schmidt",
    imagem: bbb23,
  },
  {
    id: 24,
    nome: "BBB 24",
    ano: 2024,
    participantes: 26,
    campeao: "Davi Brito",
    apresentador: "Tadeu Schmidt",
    imagem: bbb24,
  },
  {
    id: 25,
    nome: "BBB 25",
    ano: 2025,
    participantes: 24,
    campeao: "Renata Saldanha",
    apresentador: "Tadeu Schmidt",
    imagem: bbb25,
  },
  {
    id: 26,
    nome: "BBB 26",
    ano: 2026,
    participantes: 25,
    campeao: "Em andamento",
    apresentador: "Tadeu Schmidt",
    imagem: bbb26,
  },
];

const edicoesLoop = [
  {
    id: 1,
    nome: "BBB 1",
    ano: 2002,
    participantes: 12,
    campeao: "Kleber Bambam",
    apresentador: "Pedro Bial",
    imagem: bbb1,
  },
  {
    id: 2,
    nome: "BBB 2",
    ano: 2002,
    participantes: 12,
    campeao: "Rodrigo “Cowboy”",
    apresentador: "Pedro Bial",
    imagem: bbb2,
  },
  {
    id: 3,
    nome: "BBB 3",
    ano: 2003,
    participantes: 12,
    campeao: "Dhomini Ferreira",
    apresentador: "Pedro Bial",
    imagem: bbb3,
  },
  {
    id: 4,
    nome: "BBB 4",
    ano: 2004,
    participantes: 12,
    campeao: "Cida Santos",
    apresentador: "Pedro Bial",
    imagem: bbb4,
  },
  {
    id: 5,
    nome: "BBB 5",
    ano: 2005,
    campeao: "Jean Wyllys",
    apresentador: "Pedro Bial",
    imagem: bbb5,
  },
  {
    id: 6,
    nome: "BBB 6",
    ano: 2006,
    participantes: 12,
    campeao: "Mara Viana",
    apresentador: "Pedro Bial",
    imagem: bbb6,
  },
  {
    id: 7,
    nome: "BBB 7",
    ano: 2007,
    participantes: 12,
    campeao: "Diego Alemão",
    apresentador: "Pedro Bial",
    imagem: bbb7,
  },
  {
    id: 8,
    nome: "BBB 8",
    ano: 2008,
    participantes: 12,
    campeao: "Rafinha Ribeiro",
    apresentador: "Pedro Bial",
    imagem: bbb8,
  },
  {
    id: 9,
    nome: "BBB 9",
    ano: 2009,
    participantes: 12,
    campeao: "Max Porto",
    apresentador: "Pedro Bial",
    imagem: bbb9,
  },
  {
    id: 10,
    nome: "BBB 10",
    ano: 2010,
    participantes: 17,
    campeao: "Marcelo Dourado",
    apresentador: "Pedro Bial",
    imagem: bbb10,
  },
  {
    id: 11,
    nome: "BBB 11",
    ano: 2011,
    participantes: 19,
    campeao: "Maria Melilo",
    apresentador: "Pedro Bial",
    imagem: bbb11,
  },
  {
    id: 12,
    nome: "BBB 12",
    ano: 2012,
    participantes: 16,
    campeao: "Fael Cordeiro",
    apresentador: "Pedro Bial",
    imagem: bbb12,
  },
  {
    id: 13,
    nome: "BBB 13",
    ano: 2013,
    participantes: 21,
    campeao: "Fernanda Keulla",
    apresentador: "Pedro Bial",
    imagem: bbb13,
  },
  {
    id: 14,
    nome: "BBB 14",
    ano: 2014,
    participantes: 20,
    campeao: "Vanessa Mesquita",
    apresentador: "Pedro Bial",
    imagem: bbb14,
  },
  {
    id: 15,
    nome: "BBB 15",
    ano: 2015,
    participantes: 15,
    campeao: "Cézar Lima",
    apresentador: "Pedro Bial",
    imagem: bbb15,
  },
  {
    id: 16,
    nome: "BBB 16",
    ano: 2016,
    participantes: 16,
    campeao: "Munik Nunes",
    apresentador: "Pedro Bial",
    imagem: bbb16,
  },
  {
    id: 17,
    nome: "BBB 17",
    ano: 2017,
    participantes: 17,
    campeao: "Emilly Araújo",
    apresentador: "Tiago Leifert ",
    imagem: bbb17,
  },
  {
    id: 18,
    nome: "BBB 18",
    ano: 2018,
    participantes: 19,
    campeao: "Gleici Damasceno",
    apresentador: "Tiago Leifert ",
    imagem: bbb18,
  },
  {
    id: 19,
    nome: "BBB 19",
    ano: 2019,
    participantes: 17,
    campeao: "Paula von Sperling",
    apresentador: "Tiago Leifert ",
    imagem: bbb19,
  },
  {
    id: 20,
    nome: "BBB 20",
    ano: 2020,
    participantes: 20,
    campeao: "Thelma Assis",
    apresentador: "Tiago Leifert ",
    imagem: bbb20,
  },
  {
    id: 21,
    nome: "BBB 21",
    ano: 2021,
    participantes: 20,
    campeao: "Julliete Freire",
    apresentador: "Tiago Leifert ",
    imagem: bbb21,
  },
  {
    id: 22,
    nome: "BBB 22",
    ano: 2022,
    participantes: 20,
    campeao: "Arthur Aguiar",
    apresentador: "Tadeu Schmidt",
    imagem: bbb22,
  },
  {
    id: 23,
    nome: "BBB 23",
    ano: 2023,
    participantes: 20,
    campeao: "Amanda Meirelles",
    apresentador: "Tadeu Schmidt",
    imagem: bbb23,
  },
  {
    id: 24,
    nome: "BBB 24",
    ano: 2024,
    participantes: 26,
    campeao: "Davi Brito",
    apresentador: "Tadeu Schmidt",
    imagem: bbb24,
  },
  {
    id: 25,
    nome: "BBB 25",
    ano: 2025,
    participantes: 24,
    campeao: "Renata Saldanha",
    apresentador: "Tadeu Schmidt",
    imagem: bbb25,
  },
  {
    id: 26,
    nome: "BBB 26",
    ano: 2026,
    participantes: 25,
    campeao: "Em andamento",
    apresentador: "Tadeu Schmidt",
    imagem: bbb26,
  },

  {
    id: 1,
    nome: "BBB 1",
    ano: 2002,
    participantes: 12,
    campeao: "Kleber Bambam",
    apresentador: "Pedro Bial",
    imagem: bbb1,
  },
  {
    id: 2,
    nome: "BBB 2",
    ano: 2002,
    participantes: 12,
    campeao: "Rodrigo “Cowboy”",
    apresentador: "Pedro Bial",
    imagem: bbb2,
  },
  {
    id: 3,
    nome: "BBB 3",
    ano: 2003,
    participantes: 12,
    campeao: "Dhomini Ferreira",
    apresentador: "Pedro Bial",
    imagem: bbb3,
  },
  {
    id: 4,
    nome: "BBB 4",
    ano: 2004,
    participantes: 12,
    campeao: "Cida Santos",
    apresentador: "Pedro Bial",
    imagem: bbb4,
  },
  {
    id: 5,
    nome: "BBB 5",
    ano: 2005,
    campeao: "Jean Wyllys",
    apresentador: "Pedro Bial",
    imagem: bbb5,
  },
  {
    id: 6,
    nome: "BBB 6",
    ano: 2006,
    participantes: 12,
    campeao: "Mara Viana",
    apresentador: "Pedro Bial",
    imagem: bbb6,
  },
  {
    id: 7,
    nome: "BBB 7",
    ano: 2007,
    participantes: 12,
    campeao: "Diego Alemão",
    apresentador: "Pedro Bial",
    imagem: bbb7,
  },
  {
    id: 8,
    nome: "BBB 8",
    ano: 2008,
    participantes: 12,
    campeao: "Rafinha Ribeiro",
    apresentador: "Pedro Bial",
    imagem: bbb8,
  },
  {
    id: 9,
    nome: "BBB 9",
    ano: 2009,
    participantes: 12,
    campeao: "Max Porto",
    apresentador: "Pedro Bial",
    imagem: bbb9,
  },
  {
    id: 10,
    nome: "BBB 10",
    ano: 2010,
    participantes: 17,
    campeao: "Marcelo Dourado",
    apresentador: "Pedro Bial",
    imagem: bbb10,
  },
  {
    id: 11,
    nome: "BBB 11",
    ano: 2011,
    participantes: 19,
    campeao: "Maria Melilo",
    apresentador: "Pedro Bial",
    imagem: bbb11,
  },
  {
    id: 12,
    nome: "BBB 12",
    ano: 2012,
    participantes: 16,
    campeao: "Fael Cordeiro",
    apresentador: "Pedro Bial",
    imagem: bbb12,
  },
  {
    id: 13,
    nome: "BBB 13",
    ano: 2013,
    participantes: 21,
    campeao: "Fernanda Keulla",
    apresentador: "Pedro Bial",
    imagem: bbb13,
  },
  {
    id: 14,
    nome: "BBB 14",
    ano: 2014,
    participantes: 20,
    campeao: "Vanessa Mesquita",
    apresentador: "Pedro Bial",
    imagem: bbb14,
  },
  {
    id: 15,
    nome: "BBB 15",
    ano: 2015,
    participantes: 15,
    campeao: "Cézar Lima",
    apresentador: "Pedro Bial",
    imagem: bbb15,
  },
  {
    id: 16,
    nome: "BBB 16",
    ano: 2016,
    participantes: 16,
    campeao: "Munik Nunes",
    apresentador: "Pedro Bial",
    imagem: bbb16,
  },
  {
    id: 17,
    nome: "BBB 17",
    ano: 2017,
    participantes: 17,
    campeao: "Emilly Araújo",
    apresentador: "Tiago Leifert ",
    imagem: bbb17,
  },
  {
    id: 18,
    nome: "BBB 18",
    ano: 2018,
    participantes: 19,
    campeao: "Gleici Damasceno",
    apresentador: "Tiago Leifert ",
    imagem: bbb18,
  },
  {
    id: 19,
    nome: "BBB 19",
    ano: 2019,
    participantes: 17,
    campeao: "Paula von Sperling",
    apresentador: "Tiago Leifert ",
    imagem: bbb19,
  },
  {
    id: 20,
    nome: "BBB 20",
    ano: 2020,
    participantes: 20,
    campeao: "Thelma Assis",
    apresentador: "Tiago Leifert ",
    imagem: bbb20,
  },
  {
    id: 21,
    nome: "BBB 21",
    ano: 2021,
    participantes: 20,
    campeao: "Julliete Freire",
    apresentador: "Tiago Leifert ",
    imagem: bbb21,
  },
  {
    id: 22,
    nome: "BBB 22",
    ano: 2022,
    participantes: 20,
    campeao: "Arthur Aguiar",
    apresentador: "Tadeu Schmidt",
    imagem: bbb22,
  },
  {
    id: 23,
    nome: "BBB 23",
    ano: 2023,
    participantes: 20,
    campeao: "Amanda Meirelles",
    apresentador: "Tadeu Schmidt",
    imagem: bbb23,
  },
  {
    id: 24,
    nome: "BBB 24",
    ano: 2024,
    participantes: 26,
    campeao: "Davi Brito",
    apresentador: "Tadeu Schmidt",
    imagem: bbb24,
  },
  {
    id: 25,
    nome: "BBB 25",
    ano: 2025,
    participantes: 24,
    campeao: "Renata Saldanha",
    apresentador: "Tadeu Schmidt",
    imagem: bbb25,
  },
  {
    id: 26,
    nome: "BBB 26",
    ano: 2026,
    participantes: 25,
    campeao: "Em andamento",
    apresentador: "Tadeu Schmidt",
    imagem: bbb26,
  },

  {
    id: 1,
    nome: "BBB 1",
    ano: 2002,
    participantes: 12,
    campeao: "Kleber Bambam",
    apresentador: "Pedro Bial",
    imagem: bbb1,
  },
  {
    id: 2,
    nome: "BBB 2",
    ano: 2002,
    participantes: 12,
    campeao: "Rodrigo “Cowboy”",
    apresentador: "Pedro Bial",
    imagem: bbb2,
  },
  {
    id: 3,
    nome: "BBB 3",
    ano: 2003,
    participantes: 12,
    campeao: "Dhomini Ferreira",
    apresentador: "Pedro Bial",
    imagem: bbb3,
  },
  {
    id: 4,
    nome: "BBB 4",
    ano: 2004,
    participantes: 12,
    campeao: "Cida Santos",
    apresentador: "Pedro Bial",
    imagem: bbb4,
  },
  {
    id: 5,
    nome: "BBB 5",
    ano: 2005,
    campeao: "Jean Wyllys",
    apresentador: "Pedro Bial",
    imagem: bbb5,
  },
  {
    id: 6,
    nome: "BBB 6",
    ano: 2006,
    participantes: 12,
    campeao: "Mara Viana",
    apresentador: "Pedro Bial",
    imagem: bbb6,
  },
  {
    id: 7,
    nome: "BBB 7",
    ano: 2007,
    participantes: 12,
    campeao: "Diego Alemão",
    apresentador: "Pedro Bial",
    imagem: bbb7,
  },
  {
    id: 8,
    nome: "BBB 8",
    ano: 2008,
    participantes: 12,
    campeao: "Rafinha Ribeiro",
    apresentador: "Pedro Bial",
    imagem: bbb8,
  },
  {
    id: 9,
    nome: "BBB 9",
    ano: 2009,
    participantes: 12,
    campeao: "Max Porto",
    apresentador: "Pedro Bial",
    imagem: bbb9,
  },
  {
    id: 10,
    nome: "BBB 10",
    ano: 2010,
    participantes: 17,
    campeao: "Marcelo Dourado",
    apresentador: "Pedro Bial",
    imagem: bbb10,
  },
  {
    id: 11,
    nome: "BBB 11",
    ano: 2011,
    participantes: 19,
    campeao: "Maria Melilo",
    apresentador: "Pedro Bial",
    imagem: bbb11,
  },
  {
    id: 12,
    nome: "BBB 12",
    ano: 2012,
    participantes: 16,
    campeao: "Fael Cordeiro",
    apresentador: "Pedro Bial",
    imagem: bbb12,
  },
  {
    id: 13,
    nome: "BBB 13",
    ano: 2013,
    participantes: 21,
    campeao: "Fernanda Keulla",
    apresentador: "Pedro Bial",
    imagem: bbb13,
  },
  {
    id: 14,
    nome: "BBB 14",
    ano: 2014,
    participantes: 20,
    campeao: "Vanessa Mesquita",
    apresentador: "Pedro Bial",
    imagem: bbb14,
  },
  {
    id: 15,
    nome: "BBB 15",
    ano: 2015,
    participantes: 15,
    campeao: "Cézar Lima",
    apresentador: "Pedro Bial",
    imagem: bbb15,
  },
  {
    id: 16,
    nome: "BBB 16",
    ano: 2016,
    participantes: 16,
    campeao: "Munik Nunes",
    apresentador: "Pedro Bial",
    imagem: bbb16,
  },
  {
    id: 17,
    nome: "BBB 17",
    ano: 2017,
    participantes: 17,
    campeao: "Emilly Araújo",
    apresentador: "Tiago Leifert ",
    imagem: bbb17,
  },
  {
    id: 18,
    nome: "BBB 18",
    ano: 2018,
    participantes: 19,
    campeao: "Gleici Damasceno",
    apresentador: "Tiago Leifert ",
    imagem: bbb18,
  },
  {
    id: 19,
    nome: "BBB 19",
    ano: 2019,
    participantes: 17,
    campeao: "Paula von Sperling",
    apresentador: "Tiago Leifert ",
    imagem: bbb19,
  },
  {
    id: 20,
    nome: "BBB 20",
    ano: 2020,
    participantes: 20,
    campeao: "Thelma Assis",
    apresentador: "Tiago Leifert ",
    imagem: bbb20,
  },
  {
    id: 21,
    nome: "BBB 21",
    ano: 2021,
    participantes: 20,
    campeao: "Julliete Freire",
    apresentador: "Tiago Leifert ",
    imagem: bbb21,
  },
  {
    id: 22,
    nome: "BBB 22",
    ano: 2022,
    participantes: 20,
    campeao: "Arthur Aguiar",
    apresentador: "Tadeu Schmidt",
    imagem: bbb22,
  },
  {
    id: 23,
    nome: "BBB 23",
    ano: 2023,
    participantes: 20,
    campeao: "Amanda Meirelles",
    apresentador: "Tadeu Schmidt",
    imagem: bbb23,
  },
  {
    id: 24,
    nome: "BBB 24",
    ano: 2024,
    participantes: 26,
    campeao: "Davi Brito",
    apresentador: "Tadeu Schmidt",
    imagem: bbb24,
  },
  {
    id: 25,
    nome: "BBB 25",
    ano: 2025,
    participantes: 24,
    campeao: "Renata Saldanha",
    apresentador: "Tadeu Schmidt",
    imagem: bbb25,
  },
  {
    id: 26,
    nome: "BBB 26",
    ano: 2026,
    participantes: 25,
    campeao: "Em andamento",
    apresentador: "Tadeu Schmidt",
    imagem: bbb26,
  },
];

const BBBCarrossel = () => {
  const TOTAL = edicoes.length;
  const INICIO = TOTAL;

  const [ativo, setAtivo] = useState(INICIO);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);


  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setAtivo((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(timeoutRef.current);
  }, []);


  useEffect(() => {
    const container = containerRef.current;
    const card = container?.children[ativo];
    if (!container || !card) return;

    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;

    const scrollLeft = card.offsetLeft - containerWidth / 2 + cardWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [ativo]);


  useEffect(() => {
    if (!containerRef.current) return;

    // passou do fim do bloco central
    if (ativo === TOTAL * 2) {
      setTimeout(() => {
        containerRef.current.scrollTo({ left: 0, behavior: "auto" });
        setAtivo(INICIO);
      }, 700);
    }

    // voltou antes do início
    if (ativo === INICIO - 1) {
      setTimeout(() => {
        containerRef.current.scrollTo({ left: 0, behavior: "auto" });
        setAtivo(TOTAL * 2 - 1);
      }, 700);
    }
  }, [ativo]);

  const resetAutoPlay = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setAtivo((prev) => prev + 1);
    }, 4500);
  };

  return (
    <section className="secao carrosselBBB">
      <h2 className="secaoTituloEdicoes">Edições do BBB</h2>

      <div className="carrosselContainer" ref={containerRef}>
        {edicoesLoop.map((edicao, index) => (
          <div
            key={`${edicao.id}-${index}`}
            className={`cardEdicao ${index === ativo ? "ativo" : ""}`}
            style={{ backgroundImage: `url(${edicao.imagem})` }}
            onClick={() => {
              setAtivo(index === ativo ? ativo + 1 : index);
              resetAutoPlay();
            }}
          >
            <div className="overlay" />

            <div className="cardConteudo">
              <h3>{edicao.nome}</h3>

              <div className="metaLinha">
                <span>
                  <Calendar size={14} />
                  {edicao.ano}
                </span>
                <span>
                  <Users size={14} />
                  {edicao.participantes} participantes
                </span>
              </div>

              <div className="infoLinha">
                <div className="campeao">
                  <Crown size={18} />
                  <span>{edicao.campeao}</span>
                </div>

                <div className="apresentadorTag">
                  <Mic size={14} />
                  <span>{edicao.apresentador}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BBBCarrossel;
