function onload()
{
    const SearchFieldEl = document.getElementById('searchFieldID')
    SearchFieldEl.style.display = 'none'
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
    if(SearchFieldEl.style.display === 'none')
    {
        SearchFieldEl.style.display = 'flex'
        headerEl.style.display = 'none'
    }
    else
    {
        SearchFieldEl.style.display = 'none'
        headerEl.style.display = 'flex'
    }
    
}