const { createApp } = Vue

createApp({

    data() {
        return {
            lista: [],
            numero: ''
        }
    },
    methods: {
        chiamaMail() {
            for (let index = 0; index < this.numero; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    console.log(result.data.response);
                    this.lista.push(result.data.response)
                });
            }
        }
    },
    mounted() {

    }

}).mount('#app');