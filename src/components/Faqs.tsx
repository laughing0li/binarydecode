import { useTranslations } from "next-intl";

export default function Faqs() {
    const t = useTranslations("Index");
    return (
        <div className="bg-white dark:bg-[#24283b] text-slate-700 dark:text-zinc-300">
            <div className="mx-auto max-w-7xl py-20 sm:py-20 lg:py-20">
                <h2 className="text-3xl font-bold leading-10 tracking-tight ">{t("faq")}</h2>
                <div className="pt-10" id="faq1">
                    <h3 className="text-xl font-semibold">
                        {t("faq1.title")}
                    </h3>
                    <p className="font-light pt-2">
                        {t("faq1.step1")}
                    </p>
                    <p className="font-light pt-2">
                        {t("faq1.step2")}
                    </p>
                </div>
                <div className="pt-10" id="faq2">
                    <h3 className="text-xl font-semibold">
                        {t("faq2.title")}
                    </h3>
                    <p className="font-light pt-2">
                        {t("faq2.step1")}
                    </p>
                    <p className="font-light pt-2">
                        {t("faq2.step2")}
                    </p>
                </div>
                <div className="pt-10" id="faq3">
                    <h3 className="text-xl font-semibold">
                        {t("faq3.title")}
                    </h3>
                    <p className="font-light pt-2">
                        {t("faq3.step1")}
                    </p>
                    <p className="font-light pt-2">
                        {t("faq3.step2")}
                    </p>
                </div>
                <div className="pt-10" id="faq4">
                    <h3 className="text-xl font-semibold">
                        {t("faq4.title")}
                    </h3>
                    <p className="font-light pt-2">
                        {t("faq4.step1")}
                    </p>
                </div>
                <div className="pt-10" id="faq5">
                    <h3 className="text-xl font-semibold">
                        {t("faq5.title")}
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>{t("faq5.step1")}</li>
                            <li>{t("faq5.step2")}</li>
                            <li>{t("faq5.step3")}</li>
                            <li>{t("faq5.step4")}</li>
                            <li>{t("faq5.step5")}</li>
                            <li>{t("faq5.step6")}</li>
                            <li>{t("faq5.step7")}</li>
                        </ol>
                    </div>
                </div>

                <div className="pt-10" id="faq6">
                    <h3 className="text-xl font-semibold">
                        {t("faq6.title")}
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>{t("faq6.step1")}</li>
                            <li>{t("faq6.step2")}</li>
                            <li>{t("faq6.step3")}</li>
                            <li>{t("faq6.step4")}</li>
                            <li>{t("faq6.step5")}</li>
                            <li>{t("faq6.step6")}</li>
                            <li>{t("faq6.step7")}</li>
                            <li>{t("faq6.step8")}</li>
                        </ol>
                    </div>
                </div>
                <div className="pt-10" id="faq7">
                    <h3 className="text-xl font-semibold">
                        {t("faq7.title")}
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>{t("faq7.step1")}</li>
                            <li>{t("faq7.step2")}</li>
                            <li>{t("faq7.step3")}</li>
                            <li>{t("faq7.step4")}</li>
                            <li>{t("faq7.step5")}</li>
                            <li>{t("faq7.step6")}</li>
                            <li>{t("faq7.step7")}</li>
                            <li>{t("faq7.step8")}</li>
                        </ol>
                    </div>
                </div>
                <div className="pt-10" id="faq8">
                    <h3 className="text-xl font-semibold">
                        {t("faq8.title")}
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>{t("faq8.step1")}</li>
                            <li>{t("faq8.step2")}</li>
                            <li>{t("faq8.step3")}</li>
                            <li>{t("faq8.step4")}</li>
                            <li>{t("faq8.step5")}</li>
                            <li>{t("faq8.step6")}</li>
                            <li>{t("faq8.step7")}</li>
                            <li>{t("faq8.step8")}</li>
                        </ol>
                    </div>
                </div>

                <div className="pt-10" id="faq9">
                    <h3 className="text-xl font-semibold">
                        {t("faq9.title")}
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>{t("faq9.step1")}</li>
                            <li>{t("faq9.step2")}</li>
                            <li>{t("faq9.step3")}</li>
                            <li>{t("faq9.step4")}</li>
                            <li>{t("faq9.step5")}</li>
                            <li>{t("faq9.step6")}</li>
                            <li>{t("faq9.step7")}</li>
                        </ol>
                    </div>
                </div>

                <div className="pt-10" id="faq10">
                    <h3 className="text-xl font-semibold">
                        {t("faq10.title")}
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>{t("faq10.step1")}</li>
                            <li>{t("faq10.step2")}</li>
                            <li>{t("faq10.step3")}</li>
                            <li>{t("faq10.step4")}</li>
                            <li>{t("faq10.step5")}</li>
                            <li>{t("faq10.step6")}</li>
                            <li>{t("faq10.step7")}</li>
                        </ol>
                    </div>
                </div>

                <div className="pt-10" id="faq11">
                    <h3 className="text-xl font-semibold">
                        {t("faq11.title")}
                    </h3>
                    <div className="font-light pt-2">
                        <ol className="list-decimal pl-6">
                            <li>{t("faq11.step1")}</li>
                            <li>{t("faq11.step2")}</li>
                            <li>{t("faq11.step3")}</li>
                            <li>{t("faq11.step4")}</li>
                            <li>{t("faq11.step5")}</li>
                            <li>{t("faq11.step6")}</li>
                        </ol>
                    </div>
                </div>

                <div className="pt-10" id="faq12">
                    <h3 className="text-xl font-semibold">
                        {t("faq12.title")}
                    </h3>
                    <p className="font-light pt-2">
                        {t("faq12.step1")}
                    </p>
                </div>
                <div className="pt-10" id="faq13">
                    <h3 className="text-xl font-semibold">
                        {t("faq13.title")}
                    </h3>
                    <p className="font-light pt-2">
                        {t("faq13.step1")}
                    </p>
                </div>
            </div>
        </div>
    )
}
