import type { Action } from "svelte/action";

interface Attributes {
  "on:inview"?: (event: CustomEvent<HTMLElement>) => void;
}

type InviewAction = Action<HTMLElement, any, Attributes>;

export const inview: InviewAction = (element: HTMLElement, options: IntersectionObserverInit = {}) => {
  element.setAttribute("data-inview", "false");
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const event = new CustomEvent("inview", { detail: element });
        element.dispatchEvent(event);
        element.setAttribute("data-inview", "true");
        observer.unobserve(element);
      }
    })
  }, options);

  observer.observe(element);

}