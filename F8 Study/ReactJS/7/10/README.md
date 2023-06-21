# Video 61: useEffect with fake Chat App

1. Callback luôn được gọi sau khi component mounted
2. Cleanup func luôn được gọi trước khi component unmounted
3. Cleanup func luôn đc gọi trước khi callback được gọi ( trừ mounted )

### Ví dụ 1:

import { useEffect, useState } from "react"


export default function Content() {

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        // Cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <div>
                    <img src={avatar.preview} alt="" width="50%" />
                </div>
            )}
        </>
    )
}