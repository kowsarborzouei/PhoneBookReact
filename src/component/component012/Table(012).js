import '../component012/Table-style.css'

function ComponentTable() {
    return (
        <div className={'container--table'}>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Kowsar</td>
                    <td>Borzuei</td>
                    <td>09150619413</td>
                    <td>k.borzuei@gmail.com</td>
                </tr>
                <tr>
                    <td>Kowsar</td>
                    <td>Borzuei</td>
                    <td>09150619413</td>
                    <td>k.borzuei@gmail.com</td>
                </tr>

                </tbody>

            </table>
        </div>
    )
}

export default ComponentTable