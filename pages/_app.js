import React from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";

import "../styles/globals.scss";
import * as locales from "../content/locale";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { pathname, locale, defaultLocale } = router;
  const localeCopy = locales[locale];
  const messages = Object.assign(localeCopy["shared"], localeCopy[pathname]);

  const textAnimationControls = useAnimation();

  const variants = {
    visible: {
      opacity: 1,
      transition: { delay: 0, duration: 2, ease: "circInOut" },
    },
    instantlyVisible: { opacity: 1, transition: { duration: 0 } },
    hidden: { opacity: 0 },
  };

  const defaultPageTransition = {
    initial: false,
    animate: "instantlyVisible",
  };

  let [runningAnimations, setRunningAnimations] = React.useState([]);
  const [pageTransition, setPageTransition] = React.useState(
    defaultPageTransition
  );
  const [futurePageTransition, setFuturePageTransition] = React.useState();

  React.useEffect(() => {
    if (!runningAnimations.includes("visible") && futurePageTransition) {
      setPageTransition(futurePageTransition);
      setFuturePageTransition(null);
    }
  }, [runningAnimations]);

  const updatePageTransition = (v) => {
    let transition = v;

    if (v === "default") {
      transition = defaultPageTransition;
    }

    if (runningAnimations.length) {
      setFuturePageTransition(transition);
    } else {
      setPageTransition(transition);
    }
  };

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <AnimateSharedLayout type="crossfade">
        <div
          dir={pathname !== "/" && locale === "ar" ? "rtl" : "ltr"}
          className={"locale " + locale}
        >
          <motion.div
            key={pathname}
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            variants={variants}
            onAnimationStart={() => {
              runningAnimations.push(pageTransition.animate);
              setRunningAnimations(runningAnimations);
            }}
            onAnimationComplete={(definition) => {
              runningAnimations = runningAnimations.filter(
                (e) => e !== definition
              );
              setRunningAnimations(runningAnimations);
            }}
          >
            <Component
              updatePageTransition={updatePageTransition}
              textAnimationControls={textAnimationControls}
              {...pageProps}
            />
          </motion.div>
        </div>
      </AnimateSharedLayout>
    </IntlProvider>
  );
}

export default MyApp;
