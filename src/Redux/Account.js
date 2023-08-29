import { useSelector } from "react-redux"

function Account() {
    let data = useSelector((state) => {
        return state;
    });
    return (
        <>
            <div className="container">
                <h2 className="text-primary">
                    Account Details
                </h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>User Name</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <td>{data.balance}</td>
                            <td>{data.fullName}</td>
                            <td>{data.mobile}</td>

                        </tr>
                    </thead>
                </table>

            </div>
        </>
    )
}

export default Account;