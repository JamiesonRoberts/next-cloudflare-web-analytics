import React, { ReactNode } from 'react'
import Script from 'next/script'

const cloudflareBeaconUrl: string =
    'https://static.cloudflareinsights.com/beacon.min.js'

export default function CloudflareWebAnalyticsProvider(props: {
    token: string
    spaDisable?: boolean
    enabled?: boolean
    children?: ReactNode | ReactNode[]
    scriptProps?: React.DetailedHTMLProps<
        React.ScriptHTMLAttributes<HTMLScriptElement>,
        HTMLScriptElement
    >
}) {
    const {
        enabled = process.env.NODE_ENV === 'production' &&
            (!process.env.NEXT_PUBLIC_VERCEL_ENV ||
                process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'),
    } = props

    return (
        <>
            {enabled && (
                <Script
                    src={`${cloudflareBeaconUrl}?${[
                        `token=${props.token}`,
                        props.spaDisable ? 'spa=false' : null,
                    ].join('&')}`}
                />
            )}
        </>
    )
}
