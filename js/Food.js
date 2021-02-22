class Food
{
    constructor()
    {
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0;
        this.lastFed;
    }

    display()
    {
        var x = 80
        var y = 100;

        imageMode(CENTER);
        //image(this.image, 200, 150, 70, 70);

        if(this.foodStock !== 0)
        {
            for(var i=0; i < this.foodStock; i++)
            {
                if(i%10===0)
                {
                    x = 80;
                    y = y+50;
                }
                
               image(this.image, x, y, 50, 50);
                x = x+30;
            }
        }
    }

    getFoodStock()
    {
        foodStockRef = database.ref('food')
        foodStockRef.on("value", (data)=>
        {
            this.foodStock = data.val();
        })

    }
    
    updateFoodStock(foodLeft,h)
    {
        database.ref('/').update({
            food: foodLeft,
            FeedTime: h
          })
    }

    deductFood()
    {
        database.ref('/').update(foodS)     
    }

    getFedTime(lastFed)
    {
        this.lastFed = lastFed;
    }
}