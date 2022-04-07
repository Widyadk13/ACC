import React from "react";
import TitleTrending from "./TitleTrending";
import TrendingBooks from "./TrendingBooks";

function Trending() {
    return (
        <div>
            <TitleTrending />
            <div class="d-flex justify-content-sm-lg-xl-between">
                <TrendingBooks Title="Identity Threft" src="https://images.unsplash.com/photo-1597517688331-5899e22a7a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <TrendingBooks Title="Milk and Honey" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                <TrendingBooks Title="Your Soul Is A River" src="https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
                <TrendingBooks Title="The Chronicle Of Narnia" src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80" />
                <TrendingBooks Title="The Chronicle Of Narnia" src="https://images.unsplash.com/photo-1539877254216-818ed7c76096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
            </div>
        </div>
    )
}

export default Trending;