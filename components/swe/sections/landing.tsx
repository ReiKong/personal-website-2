// Import
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Landing() {
    useEffect(() => {
        Aos.init({ duration: 600 });
      }, []);

      return (
        <section
            id="landing">

        </section>
      )
}