import React, {memo} from 'react';

const Loading: React.FC = () => {
    return (
        <div aria-busy="true" aria-live="polite"><span>...Loading</span></div>
    )

}

export default memo(Loading)