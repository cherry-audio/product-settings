Nova.booting((Vue, router, store) => {
    Vue.component('index-product-settings', require('./components/IndexField'))
    Vue.component('detail-product-settings', require('./components/DetailField'))
    Vue.component('form-product-settings', require('./components/FormField'))
})
