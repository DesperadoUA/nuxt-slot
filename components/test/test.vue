<template>
    <amp-accordion id="my-accordion" disable-session-states>
        <section>
                <h2>Section 1</h2>
                <p>Content in section 1.</p>
        </section>
        <section>
                <h2>Section 2</h2>
                <div>Content in section 2.</div>
        </section>
        <section expanded>
                <h2>Section 3</h2>
                <amp-img src="/static/inline-examples/images/squirrel.jpg"
                width="320"
                height="256"></amp-img>
        </section>
    </amp-accordion>
</template>
<script>
export default {
        name: "app_test_amp",
    }
</script>