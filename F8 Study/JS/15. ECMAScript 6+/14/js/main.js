/*
    Video 196: Code Music Player

    1. Let, const
    2. Template Literals
    3. Multi-line String
    4. Arrow function
    5. Classes
    6. Default parameter values
    7. Destructuring: phân rã
    8. Rest parameters
    9. Spread
    10. Enhanced object literals
    11. Tagged template literal
    12. Modules

*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')

const app = {

    currentIndex: 0,
    isPlaying: false,

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
    ],

    render: function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
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
        $('.playlist').innerHTML = htmls.join('')
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
        }

        // Khi pause song
        audio.onpause = function () {
            app.isPlaying = false
            player.classList.remove('playing')
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
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
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