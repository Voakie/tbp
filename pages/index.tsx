import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Category } from '../components/Category'
import styles from '../styles/Home.module.css'
import { GameConfig, GameQuestion } from '../types'
import { Card } from '../components/Card'
import { ConfigDialog } from '../components/ConfigDialog'

/**
 * TODO: Implement custom config loading instead of always using the example configuration
 */

const Home: NextPage = () => {
    const [config, setConfig] = useState<GameConfig | null>(null)
    const [questionActive, setQuestionActive] = useState<GameQuestion | null>(null)

    const cardOpenCallback = (q: GameQuestion, categoryName: string) => {
        const _config = config
        if (!_config) return

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

    const renderContent = () => {
        if (config == null) {
            return <ConfigDialog setConfigCallback={setConfig} />
        } else if (questionActive) {
            return <Card {...questionActive} closeCallback={cardCloseCallback} />
        } else {
            return config.categories.map(c =>
                <Category key={c.name} {...c} cardOpenCallback={cardOpenCallback} />
            )
        }
    }

    return <div className={styles.wrapper}>
        <Head>
            <style>
                @import url(&apos;https://fonts.googleapis.com/css2?family=Pacifico&display=swap&apos;);
            </style>
        </Head>

        {renderContent()}
    </div>
}

export default Home
