import initPhone from "./modules/initPhone";
import initTabs from "./modules/initTabs";
import initValid from "./modules/initValid";
import initTextChat from "./modules/initTextChat";
document.addEventListener('DOMContentLoaded', () => {
  initPhone();
  initTabs();
  initValid();
  initTextChat();
})