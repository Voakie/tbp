import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Category } from '../components/Category'
import { exampleConfig } from '../exampleConfig'
import styles from '../styles/Home.module.css'
import { GameConfig, GameQuestion } from '../types'
import { Card } from '../components/Card'

/**
 * TODO: Implement custom config loading instead of always using the example configuration
 */

const Home: NextPage = () => {
    const [config, setConfig] = useState<GameConfig>({ categories: [] })
    const [configLoaded, setConfigLoaded] = useState(false)
    const [questionActive, setQuestionActive] = useState<GameQuestion | null>(null)

    useEffect(() => {
        setConfig(exampleConfig)
    })

    const cardOpenCallback = (q: GameQuestion, categoryName: string) => {
        const _config = config
        const category = _config.categories.find(c => c.name == categoryName)
        if (category) {
            const question = category.questions.find(_q => _q.id == q.id)
            if (question) {
                question.used = true
                setConfig(_config)
                setQuestionActive(question)
            }
        }
    }

    const cardCloseCallback = () => {
        setQuestionActive(null)
    }

    return <div className={styles.wrapper}>
        <Head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
            </style>
        </Head>

        {questionActive != null ? 
        (<Card {...questionActive} closeCallback={cardCloseCallback} />) : 
        config.categories.map(c =>
            <Category key={c.name} {...c} cardOpenCallback={cardOpenCallback} />
        )}
    </div>
}

export default Home
