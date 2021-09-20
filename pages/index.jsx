import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const blackcss = {
        margin: 10,
        border: "0px",
        color: "blue",
        backgroundColor: "yellow",
        width: "70%",
        height: "40px",
    };
    const bluecss = {
        margin: 10,
        border: "0px",
        color: "White",
        backgroundColor: "red",
        width: "70%",
        height: "40px",
    };
    const redcss = {
        margin: 10,
        border: "0px",
        color: "black",
        backgroundColor: "skyblue",
        width: "70%",
        height: "40px",
    };

    const redirect = async (some) => {
        if (some) {
            const fetchResp = await fetch("/api/hello");
            const fJson = await fetchResp.json();
            if (fJson.ok) {
                window.location.href = fJson.url;
            } else {
                alert("Попробуйте снова");
            }
        } else {
            alert("Попробуйте снова");
        }
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Подтвердите, что вы человек</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <h2>Подтвердите, что вы человек</h2>
                </div>
                <div>
                    <h3>Нажмите красную кнопку</h3>
                    <div>
                        <button
                            onClick={() => {
                                redirect(false);
                            }}
                            style={blackcss}
                        >
                            Черная
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                redirect(true);
                            }}
                            style={bluecss}
                        >
                            Синяя
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                redirect(true);
                            }}
                            style={redcss}
                        >
                            Красная
                        </button>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>Все права защищены</footer>
        </div>
    );
}
