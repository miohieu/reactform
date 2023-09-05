import  {editStudent, deleteStudent}  from '../../store/baitapForm/slice'
import { useAppDispatch, useAppSelector } from '../hooks/hook'

const ProductTable = () => {
        const  studentList  = useAppSelector((state) => state.baitapForm.studentList)
    console.log('studentList: ', studentList)

    const dispatch = useAppDispatch()

    return (
        <div className="mt-5">
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((prd) => (
                        <tr key={prd?.id}>
                            <td>{prd?.id}</td>
                            <td>{prd?.name}</td>
                            <td>{prd?.phone}</td>
                            <td>{prd?.email}</td>
                            <td>
                                <div className="d-flex gap-3">
                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            dispatch(editStudent(prd))
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(deleteStudent(prd.id))
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductTable

