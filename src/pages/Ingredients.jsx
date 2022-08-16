
import styles from "./Ingredients.module.css";
import React from "react";

export default function Ingredients() {

    return (
        <main className={styles.main__page}>
            <div className={styles.main}>
                <h2 className={`text text_type_main-medium mb-6 ${styles.title}`}>
                    Детали ингредиента
                </h2>
                <div className={styles.container}>
                    <img src={'https://code.s3.yandex.net/react/code/bun-01-large.png'} alt={'asd'} />
                    <h3 className="text text_type_main-medium mt-4 mb-8">
                        Биокотлета из марсианской Магнолии
                    </h3>
                    <ul className={styles.list}>
                        <li className={`mr-5 ${styles.item}`}>
                            <p className="text text_type_main-default text_color_inactive">
                                Калории,ккал
                            </p>
                            <p className="text text_type_main-default text_color_inactive">
                                {}
                            </p>
                        </li>
                        <li className={`mr-5 ${styles.item}`}>
                            <p className="text text_type_main-default text_color_inactive">
                                Белки, г
                            </p>
                            <p className="text text_type_main-default text_color_inactive">
                                {}
                            </p>
                        </li>
                        <li className={`mr-5 ${styles.item}`}>
                            <p className="text text_type_main-default text_color_inactive">
                                Жиры, г
                            </p>
                            <p className="text text_type_main-default text_color_inactive">
                                {}
                            </p>
                        </li>
                        <li className={styles.item}>
                            <p className="text text_type_main-default text_color_inactive">
                                Углеводы, г
                            </p>
                            <p className="text text_type_main-default text_color_inactive ">
                                {}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
