const app = new Vue({
    el: '#app',
    date: {
    },
    methods: {
      
    },
    mounted() {
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response){
                const result = response.data.response;
                console.log(result);
                document.querySelector('ol').innerHTML += `<li>${result}</li>`;
            });
        }
        
    }
})