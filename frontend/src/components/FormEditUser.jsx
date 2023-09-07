import React from 'react';

const FormEditUser = () => {
    return (
        <div>
            <h1 className='title'>User</h1>
            <h2 className='subtitle'>Update User</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <lable className="lable">Name</lable>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Name' />
                                </div>
                            </div>
                            <div className="field">
                                <lable className="lable">Email</lable>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Email' />
                                </div>
                            </div>
                            <div className="field">
                                <lable className="lable">Password</lable>
                                <div className="control">
                                    <input type="password" className="input" placeholder='*******' />
                                </div>
                            </div>
                            <div className="field">
                                <lable className="lable">Confirm Password</lable>
                                <div className="control">
                                    <input type="password" className="input" placeholder='*******' />
                                </div>
                            </div>
                            <div className="field">
                                <lable className="lable">Role</lable>
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                        </select>
                                    </div>
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

export default FormEditUser