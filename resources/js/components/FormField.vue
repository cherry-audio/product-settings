<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <div class="mb-4">
                <label for="keywords" class="text-80 leading-tight block mb-2">Keywords</label>
                <input
                    type="text"
                    id="keywords"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    placeholder="Keywords"
                    v-model="field.value.keywords"
                >
            </div>

            <div class="mb-4">
                <label for="help_url" class="text-80 leading-tight block mb-2">Help URL</label>
                <input
                    type="text"
                    id="help_url"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    placeholder="Help URL"
                    v-model="field.value.help_url"
                >
            </div>

            <div class="mb-4">
                <label for="regular_price" class="text-80 leading-tight block mb-2">Regular Price</label>
                <input
                    type="text"
                    id="regular_price"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    placeholder="Regular Price"
                    v-model="field.value.regular_price"
                >
            </div>

            <div class="mb-4">
                <label for="not_sold_individually">
                    <input
                        type="checkbox"
                        id="not_sold_individually"
                        :class="errorClasses"
                        placeholder="Not Sold Individually"
                        v-model="field.value.not_sold_individually"
                    >
                    Not Sold Individually
                </label>
            </div>

            <div class="mb-4">
                <label for="hide_in_store">
                    <input
                        type="checkbox"
                        id="hide_in_store"
                        :class="errorClasses"
                        placeholder="Hide in Store"
                        v-model="field.value.hide_in_store"
                    >
                    Hide in Store
                </label>
            </div>

            <div class="mb-4">
                <label for="demo_available">
                    <input
                        type="checkbox"
                        id="demo_available"
                        :class="errorClasses"
                        placeholder="Demo Available"
                        v-model="field.value.demo_available"
                    >
                    Demo Available
                </label>
            </div>

            <div class="mb-4">
                <label for="demo_length" class="text-80 leading-tight block mb-2">Demo Length</label>
                <input
                    type="text"
                    id="demo_length"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    placeholder="Demo Length"
                    v-model="field.value.demo_length"
                >
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ["resourceName", "resourceId", "field"],

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            if (_.isEmpty(this.field.value)) {
                this.value = JSON.stringify({});
                this.field.value = {};
            } else {
                this.value = JSON.stringify(this.field.value);
            }
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || "");
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value;
        }
    },

    watch: {
        field: {
            handler() {
                this.value = JSON.stringify(this.field.value);
            },
            deep: true
        }
    }
};
</script>
