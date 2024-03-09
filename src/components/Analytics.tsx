import Script from 'next/script'

const Analytics = () => (
    <>
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TYPJ9DPLLP"
        />
        <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-TYPJ9DPLLP');
                `,
            }}
        />
        <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "kyu46bghqh");
                `
            }}
        />
        <Script
            id="umami-script"
            strategy="afterInteractive"
            src="https://us.umami.is/script.js"
            data-website-id="41debfa9-43f3-4fe9-a9c0-33b4451f9f81"
        />
    </>
)

export default Analytics
