const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const user = $('.formLogin__nameInput')
const pass = $('.formLogin__passInput')
const passOld = $('.formChangeP__oldPass')
const passNew = $('.formChangeP__newPass')
const formLogin = $('.formLogin')
const submitLogin = $('.formLogin__btnLogin')
const formChangePass = $('.formChangeP')
const submitChangePass = $('.formChangeP__btnSubmit')

let account = {
    user: "admin",
    password: "admin"
}

const btnLogin = () => {
    formLogin.style.transform = `translateY(0)`
    $('.btn__login').classList.add('hide')
    user.focus()
}

const handleClose = () => {
    formLogin.style.transform = `translateY(-120%)`
    $('.btn__login').classList.remove('hide')
    $('.warning__passInput').classList.add('hide')
    $('.warning__nameInput').classList.add('hide')
    $('.warning__checkPass').classList.add('hide')
    $('.formUser').classList.remove('formUser__error')
    $('.formPass').classList.remove('formPass__error')
    $('.formLogin__box').classList.remove('mb-0')
    $('.formPassOld').classList.remove('formPassOld__error')
    $('.formPassNew').classList.remove('formPassNew__error')
}


const handleSubmit = () => {
    // submitLogin.innerText = "Loading ..."
    if (
        !pass.value.trim() &&
        !user.value.trim()
    ) {
        setTimeout(() => {
            $('.warning__passInput').classList.remove('hide')
            $('.warning__passInput').innerText = "Chưa nhập tài khoản / Mật khẩu hoặc cả 2 hai"
            user.value = ''
            pass.value = ''
            submitLogin.innerText = 'Login'
            $('.formUser').classList.add('formUser__error')
            $('.formPass').classList.add('formPass__error')
        }, 500)
    }
    else if (!user.value.trim()) {
        setTimeout(() => {
            $('.warning__nameInput').classList.remove('hide')
            $('.warning__passInput').classList.add('hide')
            $('.warning__nameInput').innerText = "Bạn chưa nhập Username!"
            $('.formUser').classList.add('formUser__error')
            $('.formPass').classList.remove('formPass__error')
            $('.formLogin__box').classList.add('mb-0')
            submitLogin.innerText = 'Login'    
        }, 500)
    }

    else if (!pass.value.trim()) {
        setTimeout(() => {
            $('.warning__passInput').classList.remove('hide')
            $('.warning__nameInput').classList.add('hide')
            $('.warning__passInput').innerText = "Bạn chưa nhập Password!"
            $('.formUser').classList.remove('formUser__error')
            $('.formPass').classList.add('formPass__error')
            $('.formLogin__box').classList.remove('mb-0')
            submitLogin.innerText = 'Login'
        }, 500)
    }

    else if (
        pass.value.trim() !== account.password ||
        user.value.trim() !== account.user
    ) {
        submitLogin.innerText = "Loading ..."
        setTimeout(() => {
            $('.warning__passInput').classList.remove('hide')
            $('.warning__passInput').innerText = "Tên người dùng hoặc mật khẩu không chính xác!"
            $('.warning__nameInput').classList.add('hide')
            $('.formUser').classList.remove('formUser__error')
            $('.formPass').classList.remove('formPass__error')
            $('.formLogin__box').classList.remove('mb-0')
            pass.value = ''
            submitLogin.innerText = 'Login'
        }, 1000)
    }
    else if (
        user.value.trim() === account.user &&
        pass.value.trim() === account.password
    ) {
        submitLogin.innerText = "Loading ..."
        setTimeout(() => {
            $('.warning__passInput').classList.add('hide')
            $('.btn__login').classList.remove('hide')
            $('.btn__login').innerText = 'Đăng nhập thành công!'
            $('.formUser').classList.remove('formUser__error')
            $('.formPass').classList.remove('formPass__error')
            $('.formLogin__box').classList.remove('mb-0')
            $('.formPassOld').classList.remove('formPassOld__error')
            $('.formPassNew').classList.remove('formPassNew__error')
            submitLogin.innerText = "Login"
            formLogin.style.transform = `translateY(-120%)`
            pass.value = ''
            user.value = ''
        }, 1000)
    }
}

const btnBackToLogin = () => {
    setTimeout(() => {
        formChangePass.classList.add('hide')
        formLogin.classList.remove('hide')
    }, 1000)
}

const openFormChangePass = () => {
    setTimeout(() => {
        formLogin.classList.add('hide')
        formChangePass.classList.remove('hide')
        passOld.focus()
    }, 1000)
}

const handleSaveNewPass = () => {
    submitChangePass.innerText = 'Save ...'
    if (
        !passOld.value.trim() &&
        !passNew.value.trim()
    ) {
        setTimeout(() => {
            $('.warning__checkPass').classList.remove('hide')
            $('.warning__checkPass').innerText = 'Bạn chưa nhập mật khẩu'
            $('.formPassOld').classList.add('formPassOld__error')
            $('.formPassNew').classList.add('formPassNew__error')
            submitChangePass.innerText = `Save`
        }, 1000)
    } else if (
        !passOld.value.trim()
    ) {
        setTimeout(() => {
            $('.warning__checkPass').classList.remove('hide')
            $('.warning__checkPass').innerText = 'Bạn chưa nhập mật khẩu cũ!'
            $('.formPassOld').classList.add('formPassOld__error')
            $('.formPassNew').classList.remove('formPassNew__error')
            passOld.value = ''
            passNew.value = ''
            submitChangePass.innerText = `Save`
        }, 1000)
    } else if (
        !passNew.value.trim()
    ) {
        setTimeout(() => {
            $('.warning__checkPass').classList.remove('hide')
            $('.warning__checkPass').innerText = 'Vui lòng nhập mật khẩu mới!'
            $('.formPassOld').classList.remove('formPassOld__error')
            $('.formPassNew').classList.add('formPassNew__error')
            submitChangePass.innerText = `Save`
        }, 1000)
    } else if (
        passOld.value.trim() !== account.password
    ) {
        setTimeout(() => {
            $('.warning__checkPass').classList.remove('hide')
            $('.warning__checkPass').innerText = "Mật khẩu cũ không khớp"
            $('.formPassOld').classList.remove('formPassOld__error')
            $('.formPassNew').classList.remove('formPassNew__error')
            passOld.value = ''
            passNew.value = ''
            submitChangePass.innerText = `Save`
        }, 1000)
    } else if (
        passOld.value.trim() === account.password &&
        passNew.value.trim() === account.password
    ) {
        setTimeout(() => {
            $('.warning__checkPass').classList.remove('hide')
            $('.warning__checkPass').innerText = 'Mật khẩu trùng với mật khẩu trước!'
            passOld.value = ''
            passNew.value = ''
            submitChangePass.innerText = `Save`
        }, 1000)
    } else {
        $('.warning__checkPass').classList.add('hide')
        $('.warning__checkPass').innerText = ''
        account.password = passNew.value.trim()
        $('.warning__submitPass').classList.remove('hide')

        setTimeout(() => {
            $('.warning__submitPass').innerText = "Xin chúc mừng bạn đã thay đổi mật khẩu thành công!"
            passOld.value = ''
            passNew.value = ''
        }, 1000)

        setTimeout(() => {
            formChangePass.classList.add('hide')
            formLogin.classList.remove('hide')
            submitChangePass.innerText = 'Save'
            user.focus()
            user.value = ''
            pass.value = ''
            $('.warning__passInput').classList.add('hide')
            $('.warning__nameInput').classList.add('hide')
            $('.warning__checkPass').classList.add('hide')
            $('.warning__submitPass').classList.add('hide')
            $('.formUser').classList.remove('formUser__error')
            $('.formPass').classList.remove('formPass__error')
            $('.formLogin__box').classList.remove('mb-0')
            $('.formPassOld').classList.remove('formPassOld__error')
            $('.formPassNew').classList.remove('formPassNew__error')
            $('.formLogin__box').classList.remove('mb-0')
        }, 1500)
    }
}