import React from "react";

export const TransactionList = () => {
    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                <label htmlfor="text">Text</label>
                <input type="text" className="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlfor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" className="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}