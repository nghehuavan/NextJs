import * as React from 'react';
import styles from  '../../styles/Style.module.css';

export interface stylesProps {
    children?: React.ReactNode;
}

export default function style(props: stylesProps) {

    return (
        <>
            <span className={styles.skeleton}></span>
        </>
    );
}
