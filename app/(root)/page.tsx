import HeaderBox from "@/components/HeaderBox";
import TotalBalancebox from "@/components/TotalBalanceBox";
import React from "react";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = { firstName: 'Shivam' , lastname: 'Gupta' , email: 'shivam.chem21@gmail.com'}
    return (
        <section className="home" >
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type = "greeting"
                        title = "Welcome"
                        user = {loggedIn?.firstName || 'Guest'}
                        subtext = "Access and manage your account and transactions efficiently."
                    />
                    <TotalBalancebox
                    accounts = {[]}
                    totalBanks = {1}
                    totalCurrentBalance = {6969.69}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 690.50 }, { currentBalance: 1200.50}]}
                />
        </section>
    )
}

export default Home