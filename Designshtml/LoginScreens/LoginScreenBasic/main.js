const email = document.getElementById('em')
const emailIcon = document.getElementById('em_i')
const pwd = document.getElementById('pw')
const pwdIcon = document.getElementById('pw_h_s')
const resetBut = document.getElementById('resetBut')
const loginBut = document.getElementById('loginBut')
const image = document.getElementById('image')
function checkEmail()
{
    let enteredEmail = email.value
    let list = emailIcon.classList
    if(enteredEmail)
    {
        let isValidEmail = enteredEmail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(!isValidEmail)
        {
            list.remove('fa-user')
            list.remove('fa-check')
            list.add('fa-close')
            checkFormFill()
        }
        else
        {
            list.remove('fa-user')
            list.remove('fa-close')
            list.add('fa-check')
        }
    }
    else{
           list.remove('fa-check')
           list.remove('fa-close')
           list.add('fa-user')
    }
}

function togglePswdView()
{
    let list = pwdIcon.classList
    let v = pwd.value
    if(pwd.type==='password' && v)
    {
        pwd.type = 'text'
        list.remove('fa-eye-slash')
        list.add('fa-eye')
        image.src = 'optometrist.gif'
    }
    else
    {
        pwd.type = 'password'
        list.remove('fa-eye')
        list.add('fa-eye-slash')
        image.src = 'lock.png'
    }
}

function checkFormFill(){
    let enteredEmail = email.value
    let enteredPwd = pwd.value
    if(enteredEmail && enteredPwd)
    {
        resetBut.removeAttribute('inert')
        loginBut.removeAttribute('inert')
    }
}

function login()
{
    let enteredEmail = email.value
    let enteredPwd = pwd.value
    if(enteredEmail && enteredPwd)
    {
        resetBut.removeAttribute('inert')
        loginBut.removeAttribute('inert')
        image.src = 'lock.gif'
        //API Call for Login
    }
}