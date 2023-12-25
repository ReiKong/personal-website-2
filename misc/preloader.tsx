import { useEffect } from 'react';

type LoaderStepFunction = (c: number, p: number) => void;
type LoadingFinishedFunction = () => void;

interface Preloader {
  start: () => void;
}

function createPreloader(numOfAjaxRequests: number, loaderStep: LoaderStepFunction, loadingFinished: LoadingFinishedFunction): Preloader {
  let c = 0;
  let percentage = 0;

  const start = (): void => {
    // Check if running in a browser environment
    if (typeof window !== 'undefined') {
      const elements = Array.from(document.querySelectorAll<Element>(
        "link, img:not([loading='lazy']), object:not([loading='lazy']), iframe:not([loading='lazy']), video:not([loading='lazy']), audio:not([loading='lazy'])"
      ));

      const length = elements.length + numOfAjaxRequests;

      const step = (c: number, p: number): void => {
        setTimeout(() => {
          loaderStep(c, p);
          if (Math.round(p) === 100) {
            setTimeout(() => {
              loadingFinished();
            }, 100);
          }
        }, c * 100);
      };

      const handleLoad = (): void => {
        percentage = (++c * 100) / length;
        step(c, percentage);
      };

      for (const elem of elements) {
        if (elem.isConnected) handleLoad();
        else elem.addEventListener("load", handleLoad.bind(this));
      }
    }
  };

  return { start };
}

const preloaderLoaderStep: LoaderStepFunction = (c, p) => {
  // bar
  const preloaderBar = document.getElementById("preloader-bar");
  if (preloaderBar) {
    preloaderBar.style.width = p + "%";
  }

  // percentage
  const insideCircle = document.querySelector("#preloader-wrapper .inside-circle");
  if (insideCircle) {
    insideCircle.innerHTML = Math.round(p) + "%";
  }
};

const preloaderLoadingFinished: LoadingFinishedFunction = () => {
  const preloaderWrapper = document.getElementById("preloader-wrapper");
  if (preloaderWrapper) {
    preloaderWrapper.style.display = "none";
  }
  const contentElement = document.getElementById("content");
  if (contentElement) {
    contentElement.style.display = "block";
  }
};

const preloader = createPreloader(0, preloaderLoaderStep, preloaderLoadingFinished);

export default function Preloader(): JSX.Element {
  useEffect(() => {
    // Check if running in a browser environment
    if (typeof window !== 'undefined') {
      preloader.start();
    }
  }, []);

  return (
    <section id="preloader-wrapper" className="relative">
      <span className="d-block absolute preloader-bar"></span>
      <span id="preloader-bar" className="d-block absolute preloader-bar2"></span>
      <div className="inside-circle"> 0% </div>
    </section>
  );
}
