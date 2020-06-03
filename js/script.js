const showSearch = () => {
    document.getElementById("menuId").style.display = "none"
    document.getElementById("showForm").style.display = "none"
    document.getElementById("showSearchId").style.display ="flex";
  }

const closeSearch = () => {
    document.getElementById("menuId").style.display = "flex"
    document.getElementById("showForm").style.display = "flex"
    document.getElementById("showSearchId").style.display ="none";
}

const showSearchMobile = () => {
  document.getElementById("topMenuNameId").style.display = "none"
  document.getElementById("showFormMobile").style.display = "none"
  document.getElementById("showSearchMobileId").style.display ="flex"
  document.getElementById("hamburgerIconId").style.display = "none"
}

const closeSearchMobile = () => {
  document.getElementById("topMenuNameId").style.display = "flex"
  document.getElementById("showFormMobile").style.display = "flex"
  document.getElementById("showSearchMobileId").style.display ="none";
  document.getElementById("hamburgerIconId").style.display = "flex"
}