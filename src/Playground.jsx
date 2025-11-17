import Header from "./components/playground/Header"
import Products from "./components/playground/Products"
import Quotes from "./components/playground/Quotes"
import Footer from "./components/playground/Footer"
import Dashboard from "./components/playground/Dasboard"
import Login from "./components/playground/Login"
import { useState } from "react"   // useState is a hook , 


// props can be pased from parents to child


const Playground = () => {
    const products = ['Iphone 17', 'Dell Laptop', '1kg Dark Chocolate', 'Probiotics Greek Yogourt']


    const posts = [
        {
            id: 1,
            title: "Never Give Up",
            summary: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            poster: " Winston Churchill",
            date: "september 30 1967"
        },
        {
            id: 2,
            title: "Destiny is you",
            summary: "The only person you are destined to become is the person you decide to be.",
            poster: " Ralph Waldo Emerson",
            date: "August 30 1998"
        },
        {
            id: 3,
            title: "Hardwork is life",
            summary: "The only place you find success before work is in the dictionary",
            poster: "May V. Smith",
            date: "June 30 2000"
        },
        {
            id: 4,
            title: "Dont Dream it, Work it!",
            summary: "I never dreamed about success. I worked for it",
            poster: "Estée Lauder",
            date: "June 30 2000"
        },
    ];

    const isLoggedIn = true;

    // let bal = 1000;    // beacuse bal will be changing , its 
    // hould not be kept in a variable, they should be kept in a atte 
    // anything thak keeps changing on your app , we use stateb
    // to handle bal that will be changing , we use useState hook

    const [bal, setBal] = useState(0)
    const [amount, setAmount] = useState("")

    function deposit() {
       setBal(Number(bal) + Number(amount));

    }

     function withdraw() {
       setBal(Number(bal) - Number(amount) );

    }




    return (


        <div className="container py-5">
            <Header balance={bal} />
            <Products products={products} />
            <Quotes qs={posts} />
            <button className="btn btn-danger" onClick={withdraw}>Withdraw</button>

            <input type="number" onChange={(e)=>{setAmount(e.target.value)}} value={amount}/>

            <button className="btn btn-success" onClick={deposit}>Deposit</button>

            {/* if a user is logged in, ender dashboard components, else render login components*/}

            {
                isLoggedIn ? <Dashboard /> : <Login />
            }

            <Footer balance={bal} />
        </div>

    )


}


export default Playground