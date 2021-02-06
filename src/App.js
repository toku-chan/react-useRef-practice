import { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
    const [count, setCount] = useState(0)
    function countUp() {
        setCount(count + 1)
    }

    // refを使用してDOMを取得する
    // useEffectを挟むことで、mount時に実行してくれるっぽい
    const elm02 = useRef(null)
    useEffect(() => {
        if(elm02.current) {
            console.log(elm02.current)
        }
    })

    // 逆にuseEffectを挟まないと、update時に実行されるっぽい
    // 実行的にはuseEffectが入らない方が早いっぽい
    const elm03 = useRef(null)
    if(elm03.current) {
        console.log(elm03.current)
    }

    const itemArea = {
        position: 'relative'
    }

    const styled = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        width: '480px',
        paddingLeft: 0,
        paddingBottom: '10px'
    }

    const underlineStyled = {
        position: 'absolute',
        bottom: 0,
        height: '2px',
        backgroundColor: '#75C2FF'
    }

    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    // function addStyle(item) {
    //     item.style.color = '#77a6d5'
    // }
    // function removeStyle (item) {
    //     item.style.color = ''
    // }

    const underline = useRef(null)
    // 最初の一回のみ実行
    useEffect( () => {
        function initPosition() {
            underline.current.style.width = item1.current.clientWidth + 'px'
        }
        initPosition()
    }, [])
    function movePosition (item) {
        // これで位置情報を取得できる
        console.log(item.getBoundingClientRect())
        underline.current.style.width = item.clientWidth + 'px'
    }

    return (
        <div id="test" ref={elm02}>
            <p className="test" ref={elm03}>{count}</p>
            <button onClick={countUp}>CLICK</button>
            <div style={itemArea}>
                <ul style={styled}>
                    <li ref={item1} onMouseEnter={() => movePosition(item1.current)}>item1</li>
                    <li ref={item2} onMouseEnter={() => movePosition(item2.current)}>item2222222222</li>
                    <li ref={item3} onMouseEnter={() => movePosition(item3.current)}>item3</li>
                    <li ref={item4} onMouseEnter={() => movePosition(item4.current)}>item4</li>
                </ul>
                <span style={underlineStyled} ref={underline}></span>
            </div>
        </div>
    );
}

export default App;
