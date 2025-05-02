import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  modules: {
    stock_location: false,
    inventory: false,
    product: false,
    region: false,
    shipping: false,
    tax: false,
    user: false,
    cart: false,
    order: false,
    payment: false,
    pricing: false,
  
    // Product submodules
    product_category: false,
    product_option: false,
    product_tag: false,
    product_type: false,
    product_variant: false,
    product_image: false,
    product_media: false,
    product_rating: false,
    product_review: false,
  
    // Less common but still sometimes preloaded
    notification: false,
    return: false,
    sales_channel: false,
    upload: false,
    gift_card: false,
    swap: false,
    claim: false,
    customer: false,
    discount: false,
    fulfillment: false
  }
})
