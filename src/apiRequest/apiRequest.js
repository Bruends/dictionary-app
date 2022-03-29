export const fetchWordInfo = async (word) => {
    const url  = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const res  = await fetch(url);
    const data = await res.json();
    return data[0];
}