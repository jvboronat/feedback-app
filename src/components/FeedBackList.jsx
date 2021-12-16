import FeedbackItem from "./FeedbackItem"

function FeedBackList({items}) {

    //console.log(items);

    if(!items || items.lenght ===0) {
        return <p>No FeedBack Yet</p>
    }

    return (
        <div  className="feedback-list"> 
            {items.map((item)=> 
                {return (<FeedbackItem key={item.id} item={item}/> )  })
             }
        </div>
    )
}

export default FeedBackList
