import React, {memo} from 'react';
import styles from './ErrorMessage.module.css'

type ErrorProps = {
    errorMessage: string;
}
const ErrorMessage: React.FC<ErrorProps> = ({ errorMessage }) => {
    return (
        <div role="alert" className={styles.message}><span>{`Error has occurred ${errorMessage}`}</span></div>
    )

}

export default memo(ErrorMessage)