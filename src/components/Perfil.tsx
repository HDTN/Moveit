import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../Styles/Components/profile.module.css'
export function Profile() {

    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/41065071?v=4" alt="Nathan Rodriuges"/>
            <div>
                <strong>Natan Bortolato</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}