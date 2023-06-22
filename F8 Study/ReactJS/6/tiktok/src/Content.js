import { memo, useEffect, useState } from "react"


function Content() {

    console.log('re-render');

    return (
        <h2>No Man's Sky</h2>
    )
}

export default memo(Content)