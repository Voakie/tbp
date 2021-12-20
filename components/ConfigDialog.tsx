import { GameConfig } from "../types"
import styles from '../styles/Home.module.css'
import React, { useState } from "react"
import { exampleConfig } from "../exampleConfig"

interface ConfigDialogProps {
    setConfigCallback: (config: GameConfig) => void
}

export function ConfigDialog(props: ConfigDialogProps) {
    const [error, setError] = useState("")

    const setConfig = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const data = await e.target.files[0].text()

            try {
                const parsed = JSON.parse(data)
                props.setConfigCallback(parsed)
            } catch (e: any) {
                setError(e.toString())
            }
        }
    }

    const loadDefaultConfig = () => {
        props.setConfigCallback(exampleConfig)
    }

    return <div className={styles.configDialog}>
        {error != "" ? <div className={styles.configDialogError}>{error}</div> : null}
        <div>Hier kann eine Konfigurationsdatei im JSON-Format hochgeladen werden</div>
        <br/>
        <a href="https://github.com/Voakie/tbp/blob/main/exampleConfig.json" target="_blank">Beispiel</a>
        <br/>
        <br/>

        <input value={undefined} onChange={e => {setConfig(e)}} type="file" />
        <button onClick={loadDefaultConfig} className={styles.dialogButton}>Demo</button>
    </div>
}