function FoodItem(name , foodType , price , deliverTime) {
    this.name = name;
    this.foodType = foodType;
    this.price = price;
    this.deliverTime = deliverTime;
    this.rate = 0
    this.rateCount = 0
    this.comments = [];
    this.isReady = false;
    this.order = function (isPremiumUser) {
        if (isPremiumUser)
            console.log(this.price*0.8 , this.rate)
        else
            console.log(this.price*0.8 , this.rate)
    }
    this.setRate = function (rating) {
        this.rateCount++
        this.rate = ((this.rate*(this.rateCount-1)) + rating) / this.rateCount
    }
    this.addComment = function (author , comment) {
        let newComment = new Comment(author , comment)
        this.comments.push(newComment);
    }
}

function foodItem(name , foodType , price , deliverTime) {
    return {
        name ,
        foodType ,
        price ,
        deliverTime ,
        rate: 0 ,
        rateCount: 0,
        comments: [] ,
        isReady: false ,
        order: function (isPremiumUser) {
            if (isPremiumUser)
                console.log(this.price*0.8 , this.rate)
            else
                console.log(this.price*0.8 , this.rate)
        },
        setRate: function (rating) {
            this.rateCount++
            this.rate = ((this.rate*(this.rateCount-1)) + rating) / this.rateCount
        },
        addComment: function (author , comment) {
            let newComment = new Comment(author , comment)
            this.comments.push(newComment);
        }
    }
}

function Comment (author , comment) {
    this.author = author;
    this.comment = comment;
    this.rate = 0;
    this.rateCount = 0;
    this.date = new Date();
    this.setRate = function (rating) {
        this.rateCount++
        this.rate = ((this.rate*(this.rateCount-1)) + rating) / this.rateCount
    }
}

function comment (author , comment) {
    return {
        author ,
        comment ,
        rate: 0 ,
        date: new Date(),
        setRate: function (rating) {
            this.rateCount++
            this.rate = ((this.rate*(this.rateCount-1)) + rating) / this.rateCount
        }
    }
}

const foodOne = new FoodItem("pizza" , "italian" , 50000 , 45);
const foodTwo = foodItem("steak" , "fancy" , 150000 , 75);
const foodThree = new FoodItem("lasagna" , "italian" , 60000 , 55);
const foodFour = foodItem("cold soba" , "japanese" , 35000 , 25);

console.log(foodOne)
console.log(foodTwo)
console.log(foodThree)
console.log(foodFour)



foodOne.order(true)
foodOne.isReady =true;
const commentOne = new Comment("david" , "it was great");
foodOne.addComment("david" , "it was great")
foodOne.setRate(5);

foodTwo.order(false)
foodTwo.isReady =true;
const commentTwo = new Comment("thomas" , "i didn't like it");
foodTwo.addComment("thomas" , "i didn't like it");
foodTwo.setRate(3)


foodThree.order(true)
foodThree.isReady =true;
const commentThree = comment("ashley" , "it was awful");
foodThree.comments.push(commentThree);
foodThree.setRate(1)


foodFour.order(false)
foodFour.isReady =true;
const commentFour = comment("thomas" , "it wasn't the best but i liked it" , 4);
foodFour.comments.push(commentFour);
foodFour.setRate(4);

foodOne.comments.setRate(4)
foodTwo.comments.setRate(3)
foodThree.comments.setRate(2)
foodFour.comments.setRate(1)


console.log(foodOne)
console.log(foodTwo)
console.log(foodThree)
console.log(foodFour)



/////////////////////////////////////////////////////////////////////////////////////////////////


function isEqual (obj1 , obj2)
{
    if (obj1.length !== obj2.length)
        return false;
    else
    {
        for (let key in obj1)
        {
            if (obj1[key] !== obj2[key])
            {
                return false
            }
        }
    }
    return true
}

function isSame (obj1 , obj2)
{
    return obj1 === obj2
}

const obj1 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'}
}
const obj2 = {...obj1}

const obj3 = {
    key0: false,
    key1: 'val1',
    key2: 10,
    key3: [0],
}

const obj4 = obj3;

console.log(isEqual(obj1 , obj2))
console.log(isEqual(obj1 , obj3))
console.log(isSame(obj1 , obj2))
console.log(isSame(obj3 , obj4))

////////////////////////////////////////////////////////////////////////////////////////////////