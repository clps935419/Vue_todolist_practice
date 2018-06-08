var app=new Vue({
    el:'#app',
    data:{
        showlist:true,
        showbox:true,
        show:false,
        changeColor:false,
        newtodoTitle:'',
        newTodoTime1:'',
        newTodoTime2:'',
        comment:'',
        visability:'all',
        todo:[
            // {
            //     id:'',
            //     title:'',
            //     time:'',
            //     comment:'',
            //     complet:''
            // }
        ],
        
    },
    methods:{
        
        add:function(){
            var new_title=this.newtodoTitle.trim();
            var Timevalue=this.newTodoTime1+this.newTodoTime2.trim();
            var time=Math.floor(Date.now());
            // console.log(value+time);
            if(!new_title &&!Timevalue){
                return alert('請輸入資料');
            }
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
            
            this.showlist=!this.showlist;
            
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
            this.show=!this.show;
        },
       
    },
    computed:{
        filtertodo:function(){
            if(this.visability=='all'){
                return this.todo;
            }else if(this.visability=='act'){
                var newtodo=[];
                this.todo.forEach(function(item){
                    if(!item.complete){
                        newtodo.push(item);
                    }
                })
                return newtodo;
            }else if(this.visability=='complte'){
                var newtodo=[];
                this.todo.forEach(function(item){
                    if(item.complete){
                        newtodo.push(item);
                    }
                })
                return newtodo;
            }
        }
    }
})