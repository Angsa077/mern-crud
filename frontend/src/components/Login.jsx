import React from 'react'

const Login = () => {
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form className='box'>
                                <h1 className='title is-2'>Sign In</h1>
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
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
