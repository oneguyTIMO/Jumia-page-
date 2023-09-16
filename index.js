handleShowSideBar = () => {
  console.log('I will never be broke')
  const navlinks = document.querySelector('.navlinks')
  navlinks.classList.toggle('navlinksShown')
  const subclik = document.querySelector('.nav .sub-header-div')
  subclik.classList.remove('subHeaderDivUnhide')
}
handleShowHover = () => {
  console.log('Help me oh lord')
  const sub = document.querySelector('.nav .sub-header-div')
  sub.classList.toggle('subHeaderDivUnhide')
}
