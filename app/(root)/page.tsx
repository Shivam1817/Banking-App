import HeaderBox from "@/components/HeaderBox";
import TotalBalancebox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = { firstName: 'Shivam'}
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

            </div>
        </section>
    )
}

export default Home