export const toggleAllItems = (event, listId, toggleId) => {
  event.preventDefault();
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

  // Always open `#.window` on js-support page:
  const windowItemElement = document.getElementById(".window");
  if (windowItemElement) {
    windowItemElement.parentElement.setAttribute("open", "");
  }

  return false;
};
