function person(name,age,place){
    
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name:"+this.name+" Age:"+this.age+" Place:"+this.place)
    }
}

var anriudh=new person("Aniurdh",17,"Mahe")

var jumail=new person("Jumail",18,"Mahe")

anriudh.display()
jumail.display()