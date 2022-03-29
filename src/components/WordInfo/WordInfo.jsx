import {Container, Box, Text, Heading, Stack} from '@chakra-ui/react'

function WordInfo({word, phonetics}){
    return(
        <Box maxW="md" p={10} my={5}>
            <Container>
                <Heading as="h3" >{word} :</Heading>             
                    <Text my={2}>
                        <strong>Pronunciation: </strong>
                        { phonetics[0].text }
                    </Text>
                { phonetics[0].audio? <audio src={phonetics[0].audio} controls /> : null}
            </Container>
        </Box>            
    )
}

export default WordInfo;