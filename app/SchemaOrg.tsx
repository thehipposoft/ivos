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
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "IVOS",
                        "url": "https://ivos.com.ar/",
                        "logo": "https://ivos.com.ar/assets/images/svg/logo.svg",
                        "image": "https://ivos.com.ar/assets/images/og-image.png",
                        "description": "Combinamos conocimiento técnico y visión estética para seleccionar materiales de alta calidad, proponer soluciones innovadoras y garantizar resultados eficientes.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "AR",
                            "addressRegion": "Salta"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+54-9-387-529-6426",
                            "contactType": "customer service",
                            "areaServed": "AR",
                            "availableLanguage": "es"
                        },
                        "sameAs": [
                            "https://www.instagram.com/ivos.ok/"
                        ]
                    }),
                }}
            />
        </>
    )
}

export default SchemaOrg