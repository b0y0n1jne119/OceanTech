/*
    Video 196: Code Music Player

    1. Render songs
    2. Scroll Top
    3. Play / pause / seek
    4. CD rotate
    5. Next / Prev
    6. Random
    7. Next / Repeat when ended
    8. Active song
    9. Scroll active song into view
    10. Play song when click

*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')

const app = {

    currentIndex: 0,
    isRandom: false,
    isPlaying: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [
        {
            name: 'Skyclad Observer',
            singer: 'Steins;Gate',
            path: './assets/music/1.Steins;Gate OST - Skyclad Observer.mp3',
            image: './assets/img/pic1.jpg',
        },
        {
            name: 'Technovision short ver',
            singer: 'Steins;Gate',
            path: './assets/music/2.Steins;Gate OST - Technovision short ver..mp3',
            image: './assets/img/pic2.webp',
        },
        {
            name: 'GATE OF STEINER',
            singer: 'Steins;Gate',
            path: './assets/music/3.Steins;Gate OST - GATE OF STEINER -main theme-.mp3',
            image: './assets/img/pic3.jpg',
        },
        {
            name: 'The Universe',
            singer: 'Steins;Gate',
            path: './assets/music/4.Steins;Gate OST - The Universe.mp3',
            image: './assets/img/pic4.jpg',
        },
        {
            name: 'Laboratory',
            singer: 'Steins;Gate',
            path: './assets/music/5.Steins;Gate OST - Laboratory.mp3',
            image: './assets/img/pic5.jpg',
        },
        {
            name: 'Suspicious Eyes',
            singer: 'Steins;Gate',
            path: './assets/music/6.Steins;Gate OST - Suspicious Eyes.mp3',
            image: './assets/img/pic6.png',
        },
    ],

    setConfig: function (key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function () {
        const cdWidth = cd.offsetWidth

        // Handle CD rotato / stop
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 1000, // 10 seconds
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Xử lý phóng to - thu nhỏ CD
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý khi click Play
        playBtn.onclick = function () {
            if (app.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }

        }

        // Khi song được player
        audio.onplay = function () {
            app.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi pause song
        audio.onpause = function () {
            app.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        // Xử lý khi tua song
        progress.oninput = function (e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }

        // Khi next bài hát
        nextBtn.onclick = function () {
            if (app.isRandom) {
                app.handleRandomSong()
            } else {
                app.handleNextSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()
        }

        // Khi prev song
        prevBtn.onclick = function () {
            if (app.isRandom) {
                app.handleRandomSong()
            } else {
                app.handlePrevSong()
            }
            audio.play()
            app.render()
            app.scrollToActiveSong()
        }

        // Xử lí random bật / tắt
        randomBtn.onclick = function (e) {
            app.isRandom = !app.isRandom
            app.setConfig('isRandom', app.isRandom)
            randomBtn.classList.toggle('active', app.isRandom)
        }

        // Xử lý next song khi audio ended
        audio.onended = function () {
            if (app.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        // Xử lý phát lại một bài hát
        repeatBtn.onclick = function (e) {
            app.isRepeat = !app.isRepeat
            app.setConfig('isRepeat', app.isRepeat)
            repeatBtn.classList.toggle('active', app.isRepeat)
        }

        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')

            if (songNode || e.target.closest('.option')) {
                if (songNode) {
                    app.currentIndex = Number(songNode.dataset.index)
                    app.loadCurrentSong()
                    app.render()
                    audio.play()
                }
                // Xử lý khi click vào song option
                if (e.target.closest('.option')) {

                }
            }
        }
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: "end",
                inline: "nearest"
            })
        }, 300);
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    handleNextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    handlePrevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    handleRandomSong: function () { // Dùng do while để ít nhât chạy 1 lần
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    start: function () {
        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe, xử lý các sự kiện ( DOM events)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy app
        this.loadCurrentSong()

        // Render playlist
        this.render()
    }
}

app.start()