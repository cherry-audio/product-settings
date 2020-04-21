<template>
    <panel-item :field="field">
        <div slot="value">
            <p class="leading-normal"><strong>Keywords:</strong> {{ field.value.keywords || '-'}}</p>
            <p class="leading-normal">
                <strong>Help Url:</strong>
                <a v-if="field.value.help_url" :href="field.value.help_url" target="_blank">{{ field.value.help_url }}</a>
                <span v-else>-</span>
            </p>
            <p class="leading-normal"><strong>Regular Price:</strong> {{ field.value.regular_price/100 || '-'}}</p>
            <p class="leading-normal"><strong>Not Sold Individually:</strong> {{ field.value.not_sold_individually || 'false'}}</p>
            <p class="leading-normal"><strong>Hide In Store:</strong> {{ field.value.hide_in_store || 'false'}}</p>
            <p class="leading-normal"><strong>Demo Available:</strong> {{ field.value.demo_available || 'false'}}</p>
            <p class="leading-normal"><strong>Demo Length:</strong> {{ field.value.demo_length || '-'}}</p>
        </div>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
