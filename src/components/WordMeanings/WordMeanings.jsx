import { Box, Container, Heading } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function WordMeanings({ meanings }) {
  return (
    <Box w="lg" p={10} my={5}>
      <Container>
        <Heading as="h2">Definitions</Heading>
        <Tabs colorScheme="purple">
          {/* Tab headers */}
          <TabList>
            {meanings.map((meaning, index) => (
              <Tab key={'h' + index}>{meaning.partOfSpeech}</Tab>
            ))}
          </TabList>
          {/* Tab content */}
          <TabPanels>
            {meanings.map((meaning, index) => (
              <TabPanel key={'d' + index}>
                {meaning.definitions[0].definition}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}

export default WordMeanings;
