import withPWA from "next-pwa"

const isDev = process.env.NODE_ENV === "development"

const nextConfig = {
 reactStrictMode: true,
 swcMinify: true
}

const pwaConfig = {
 dest: "public",
 disable: isDev,
 register: true,
 skipWaiting: true,
 fallbacks: {
  document: "/offline.html"
 }
}

export default withPWA(pwaConfig)(nextConfig)