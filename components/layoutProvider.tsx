import React from 'react';
import {Urbanist} from "next/font/google";
import {ConfigProvider} from 'antd';


const urbanist = Urbanist({subsets: ['latin']});

function LayoutProvider({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body
            className={urbanist.className}
            data-new-gr-c-s-check-loaded="14.1218.0"
            data-gr-ext-installed=""
        >
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#000',
                    borderRadius: 2,
                    fontFamily: `${urbanist.style.fontFamily}, sans-serif`, // Set global font
                },
                components: {
                    Form: {
                        itemMarginBottom: 24,
                        labelFontSize: 14,
                        labelColor: 'var(--primary-color)', // Use a CSS variable for consistency
                    },
                    Input: {
                        controlOutline: 'var(--primary-focus-halo-color)',
                        controlOutlineWidth: 2,
                        paddingBlock: 8,
                        paddingInline: 12,
                        hoverBorderColor: 'var(--primary-focus-color)',
                        activeBorderColor: 'var(--primary-focus-color)',
                        fontSize: 16,
                        lineHeight: 1.5,
                    },
                    Typography: {
                        colorText: 'var(--primary-color)',
                        fontWeightStrong: 600,
                        fontSize: 14, // Label font size
                        lineHeight: 1.5, // Label line-height
                    },
                },

            }
            }
        >
            {children}
        </ConfigProvider>
        </body>
        </html>
    )
}

export default LayoutProvider
