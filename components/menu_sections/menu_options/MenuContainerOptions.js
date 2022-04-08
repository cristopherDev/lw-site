import styles from './MenuContainerOptions.module.css';

const MenuContainerOptions = ({children}) => {
    return (
        <div className={styles.menu_container_options}>
            {children}
        </div>
    )
}

export default MenuContainerOptions