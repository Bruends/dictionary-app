import { Container, Box, Text, Heading } from '@chakra-ui/react';

function WordInfo({ word, phonetics }) {
  return (
    <Box maxW="md" p={10} my={5}>
      <Container>
        {/* searched word */}
        <Heading as="h3">{word}</Heading>

        {/* writen pronuncation */}
        <Text my={2}>{phonetics[0].text}</Text>

        {/* audio pronunciation */}
        {phonetics[0].audio && <audio src={phonetics[0].audio} controls />}
      </Container>
    </Box>
  );
}

export default WordInfo;
