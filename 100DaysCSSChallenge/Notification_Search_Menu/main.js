function onload()
{
    const SearchFieldEl = document.getElementById('searchFieldID')
    SearchFieldEl.style.opacity = 0
}
function ToggleMenu()
{
    const elMenu = document.getElementById('MenuBoxID')
    const elMain = document.getElementById('MainNotiID')
    if(elMenu.classList.contains('visible'))
    {
        elMenu.classList.remove('visible')
        elMain.classList.remove('RightPush')
        elMain.classList.add('LeftPush')
    }
    else{
        elMenu.classList.add('visible')
        elMain.classList.add('RightPush')
        elMain.classList.remove('LeftPush')
    }

}

function ToggleSearch()
{
    const headerEl = document.getElementById('no-Search-id')
    const SearchFieldEl = document.getElementById('searchFieldID')
    if(SearchFieldEl.classList.contains('showTextField'))
    {
        headerEl.style.opacity = 1
        SearchFieldEl.classList.remove('showTextField')
        SearchFieldEl.classList.add('hideTextField')
    }
    else
    {
        headerEl.style.opacity = 0
        SearchFieldEl.classList.remove('hideTextField')
        SearchFieldEl.classList.add('showTextField')
    }    
}