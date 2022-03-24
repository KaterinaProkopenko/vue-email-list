const app = new Vue({
    el: '#app',
    date: {
    },
    methods: {
      emailList(){
        document.querySelector('ol').innerHTML = '';
        document.getElementById('image').innerHTML = '';
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function (response){
                const result = response.data.response;
                document.querySelector('ol').innerHTML += `<li>${result}</li>`;
            });
        }
      },
      image(){
        document.querySelector('ol').innerHTML = '';
        document.getElementById('image').innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkf662_C-fcZbWA2jyoA4E0xK_BwgSDKA33A&usqp=CAU">`
      }
    }
})