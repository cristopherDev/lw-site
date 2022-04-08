import styles from './ManuBar.module.css';

const MenuBar = (props) => {
    return (
        <div className={styles.container_menu_bar}>
            {props.children}
        </div>
    )
}

export default MenuBar