handleShowSideBar = () => {
  const navlinks = document.querySelector('.navlinks')
  navlinks.classList.toggle('navlinksShown')
  const subclik = document.querySelector('.nav .sub-header-div')
  subclik.classList.remove('subHeaderDivUnhide')
  const toremovebelow = document.querySelector('.sub-header-div1')
  toremovebelow.classList.remove('subHeaderDivUnhide1')
}
handleShowHover = () => {
  const sub = document.querySelector('.nav .sub-header-div')
  sub.classList.toggle('subHeaderDivUnhide')
  const toremove = document.querySelector('.sub-header-div1')
  toremove.classList.remove('subHeaderDivUnhide1')
}
handleShowHover1 = () => {
  console.log('Click fuction')
  const subclickhealth = document.querySelector('.sub-header-div1')
  subclickhealth.classList.toggle('subHeaderDivUnhide1')
  const toremovetop = document.querySelector('.nav .sub-header-div')
  toremovetop.classList.remove('subHeaderDivUnhide')
}
