import {
  createDiv, createImage, createP, createHR,
} from './scripts.js';

const speakerData = [
  {
    id: 0,
    Name: 'H.E. Prof. Peter Anyang Nyongo',
    Position: 'Governor of Kisumu County, Kenya',
    Content: 'Governor Professor Peter Anyang’ Nyong’o is the current governor for Kisumu County after the 2017 general election. He is the former Senator for Kisumu County and the Secretary General of the Orange Democratic Movement.',
    Image: './images/speakers/Peter Anyang Nyongo.jpg',
  },
  {
    id: 1,
    Name: 'Prof Benard Muok',
    Position: 'Professor/Director, Directorate of Research, Innovation and Partnerships',
    Content: 'Director of Centre for Research, Innovation and Technology (CRIT), Jaramogi Oginga Odinga University of Science and Technology. Prior to this I was the Programmes African Centre for Technology Studies (ACTS) and Deputy Centre Director, Kenya Forestry Research Institute (KEFRI).',
    Image: './images/speakers/Benard_Muok.jpg',
  },
  {
    id: 2,
    Name: 'Amb. Jean Kimani',
    Position: 'Kenya&quot;s Permanent Representative to the United Nations Human Settlements Programme (UN-HABITAT)',
    Content: 'Amb. Jean Kimani as the Founder and Lead Consultant of Tukuza Africa is leading a team that will provide strategic counsel in the Great Lakes Region and Horn of Africa on Conflict Management and Resolution, Mediation , Public policy analysis , Change management, Governance , Gender Issues and Development.',
    Image: './images/speakers/1_Amb_ Jean Kimani_ Permanent Representative.webp',
  },
  {
    id: 3,
    Name: 'H.E. Ali Hassan Joho',
    Position: 'Governor of Mombasa County, Kenya',
    Content: 'First governor of Mombasa County and is serving his second five-year term after successfully defending his seat on the August 8th 2017. Governor Joho was first elected on March 4th, 2013 polls. Prior to that he served as Member of Parliament for Kisauni Constituency between 2007 and 2013.',
    Image: './images/speakers/ali-hasan-joho.jpg',
  },
  {
    id: 4,
    Name: 'H.E. Lee Kinyanjui',
    Position: 'Governor of Nakuru County, Kenya',
    Content: 'H.E Hon Governor Lee Kinyanjui is a graduate of Kenyatta University and University of Nairobi. He is a holder a Masters Degree in Business Administration and Masters in International Relations.',
    Image: './images/speakers/Lee-Kinyanjui.jpg',
  },
  {
    id: 5,
    Name: 'H.E. Jackson Mandago',
    Position: 'Governor of Uasin Gishu County, Kenya',
    Content: 'Kenyan politician who currently serves as the first Governor of Uasin Gishu County in Kenya. He was first elected Governor in 2013 and re-elected in 2017 for his second and final term.',
    Image: './images/speakers/mandago.jpg',
  },
];

const homeSection = document.getElementById('home');

const speakerDiv = createDiv('featured-speakers');

const speakerContainer = createDiv('speaker-container');

const title = createDiv('title');
title.innerHTML = 'Featured Speakers';

const titleHR = createHR('line-title');

speakerDiv.appendChild(title);
speakerDiv.appendChild(titleHR);

function populateFeaturedSpeakers(index) {
  const speakerCard = createDiv('speaker-card');

  const imageContainer = createDiv('image-container');

  const image = createImage(speakerData[index].Image, speakerData[index].Name, 'speaker');

  const cardText = createDiv('card-text');

  const cardTitle = createDiv('card-title');
  cardTitle.innerHTML = speakerData[index].Name;

  cardText.appendChild(cardTitle);

  const cardSubtitle = createDiv('card-subtitle');
  cardSubtitle.innerHTML = speakerData[index].Position;

  cardText.appendChild(cardSubtitle);

  const cardHR = createHR('line-subtitle');

  cardText.appendChild(cardHR);

  const p = createP('card-description');
  p.innerHTML = speakerData[index].Content;

  cardText.appendChild(p);

  imageContainer.appendChild(image);

  speakerCard.appendChild(imageContainer);
  speakerCard.appendChild(cardText);
  speakerContainer.appendChild(speakerCard);
}

window.onload = () => {
  homeSection.appendChild(speakerDiv);

  for (let i = 0; i < speakerData.length; i += 1) {
    populateFeaturedSpeakers(i);
  }

  speakerDiv.appendChild(speakerContainer);
};