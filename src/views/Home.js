import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Context } from '../store/appContext';

const defaultValues = {
    email: "ljavierrodriguez@gmail.com",
};


const Home = () => {
    const { store, actions } = useContext(Context);
    const { onSubmit } = actions;
    const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: {
        email: store.email,
        password: store.password
    } });


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-">
                    <h1>Home</h1>
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input type="email" {...register("email", { required: true, email: true })} className={"form-control" + (errors.email?.type === 'required' ? " is-invalid" : "")} />
                            <div class="invalid-feedback">
                                {errors.email?.type === 'required' && "Email is required!"}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">
                                Password
                            </label>
                            <input {...register("password", { required: true })} type="password" className={"form-control" + (errors.password?.type === 'required' ? " is-invalid" : "")} />
                            <div class="invalid-feedback">
                                {errors.password?.type === 'required' && "Password is required!"}
                            </div>
                        </div>
                        <div className="col-12">
                            <label className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="1234 Main St"
                                {...register("address1")}
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label">
                                Address 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apartment, studio, or floor"
                                {...register("address2")}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                City
                            </label>
                            <input type="text" className="form-control" id="inputCity" {...register("city")} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">
                                State
                            </label>
                            <select id="inputState" className="form-select" {...register("state")}>
                                <option selected>Choose...</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">
                                Zip
                            </label>
                            <input type="text" className="form-control" id="inputZip" {...register("postalcode", { pattern: /^[A-Za-z]+$/i })} />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Sign in
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Home;