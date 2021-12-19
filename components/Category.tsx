import { GameCategory, GameQuestion } from "../types";
import { Question } from "./Question";
import styles from '../styles/Home.module.css'

interface CategoryProps {
    cardOpenCallback: (q: GameQuestion, categoryName: string) => void
}

export function Category(props: GameCategory & CategoryProps) {
    return <div className={styles.category} style={{ border: "2px solid " + props.color }}>
        <div className={styles.categoryName}>{props.name}</div>

        {props.questions.map(q =>
            <Question key={q.id} {...q} cardOpenCallback={props.cardOpenCallback} categoryName={props.name} />
        )}
    </div>
}