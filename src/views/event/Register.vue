<template>
        <h4>Register event</h4>
        <button @click="registerEvent">Register</button>
</template>

<script>
export default {
    props: ['event'],
    inject: ['GStore'],
    methods: {
        registerEvent() {
            this.GStore.flashMessage = `You have successfully registered for ${this.event.title}`

            setTimeout(() => {
                this.GStore.flashMessage = '';
            }, 3000);

            this.$router.push({
                name: 'EventDetails',
                params: { id: this.event.id }
            })
        }
    }
}
</script>
