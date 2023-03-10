import styles from '../css/keyboard.module.css';

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]


export const Keyboard: React.FC = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem"}}>
            {KEYS.map(key => {
                return (
                    <button key={key} className={`${styles.btn} ${styles.active}` }>{key}</button>
                )
            })}
        </div>
    )
}