import styles from './Section.module.css';

const Section = (props) => {
    const addBackgroundColor = props.background ? styles.section_backgroun : '';

    return (
        <div className={`${styles.section} ${addBackgroundColor}`}>
            {props.children}
        </div>
    )
}

export default Section;