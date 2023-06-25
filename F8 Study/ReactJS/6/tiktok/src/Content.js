import { memo, useEffect, useState } from "react"


function Content({ onIncrease }) {

    console.log('re-render');

    return (
        <>
            <h2>No Man's Sky</h2>
            <button onClick={onIncrease}>Start</button>
        </>
    )
}

export default memo(Content)