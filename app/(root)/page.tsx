import HeaderBox from "@/components/HeaderBox";
import TotalBalancebox from "@/components/TotalBalanceBox";
import React from "react";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async() => {
    const loggedIn = await getLoggedInUser();
    return (
        <section className="home" >
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type = "greeting"
                        title = "Welcome"
                        user = {loggedIn?.name || 'Guest'}
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
                banks={[{ currentBalance: 695.50 }, { currentBalance: 1269.50}]}
                />
        </section>
    )
}

export default Home