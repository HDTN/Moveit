import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/HDTN.png" alt="" />
            <div>
                <strong>Natan Bortolato</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}
//<p>significa paragrafo
//<strong>significa Negrito ou escrita forte