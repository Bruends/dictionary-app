import {Box, Container, Text, Heading} from '@chakra-ui/react'

function WordMeanings({ meanings }){

    return(
        <Box maxW="md" p={10} my={5}>
            <Container>
                <Heading>Definitions</Heading>
                {/* render definitions*/}
                {meanings.map((meaning, index) => (
                    <span key={index}>
                        <Text>part of speech: {meaning.partOfSpeech}</Text>                    
                        <Text>Definition: {meaning.definitions[0].definition}</Text>
                    </span>
                ))}
            </Container>
        </Box>
    );
}

export default WordMeanings;