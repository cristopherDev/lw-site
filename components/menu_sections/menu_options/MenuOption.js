import styles from './MenuOption.module.css';

const MenuOption = (props) => {
    return (
        <div className={styles.menu_option}>
            <span>{props.children}</span>
        </div>
    )
}

export default MenuOption;