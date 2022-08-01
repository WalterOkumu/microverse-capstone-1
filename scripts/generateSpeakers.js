import {
  createDiv, createImage, createP, createHR, createButton,
} from './scripts.js';

const speakerData = [
  {
    id: 0,
    Name: 'Yochai Benkler',
    Position: 'Professor at Harvard Law School',
    Content: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
    Image: './images/speaker_01.png',
  },
  {
    id: 1,
    Name: 'Jeon Gil-nam',
    Position: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    Content: 'By developing Asia&apos;s first Internet protocol network SDN and leading Korea&apos;s first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
    Image: './images/speaker_02.png',
  },
  {
    id: 2,
    Name: 'Noh So-young',
    Position: 'Art Center Nabi Director, CC Korea Director',
    Content: 'As the author of <Digital Art Art of Our Time>, he opened &apos;Art Center Nabi&apos;, Korea&apos;s first digital art institution in 2000, and is currently serving',
    Image: './images/speaker_03.png',
  },
  {
    id: 3,
    Name: 'Julia Leda',
    Position: 'Head of the Young Pirates of Europe',
    Content: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU&apos;s copyright law in July.',
    Image: './images/speaker_04.png',
  },
  {
    id: 4,
    Name: 'Layla Trettikov',
    Position: 'Secretary General of the Wikimedia Foundation',
    Content: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world&apos;s population.',
    Image: './images/speaker_05.png',
  },
  {
    id: 5,
    Name: 'Ryan Merkley',
    Position: 'Creative Commons CEO, Former Mozilla Foundation COO',
    Content: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
    Image: './images/speaker_06.png',
  },
];

const speakerSection = document.getElementById('home');

const featuredSpeakers = createDiv('featured-speakers');

const title = createDiv('title');

title.innerHTML = 'Featured Speakers';

featuredSpeakers.appendChild(title);

const titleHR = createHR('line-title');

featuredSpeakers.appendChild(titleHR);

function generateCard(index) {
  const speakerCard = createDiv('speaker-card');

  const imageContainer = createDiv('image-container');

  const image = createImage(speakerData[index].Image, speakerData[index].Name, 'speaker');

  imageContainer.appendChild(image);

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

  speakerCard.appendChild(imageContainer);
  speakerCard.appendChild(cardText);
  featuredSpeakers.appendChild(speakerCard);
  speakerSection.appendChild(featuredSpeakers);
}

let speakerListLength = 1;

for (let i = 0; i <= speakerListLength; i += 1) {
  generateCard(i);
}

function populateFullList() {
  speakerListLength = speakerData.length;

  for (let i = 2; i < speakerListLength; i += 1) {
    generateCard(i);
  }
}
const moreButtonContainer = createDiv('more-button-container');

const moreButton = createButton('more-button');

function addLessButton() {
  const lessButtonContainer = createDiv('less-button-container');

  const lessButton = createButton('less-button');

  lessButton.innerHTML = 'LESS <i class="fa-solid fa-chevron-up"></i>';

  lessButton.addEventListener('click', () => {
    window.onclick = function (event) {
      if (event.target.className === 'less-button') {
        lessButton.style.display = 'none';
        moreButton.style.display = 'block';
      }
    };
  });
  lessButtonContainer.appendChild(lessButton);
  featuredSpeakers.appendChild(lessButtonContainer);
}

moreButton.innerHTML = 'MORE <i class="fa-solid fa-chevron-down"></i>';

moreButton.addEventListener('click', () => {
  window.onclick = function (event) {
    if (event.target.className === 'more-button') {
      populateFullList();
      moreButton.style.display = 'none';
      addLessButton();
    }
  };
});

moreButtonContainer.appendChild(moreButton);

featuredSpeakers.appendChild(moreButtonContainer);
speakerSection.appendChild(featuredSpeakers);