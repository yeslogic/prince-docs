export function openDetails() {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.substring(1); // Remove the '#' from the hash
    try {
      const element = document.getElementById(id);
      if (element) {
        let parentDetails = element.parentNode;
        while (parentDetails && parentDetails.tagName !== "DETAILS") {
          parentDetails = parentDetails.parentNode;
        }
        if (parentDetails) {
          parentDetails.setAttribute("open", "");
          element.scrollIntoView(); // This is necessary to scroll to IDs inside collapsed `details` elements over a slow connection
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
