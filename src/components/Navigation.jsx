import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">最新動画一覧</Link></li>
                    <li><Link to="/channels">登録チャンネル管理</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation