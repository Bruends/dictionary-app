import React from 'react';
import { ChakraProvider, theme, Stack} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Search from './components/Search'
import WordInfo from './components/BasicWordInfo';
import WordMeanings from './components/WordMeanings';

const test = {
  word: 'text',
  phonetic: [
    {
      text: '/tɛkst/',
      audio: 'https://api.dictionaryapi.dev/media/pronunciations/en/text-us.mp3'
    }
  ],
  origin: "algo",
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        { definition : "some definition" }
      ]
    }
  ]
}

function App() {
  return (
    <>
    <ChakraProvider theme={theme}>      
      <ColorModeSwitcher justifySelf="flex-end" />
      <Search />
      <Stack wrap="wrap" direction="row" justify="center">
        <WordInfo {...test} />
        <WordMeanings {...test} />
      </Stack>
    </ChakraProvider>
    </>
  );
}

export default App;
