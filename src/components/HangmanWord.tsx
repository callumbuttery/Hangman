type HangmanWordPros={
    guessedLetters: string[],
    wordToGuess: string,
}

export const HangmanWord: React.FC<HangmanWordPros> = (props)=> {
    return (
        <div style={{ display: 'flex', gap: '.25em', fontSize: '6rem', fontWeight: "bold", textTransform: 'uppercase', fontFamily: 'monospace' }}>
            {props.wordToGuess.split("").map((letter, index) => (
                <span style={{  borderBottom: '.1em solid black'}} key={index}>
                    <span style={{ visibility: props.guessedLetters.includes(letter) ? 'visible' : 'hidden'}}>{letter}</span>
                </span>
            ))}
        </div>
    )
}