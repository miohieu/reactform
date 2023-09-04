import  { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import baiTapForm from '../../store/baitapForm/slice'


const ProductForm = () => {
    const [formValue, setFormValue] = useState()
    const [formError, setFormError] = useState()

    // const { productEdit } = useSelector((state) => state.baiTapForm)

    const dispatch = useDispatch()

    const validate = (element: HTMLInputElement) => {
        const { validity, minLength, title, value } = element

        const { valueMissing, tooShort, patternMismatch } = validity

        let mess = ''

        if (valueMissing) {
            mess = `Vui lòng nhập ${title}`
        } else if (tooShort || value.length < minLength) {
            mess = `Vui lòng nhập ${title} tối thiểu ${minLength} ký tự`
        } else if (patternMismatch) {
            mess = `Vui lòng nhập đúng ${title}`
        }
        return mess
    }

    const handleFormValue = () => (ev : Event) => {
        const { name, value } = ev.target as HTMLInputElement
        const mess = validate(ev.target)


        setFormError({
            ...formError,
            [name]: mess,
        })

        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    // useEffect(() => {
    //     // if (!productEdit) return
    //     // setFormValue(productEdit)
    //
    //     if (productEdit) {
    //         setFormValue(productEdit)
    //     }
    // }, [productEdit])

    return (
        <div>

            <form
                noValidate
                onSubmit={(ev) => {
                    ev.preventDefault()

                    const elements = document.querySelectorAll('input')
                    console.log('elements: ', elements)

                    const errors = {}
                    elements.forEach((ele) => {
                        const { name } = ele
                        errors[name] = validate(ele)
                        // flushSync(
                        //     setFormError(() => {
                        //         return (errors[name] = validate(ele))
                        //     })
                        // )
                    })
                    setFormError(errors)
                    let isFlag = false
                    for (let key in errors) {
                        if (errors[key]) {
                            isFlag = true
                            break
                        }
                    }
                    if (isFlag) return

                    // if (!productEdit) {
                    //     // submit create prouct
                    //     dispatch(baiTapForm.addProduct(formValue))
                    // } else {
                    //     dispatch(baiTapForm.updateProduct(formValue))
                    // }

                    console.log('submit')
                }}
            >
                <h2 className="p-4 bg-dark text-warning">Product Info</h2>

                <div className="mt-3 row">
                    <div className="col-6">
                        <p>ID Sinh Vien</p>
                        <input
                            type="text"
                            className="form-control"
                            name="id"
                            title="id"
                            // disabled={!!productEdit}
                            value={formValue?.id || ''}
                            // value={productEdit?.id}
                            required
                            minLength={5}
                            maxLength={20}
                            // pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            // onChange={(ev) => {
                            //     setFormValue({
                            //         ...formValue,
                            //         id: ev.target.value,
                            //     })
                            // }}
                            onChange={handleFormValue()}
                        />
                        {formError?.id && <p className="text-danger">{formError?.id}</p>}
                    </div>
                    <div className="col-6">
                        <p>Name</p>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            title="name"
                            value={formValue?.name || ''}
                            onChange={handleFormValue()}
                            required
                            minLength={10}
                        />
                        {formError?.name && <p className="text-danger">{formError?.name}</p>}
                    </div>
                    <div className="col-6">
                        <p>So dien thoai</p>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            title="So Dien thoai"
                            value={formValue?.phone || ''}
                            onChange={handleFormValue()}
                            required
                            pattern="^[0-9]+$"
                        />
                        {formError?.phone && <p className="text-danger">{formError?.phone}</p>}
                    </div>
                    <div className="col-6">
                        <p>Email</p>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            title="email"
                            value={formValue?.email || ''}
                            onChange={handleFormValue()}
                        />
                    </div>
                </div>

                <div className="mt-3 d-flex gap-3">
                        <button className="btn btn-info">Update</button>
                </div>
            </form>
        </div>
    )
}

export default ProductForm

