import React from 'react';

const FormEditProduct = () => {
    return (
        <div>
            <h1 className='title'>Products</h1>
            <h2 className='subtitle'>Edit Product</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <lable className="lable">Name</lable>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Product Name' />
                                </div>
                            </div>
                            <div className="field">
                                <lable className="lable">Price</lable>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Price' />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-success">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditProduct
