import { GameQuestion } from "../types"
import styles from '../styles/Home.module.css'

interface QuestionProps {
    categoryName: string
    cardOpenCallback: (q: GameQuestion, categoryName: string) => void
}

export function Question(props: GameQuestion & QuestionProps) {
    const onClick = () => {
        props.cardOpenCallback(props, props.categoryName)
    }

    return <div onClick={onClick} className={styles.question + " " + (props.used ? styles.used : "")}>{props.points}</div>
}