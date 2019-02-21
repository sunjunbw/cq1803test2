Page({
  data:{
    msg:"hello",
    n:1,
    arr:[{text:"aa",flag:true},{"text":"bb",flag:false},{"text":"cc",flag:true}],
    flag:true
  },
  onLoad(){
     this.getSelectCount()
    
    
      wx.request({
        url: 'https://m.lagou.com/listmore.json',
        data: {
          pageNo:2,
          pageSize:15
        },
        header: {"Content-type":"application/json"},
        method: 'GET',
        success: (res)=> {
          console.log(res)
           this.setData({
               arr1:res.data.content.data.page.result
           })
        },
        
      })
  },
  getSelectCount(){
    this.setData({
      count: this.data.arr.filter((item) => {
        return item.flag
      }).length
    })
    
  },
  checkboxChange(e){
    console.log(e);
      var id= e.currentTarget.dataset.index;
    this.data.arr[id].flag = !this.data.arr[id].flag
    this.setData({
        arr:this.data.arr,
      
    })
    this.getSelectCount()
  },
  change(){
    this.setData({
      msg:'world',
      n:this.data.n+1,
      k:123456
    })
   
  },
  change2(){
     this.setData({
       flag:!this.data.flag
     })
  },
  input(e){
    console.log(e)
    this.setData({
      str:e.detail.value
    })
  },
  ok(){
    this.data.arr.push({"text":this.data.str,flag:false})
    this.setData({
      arr:this.data.arr,
      str:''
    })
  },
  del(e){
    this.data.arr.splice(e.target.dataset.index,1)
    this.setData({
      arr:this.data.arr
    })
    this.getSelectCount()
  }
})