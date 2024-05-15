const { createApp } = Vue

createApp({

    data() {
        return {
            lista: []
        }
    },
    methods: {
        chiamaMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                console.log(result.data.response);
                this.lista.push(result.data.response)
            });
        }
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            this.chiamaMail()
        }
        console.log(this.lista);
    }

}).mount('#app');