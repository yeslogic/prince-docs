export const toggleAllItems = (event, listId, toggleId) => {
  const propListEl = document.getElementById(listId);
  const allDetails = propListEl.getElementsByTagName("details");
  const toggleLink = document.getElementById(toggleId);
  if (toggleLink.hasAttribute("open") == false) {
    for (let i = 0; i < allDetails.length; i++) {
      allDetails[i].setAttribute("open", "");
      toggleLink.setAttribute("open", "");
    }
  } else if (toggleLink.hasAttribute("open") == true) {
    for (let i = 0; i < allDetails.length; i++) {
      allDetails[i].removeAttribute("open");
      toggleLink.removeAttribute("open");
    }
  }
  event.preventDefault();

  return false;
};
