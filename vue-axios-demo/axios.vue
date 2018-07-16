<template>
  <div class="wrapper">
      <button @click="axios_get1">axios.get1</button>
      <hr>
      <button @click="axios_get2">axios.get2</button>
      <hr>
      <button @click='axios_post1'>axios_post1</button>
      <hr>
      <button @click='axios_post2'>axios_post2</button>
      <hr>
      <button @click='axios_post3'>axios_post3</button>
      <hr>
      <button @click='axios1'>axios1</button>
      <hr>
      <button @click="axios2">axios2</button>


  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      axios_get1(){
          this.$axios.get('/api'+'/user1?ID=123')
          .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });
      },
      axios_get2(){
          this.$axios.get('/api'+'/user2',{
              params:{
                  ID:123
              }
          })
          .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });
      },
      axios_post1(){
          this.$axios.post('/api'+'/user1',{
              firstName:'ths',
              lastName:'the'
          })
           .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });
      },
      axios_post2(){
          this.$axios.post('/api'+'/user2',{
              firstName:'ths',
              lastName:'the'
          })
           .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });
      },
      axios_post3(){
          this.$axios({
              method:'post',
              url:'/api'+'/user3',
              headers:{
                  'Content-type':'application/x-www-form-urlencoded'
              },
              data:{
                  firstName:'ths',
                  lastName:'the'
              },
              transformRequest:[function(data){
                  let ret='';
                  for(let it in data){
                      ret+=encodeURIComponent(it)+'='+encodeURIComponent(data[it])+'&'
                  }
                  return ret;
              }],
          })
           .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });


      },
      //post请求用data,默认提交是application/json编码方式，传递到后台的将是序列化后的json字符串 
      axios1(){
          this.$axios({
              method:'post',
              url:'/api'+'/user1',
              data:{
                  firstName:'ths',
                  lastName:'the'
              }
          })
           .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });
          
      },
      //get请求用params
      axios2(){
          this.$axios({
              method:'get',
              url:'/api'+'/user1',
              params:{
                  ID:123
              },
          })
           .then(function(response){
              console.log(response);
          })
          .catch(function(response){
              console.log(response);
          });
          
      }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>