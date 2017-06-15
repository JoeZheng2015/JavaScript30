document.addEventListener('DOMContentLoaded', () => {
    const keyNodeList = document.querySelectorAll('.key')
    const keys = [].slice.call(keyNodeList)
    const audioNodeList = document.querySelectorAll('audio')
    const audios = [].slice.call(audioNodeList)


    document.addEventListener('keydown', (e) => {
        const keyCode = +e.keyCode
        const el = keys.find(key => +key.dataset.key === keyCode)
        if (el && el.classList.contains('playing')) {
            el.classList.remove('playing')
        }
        else {
            el.classList.add('playing')
        }
        const audio = audios.find(audio => +audio.dataset.key === keyCode)
        if (audio) {
            audio.pause()
            audio.currentTime = 0
            audio.play()
        }
    }, false)


    document.addEventListener('keyup', (e) => {
        const keyCode = +e.keyCode
        const el = keys.find(key => +key.dataset.key === keyCode)
        el && el.classList.remove('playing')
    }, false)
}, false)