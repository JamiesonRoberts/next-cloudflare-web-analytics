import React, { ReactNode } from 'react'
import Script from 'next/script'

const cloudflareBeaconUrl: string =
    'https://static.cloudflareinsights.com/beacon.min.js'

export default function CloudflareWebAnalyticsProvider(props: {
    /**
     * The Cloudflare Web Analytics token provided by Cloudflare
     */
    token: string
    /**
     * Set this to true to disable measuring SPA's as described in
     * https://developers.cloudflare.com/analytics/web-analytics/getting-started/web-analytics-spa/
     */
    spaIsDisabled?: boolean
    /**
     * Use this to explicitly decide whether to render script. If not passed the script will only be
     * rendered in production environments.
     */
    enabled?: boolean
    children?: ReactNode | ReactNode[]
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
                        props.spaIsDisabled ? 'spa=false' : null,
                    ]
                        .filter(Boolean)
                        .join('&')}`}
                />
            )}
            {props.children}
        </>
    )
}
