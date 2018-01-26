const fetchQuote = () => {
    return fetch('http://quotes.rest/qod.json').then(buff => buff.json()).then(res => res.contents.quotes[0])
}

export default fetchQuote;