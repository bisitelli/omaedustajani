import React, { useState } from 'react';
import './App.css';

const questions = [
  { id: 1, text: 'Minkä ikäinen olet?', options: ['18-24 vuotta', '25-45 vuotta', 'Yli 45 vuotta'] },
  { id: 2, text: 'Millainen auto sinulla on?', options: ['Urheiluauto, nopeus ennen kaikkea!', 'Maasturi, haluan ajaa missä tahansa säässä ja maastossa.', 'Sähköauto, ympäristöystävällisyys ja uudet innovaatiot kiinnostavat.', 'Sedan/farmari, luotan klassiseen ja varmaan valintaan.'] },
  { id: 3, text: 'Kuinka vanha autosi on?', options: ['6-10 vuotta vanha - luotettava kaveri.', '3–5 vuotta vanha – edelleen hyvässä kunnossa.', 'Yli 10 vuotta vanha – vanha, mutta uskollinen.', 'Alle 2 vuotta vanha – uutuuden huumaa!'] },
  { id: 4, text: 'Missä ajat eniten?', options: ['Maaseudulla tai pienemmillä teillä – rauhallista, mutta joskus yllätyksiä kuten eläimiä tiellä.', 'Siellä sun täällä – ei ole tiettyä ajomaastoa.', 'Moottoriteillä tai pitkää matkaa – pitkät ajomatkat ja nopeat väylät.', 'Suunnitelen reitin vain, jos en tunne aluetta - muuten tiedän jo parhaat reitit.'] },
  { id: 5, text: 'Miten suhtaudut aamuruuhkaan?', options: ['En stressaa – ajan rauhassa ruuhkienkin keskellä.', 'Yritän löytää oikoreitin ja välttää turhaa odottelua.', 'Pärjäilen, kunhan olen valmistautunut ja reitti on tuttu.', 'Suunnittelen reittini etukäteen ja lähden ajoissa – turvallisuus ennen kaikkea.'] },
  { id: 6, text: 'Miten valmistaudut pitkään ajomatkaan?', options: ['Otan vain välttämättömät tavarat mukaan ja lähden matkaan.', 'Spontaani lähtö on parasta – mitä enemmän seikkailua, sen parempi.', 'Käyn läpi perusasiat, mutta en liioittele valmisteluja.', 'Tarkistan auton huolellisesti ja varmistan, että kaikki on kunnossa.'] },
  { id: 7, text: 'Kuinka huolissasi olet onnettomuuksista?', options: ['Vakuutukset ovat ylimitoitettuja – en usko, että niitä tarvitsen.', 'Haluan olla täysin varautunut – kaikenlaiset vahingot on parasta vakuuttaa.', 'Varaudun isoihin riskeihin, mutta en stressaa liikaa pienistä asioista.', 'Ajattelen, että elämässä sattuu ja tapahtuu, enkä murehdi etukäteen.'] },
  { id: 8, text: 'Miten tärkeänä pidät autosi vakuutusta?', options: ['Erittäin tärkeä – haluan parhaan suojan.', 'Tärkeä, mutta hinta on ratkaiseva.', 'En kovin tärkeänä, minulle riittää perustason vakuutus.'] },
];

function Questions({ answers, setAnswers, onNextStep }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [fade, setFade] = useState('fade-in'); // Alkuarvo 'fade-in'

  const handleAnswer = (answer) => {
    // Asetetaan fade-out, jotta kysymys katoaa hitaasti
    setFade('fade-out');

    // Viivästetyn ajan jälkeen vaihdetaan kysymys ja asetetaan fade-in
    setTimeout(() => {
      setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        onNextStep(); // Siirry tulokseen
      }
      setFade('fade-in'); // Fade-in uuden kysymyksen tullessa esiin
    }, 500); // Ajan (500ms) on oltava sama kuin CSS-transitiolla
  };

  return (
    <div className={`container-questions ${fade}`}>
      <h2>{questions[currentQuestion].text}</h2>
      <div className='vastaus-vaihto-ehdot'>
        {questions[currentQuestion].options.map((option, index) => (
          <button className='vastaus-button' key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <p className='birra-solutions'>Powered by Birra Solutions</p>
    </div>
  );
}

export default Questions;
