import { MathJax, MathJaxContext } from "better-react-mathjax"
import { useState } from "react"
import { GameQuestion } from "../types"
import styles from '../styles/Home.module.css'
import { CodeBlock } from "react-code-blocks"

interface CardProps {
    closeCallback: () => void
}

export function Card(props: GameQuestion & CardProps) {
    const [showSolution, setShowSolution] = useState(false)

    const showSolutionButton = () => {
        setShowSolution(true)
    }

    const closeButton = () => {
        props.closeCallback()
    }

    return <div className={styles.card}>
        <div className={styles.cardContent}>
            <div><b>Frage:</b></div>
            <MathJaxContext>
                <MathJax>{props.text}</MathJax>
            </MathJaxContext>
            {props.code && props.code.question ? (
                <div className={styles.cardCode}>
                    <CodeBlock text={props.code?.question} language={props.code?.language} />
                </div>
            ) : null}

            <br />

            {showSolution ? (<div>
                <div><b>Antwort:</b></div>
                <MathJaxContext>
                    <MathJax inline={true} dynamic={true}>{props.solution}</MathJax>
                </MathJaxContext>
                {props.code && props.code.answer ? (
                    <div className={styles.cardCode}>
                        <CodeBlock text={props.code?.answer} language={props.code?.language} />
                    </div>
                ) : null}
            </div>) : null}
        </div>

        <div className={styles.cardButtons}>
            <button onClick={showSolutionButton}>Lösung anzeigen</button>
            <button onClick={closeButton}>Schließen</button>
        </div>
    </div>
}