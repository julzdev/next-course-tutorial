const dev = process.env.NODE_ENV !== 'production'

const urlDev = 'http://localhost:3000'
const urlLive = 'https://yourWebsiteDomain.com'

export const server = dev ? urlDev : urlLive