import { useTranslations } from "next-intl";




export default function Faqs() {
    const t = useTranslations("Index");
    const Questions = [
        {
            id: 1,
            question: t("questionList.title1"),
            url: "/what-is-binary-code"
        },
        {
            id: 2,
            question: t("questionList.title2"),
            url: "/what-is-hexadecimal-code"
        },
        {
            id: 3,
            question: t("questionList.title3"),
            url: "/what-is-octal-code"
        },
        {
            id: 4,
            question: t("questionList.title4"),
            url: "/binary-to-decimal-conversion"
        },
        {
            id: 5,
            question: t("questionList.title5"),
            url: "/binary-to-hexadecimal-conversion"
        },
        {
            id: 6,
            question: t("questionList.title6"),
            url: "/binary-to-octal-conversion"
        },
        {
            id: 7,
            question: t("questionList.title7"),
            url: "/binary-to-text-conversion"
        },
        {
            id: 8,
            question: t("questionList.title8"),
            url: "/decimal-to-binary-conversion"
        },
        {
            id: 9,
            question: t("questionList.title9"),
            url: "/decimal-to-hexadecimal-conversion"
        },
        {
            id: 10,
            question: t("questionList.title10"),
            url: "/decimal-to-octal-conversion"
        },
        {
            id: 11,
            question: t("questionList.title11"),
            url: "/decimal-to-text-conversion"
        },
        {
            id: 12,
            question: t("questionList.title12"),
            url: "/octal-to-binary-conversion"
        },
        {
            id: 13,
            question: t("questionList.title13"),
            url: "/octal-to-decimal-conversion"
        },
        {
            id: 14,
            question: t("questionList.title14"),
            url: "/octal-to-text-conversion"
        },
        {
            id: 15,
            question: t("questionList.title15"),
            url: "/octal-to-hexadecimal-conversion"
        },
        {
            id: 16,
            question: t("questionList.title16"),
            url: "/hexadecimal-to-binary-conversion"
        },
        {
            id: 17,
            question: t("questionList.title17"),
            url: "/hexadecimal-to-decimal-conversion"
        },
        {
            id: 18,
            question: t("questionList.title18"),
            url: "/hexadecimal-to-octal-conversion"
        },
        {
            id: 19,
            question: t("questionList.title19"),
            url: "/hexadecimal-to-text-conversion"
        },
    ]
    return (
        <div className="bg-white dark:bg-[#24283b] text-slate-700 dark:text-zinc-300">
            <div className="mx-auto max-w-7xl py-20 sm:py-20 lg:py-20 ">
                <h2 className="text-3xl font-bold leading-10 tracking-tight ">{t("faq")}</h2>
                {
                    Questions.map((question) => (
                        <div key={question.id} className="pt-5 hover:text-indigo-500" id="faq1" >
                            <h3 className="text">
                                <a href={question.url}>{question.id}. {question.question}</a>
                            </h3>
                        </div>
                    ))
                }
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
