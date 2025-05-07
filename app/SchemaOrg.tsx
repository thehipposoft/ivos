'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-org"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "IVOS",
                        "url": "https://ivos.com.ar/",
                        "logo": "https://ivos.com.ar/assets/images/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+54 9 387 529 6426",
                            "contactType": "customer service",
                            "areaServed": "AR",
                            "availableLanguage": "es"
                        },
                        "sameAs": [
                            "https://www.instagram.com/ivos.ok/",
                        ]
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg