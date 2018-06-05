var app=new Vue({
    el:'#app',
    data:{
        newtodoTitle:'',
        newTodoTime1:'',
        newTodoTime2:'',
        comment:'',
        todo:[
            {
                id:'',
                title:'預設',
                time:'預設',
                comment:'預設',
                complet:''
            }
        ]
    },
    methods:{
        add:function(){
            var new_title=this.newtodoTitle;
            var Timevalue=this.newTodoTime1+this.newTodoTime2;
            var time=Math.floor(Date.now());
            // console.log(value+time);
            this.todo.push({
                id:time,
                title:new_title,
                time:Timevalue,
                complet:false
            });
            this.newtodoTitle='';
            this.newTodoTime1='';
            this.newTodoTime2='';
            this.comment='';
        },
        remove:function(key){
            this.todo.splice(key,1);
            console.log('123');
        },
        cancle:function(){
            this.newtodoTitle='';
            this.newTodoTime1='';
            this.newTodoTime2='';
            this.comment='';
        }
    }
})