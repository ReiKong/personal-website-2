import React, { useEffect } from 'react';

class Preloader {
  c: number = 0;
  percentage: number = 0;
  length: number = 0;
  elements: Element[] = [];

  loaderStep: (c: number, p: number) => void = () => {};
  loadingFinished: () => void = () => {};
  step = (c: number, p: number): void => {
    setTimeout(() => {
      this.loaderStep(c, p);
      if (Math.round(p) === 100) {
        setTimeout(() => {
          this.loadingFinished();
        }, 100);
      }
    }, c * 100);
  };

  handleLoad(): void {
    this.percentage = (++this.c * 100) / this.length;
    this.step(this.c, this.percentage);
  }

  constructor(numOfAjaxRequests: number, loaderStep: (c: number, p: number) => void, loadingFinished: () => void) {
    this.elements = Array.from(document.querySelectorAll<Element>(
      "link, img:not([loading='lazy']), object:not([loading='lazy']), iframe:not([loading='lazy']), video:not([loading='lazy']), audio:not([loading='lazy'])"
    ));

    this.length = this.elements.length + numOfAjaxRequests;

    if (typeof loaderStep === "function") this.loaderStep = loaderStep;
    if (typeof loadingFinished === "function") this.loadingFinished = loadingFinished;

    for (const elem of this.elements) {
      if (elem.isConnected) this.handleLoad();
      else elem.addEventListener("load", this.handleLoad.bind(this));
    }
  }
}

const PreloaderComponent: React.FC = () => {
  useEffect(() => {
    const loadingFinishedCallback = () => {
      const preloaderWrapper = document.getElementById("preloader-wrapper");
      if (preloaderWrapper) {
        preloaderWrapper.className = "hidden";
      }
      const contentElement = document.getElementById("content");
      if (contentElement) {
        contentElement.className = "flex flex-col";
      }
    };

    const preloader = new Preloader(
      0,
      (c, p) => {
        const preloaderBar = document.getElementById("preloader-bar");
        if (preloaderBar) {
          preloaderBar.style.width = p + "%";
        }
        const insideCircle = document.querySelector("#preloader-wrapper .inside-circle");
        if (insideCircle) {
          insideCircle.innerHTML = Math.round(p) + "%";
        }
      },
      loadingFinishedCallback
    );

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <section id="preloader-wrapper">
      <div className="relative">
        <span className="d-block absolute preloader-bar"></span>
        <span id="preloader-bar" className="d-block absolute preloader-bar2"></span>
      </div>

      <div>
        <div className="circle-wrap m-auto">
          <div className="circle">
            <div className="mask full rotate">
              <div className="fill rotate"></div>
            </div>
            <div className="mask half">
              <div className="fill rotate"></div>
            </div>
            <div className="inside-circle"> 0% </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreloaderComponent;