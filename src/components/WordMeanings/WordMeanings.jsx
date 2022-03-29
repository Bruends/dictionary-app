import {Box, Container, Text, Heading, Divider} from '@chakra-ui/react'

function WordMeanings({ meanings }){

    return(
        <Box  p={10} my={5}>
            <Container>
                <Heading>Definitions</Heading>
                {/* render definitions */}
                {meanings.map((meaning, index) => (
                    <span key={index}>
                        <Text><strong>part of speech: </strong> {meaning.partOfSpeech}</Text>                    
                        <Text><strong>Definition: </strong>{meaning.definitions[0].definition}</Text>
                        <Divider />
                    </span>
                ))}
            </Container>
        </Box>
    );
}

export default WordMeanings;