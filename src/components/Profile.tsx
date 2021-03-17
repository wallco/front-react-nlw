import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className = {styles.profileContainer}>
            <img src = "https://github.com/wallco.png" alt = "Wallace Correa" />
            <div>
                <strong>Wallace Correa</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}