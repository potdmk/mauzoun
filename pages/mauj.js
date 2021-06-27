import React from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextSeo } from 'next-seo';
import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import WhiteBox from "../components/WhiteBox";
import ContactButton from "../components/ContactButton";
import styles from "../styles/mauj.module.scss";

const backgroundColor = "#fbec9a";


export default function mauj({ textAnimationControls }) {

    const locale = useRouter().locale;

    const intl = useIntl();
    const f = (id, options) =>
      formatJsxMessage(intl, locale, id, {
        shouldFade: true,
        animationControls: textAnimationControls,
        ...options,
        
      });
  
    return (

        <> 

        <NextSeo
            title={locale !== "ar" ? "Mauzoun | Portfolio | Mauj" : "مَوْزوْن | أعمالنا | موج"}
            description={locale !== "ar" ? "Mauzoun | Portfolio | Mauj"   : "مَوْزوْن | أعمالنا| موج "}
        />

        <div>

            <Menu
                backgroundColor={backgroundColor}
                // textAnimationControls={textAnimationControls}
            />

            <div
                className='container'
                style={{ backgroundColor }}
                // layout="position"
            >
                <div className="intro">
                    <span className={styles.title1}>{f("intro.title")}</span>
                    <p className={styles.para1}>{f("intro.para")}</p>
                </div>

                <div className="meeting">
                    <span className={styles.title1}>{f("meeting.title")}</span>
                    <span className={styles.para1}>{f("meeting.para1")}</span>
                    <span className={styles.para1}>{f("meeting.para2")}</span>
                </div>  

                <div className={styles.tone}>
                    <span className={styles.title1}>{f("tone.title")}</span>
                    <ul className={styles.list}>
                        <li>{f("tone.listElement1")}</li>
                        <li>{f("tone.listElement2")}</li>
                        <li>{f("tone.listElement3")}</li>
                        <li>{f("tone.listElement4")}</li>
                    </ul>
                    <span className={styles.tone} className={styles.toneFinal}>{f("tone.final")}</span>
                    <span className={styles.para1}>{f("tone.para1")}</span>
                    <span className={styles.para1}>{f("tone.para2")}</span>

                    <div class={styles.instaGrid}>
                        <div className={styles.cell1}><iframe className={styles.frame} width="250" height="300" src="https://www.instagram.com/p/CKqoCo5FZHM/embed" frameborder="0"></iframe></div>
                        <div className={styles.cell2}><iframe className={styles.frame} width="250" height="300" src="https://www.instagram.com/p/CEyWFKnJtrl/embed" frameborder="0"></iframe></div>
                        <div className={styles.cell3}><iframe className={styles.frame} width="250" height="300" src="https://www.instagram.com/p/CEyT727pKDG/embed" frameborder="0"></iframe></div>
                        <div className={styles.cell4}><iframe className={styles.frame} width="250" height="300" src="https://www.instagram.com/p/CNsRmqQlVFI/embed" frameborder="0"></iframe></div>
                        <div className={styles.cell5}><iframe className={styles.frame} width="250" height="300" src="https://www.instagram.com/p/COUt156lh35/embed" frameborder="0"></iframe></div>
                        <div className={styles.cell6}><iframe className={styles.frame} width="250" height="300" src="https://www.instagram.com/p/CNaVfcWFIJm/embed" frameborder="0"></iframe></div>
                    </div>
                </div>

                <div className={styles.brand}>
                    <span className={styles.title1}>{f("brand.title")}</span>
                    <span className={styles.para1}>{f("brand.para1")}</span>
                    <span className={styles.para1}>{f("brand.para2")}</span>
                </div>

                <div className={styles.testimony}>
                    <span className={styles.title1}>{f("testimony.title")}</span>
                    <span className={styles.para1}>{f("testimony.para1")}</span>
                    <span className={styles.para1}>{f("testimony.para2")}</span>
                    <span className={styles.para1}>{f("testimony.para3")}</span>
                </div>
            </div>
            
            <ContactButton />
            
        </div>
        </>
    )
}
