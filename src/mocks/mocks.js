import {getRandomInt, getRandomString} from "../utils";

export const settings = {
  gameTime: 5,
  errorCount: 3,
};

const ANSWERS_COUNT_GENRE = 4;
const ANSWERS_COUNT_ARTIST = 3;
const QUESTION_COUNT = 5;

const GENRES = [`rock`, `pop`, `jazz`];

const ARTISTS = [`John Snow`, `Jack Daniels`, `Jim Beam`];
// const SRC = `https://upload.wikimedia.org/wikipedia/commons/4/48/Wickethewok_-_Deepecho.ogg`;
const SRC = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;
const IMG_SRC = [`https://api.adorable.io/avatars/102`, `https://api.adorable.io/avatars/120`, `https://api.adorable.io/avatars/134`];

const getQuestionsGenre = () => {
  return {
    id: getRandomString(3),
    type: `genre`,
    genre: GENRES[getRandomInt(GENRES.length - 1)],
    answers: new Array(ANSWERS_COUNT_GENRE).fill(``).map(getAnswersGenre),
  };
};

const getQuestionsArtict = () => {
  return {
    id: getRandomString(3),
    type: `artist`,
    song: {
      artist: ARTISTS[getRandomInt(ARTISTS.length - 1)],
      src: SRC,
    },
    answers: new Array(ANSWERS_COUNT_ARTIST).fill(``).map(getAnswersArtict),
  };
};

const getAnswersGenre = () => {
  return {
    id: getRandomString(3),
    src: SRC,
    genre: GENRES[getRandomInt(GENRES.length - 1)],
  };
};

const getAnswersArtict = () => {
  return {
    id: getRandomString(3),
    picture: IMG_SRC[getRandomInt(IMG_SRC.length - 1)],
    artist: ARTISTS[getRandomInt(ARTISTS.length - 1)],
  };
};


export const questions = new Array(QUESTION_COUNT).fill(``).map(() => {
  return getRandomInt(1) ? getQuestionsArtict() : getQuestionsGenre();
});
